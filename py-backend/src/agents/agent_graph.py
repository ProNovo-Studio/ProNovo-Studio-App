from typing import Any, TypedDict
from langgraph.graph import StateGraph, END, START
from langchain_core.runnables import RunnableLambda, Runnable
from langchain_core.messages import AIMessage, HumanMessage
from langchain_core.tools import Tool
from langchain_openai import ChatOpenAI
from agents.tools import rf_diffusion_tool, pdb_search_tool
from langgraph.prebuilt import ToolNode, tools_condition
from langchain_core.messages import ToolMessage
from typing import Annotated
from langgraph.graph.message import add_messages

import json
from dotenv import load_dotenv

load_dotenv()


class State(TypedDict):
    messages: Annotated[list, add_messages]

def get_graph():
  llm = ChatOpenAI(model="gpt-4o-mini")
  graph_builder = StateGraph(State)

  tools = [pdb_search_tool, rf_diffusion_tool]
  llm_with_tools = llm.bind_tools(tools)

  def chatbot(state: State):
    return {"messages": [llm_with_tools.invoke(state["messages"])]}

  graph_builder.add_node("chatbot", chatbot)

  tool_node = ToolNode(tools=tools)
  graph_builder.add_node("tools", tool_node)

  graph_builder.add_conditional_edges(
    "chatbot",
    tools_condition,
  )
  # Any time a tool is called, we return to the chatbot to decide the next step
  graph_builder.add_edge("tools", "chatbot")
  graph_builder.add_edge(START, "chatbot")
  graph = graph_builder.compile()

  return graph