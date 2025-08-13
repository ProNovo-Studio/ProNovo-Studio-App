from typing import Any, TypedDict
from langgraph.graph import StateGraph, END, START
from langchain_core.runnables import RunnableLambda, Runnable
from langchain_core.messages import AIMessage, HumanMessage
from langchain_core.tools import Tool
from langchain_openai import ChatOpenAI
from agents.tools import rf_jobs
from agents.tools import rf_diffusion_tool, pdb_search_tool, rf_diffusion_poll_tool
from langgraph.prebuilt import ToolNode, tools_condition
from langchain_core.messages import ToolMessage
from typing import Annotated
from langgraph.graph.message import add_messages
from dotenv import load_dotenv

load_dotenv()

# example prompt: design a protein using the pdb 1R42 and contigs A20-24/0 20-100 and hotspots A21, A22

class State(TypedDict):
    messages: Annotated[list, add_messages]

def poll_rf_result(state: State):
    messages = state["messages"]
    last_ai = next((m for m in reversed(messages) if isinstance(m, AIMessage) and m.tool_calls), None)
    if not last_ai:
        return state

    job_id = last_ai.tool_calls[0]["args"].get("job_id")
    if not job_id:
        return state

    job_status = rf_jobs.get(job_id, {}).get("status")
    if job_status == "completed":
        result = rf_jobs[job_id]["result"]
        return {
            **state,
            "messages": state["messages"] + [ToolMessage(name="rf_diffusion_tool", content=result)],
        }
    else:
        return state  # Will loop

def get_langgraph_agent():
  llm = ChatOpenAI(model="gpt-4o-mini")
  graph_builder = StateGraph(State)

  tools = [pdb_search_tool, rf_diffusion_tool, rf_diffusion_poll_tool]
  llm_with_tools = llm.bind_tools(tools)

  def chatbot(state: State):
    return {"messages": [llm_with_tools.invoke(state["messages"])]}

  # --- Nodes ---
  graph_builder.add_node("chatbot", chatbot)
  graph_builder.add_node("poll_rf", RunnableLambda(poll_rf_result))

  tool_node = ToolNode(tools=tools)
  graph_builder.add_node("tools", tool_node)

  # --- Edges ---
  graph_builder.add_conditional_edges(
    "chatbot",
    tools_condition,
  )
  # Any time a tool is called, we return to the chatbot to decide the next step
  graph_builder.add_edge("tools", "chatbot")
  graph_builder.add_edge("poll_rf", "chatbot")  # loop back once result is ready
  graph_builder.add_edge(START, "chatbot")
  graph = graph_builder.compile()

  return graph