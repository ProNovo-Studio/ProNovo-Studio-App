from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from agents.agent_graph import get_graph
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.messages import ToolMessage
import json

send_message_router = APIRouter()

class message(BaseModel):
    id: int
    sender: str
    content: str
    data: Optional[str]
    thread_id: str

agent = get_graph()

#TODO return searched PDB's
@send_message_router.post("/message-send")
async def send_message(data: message) -> message:
    config = {"configurable": {"thread_id": data.thread_id}}
    
    state = {
        "messages": [HumanMessage(content=data.content)],
    }

    result = agent.invoke(state, config=config)

    print("\n\n\n\n", result)

    # Extract final PDB data from tool outputs
    pdb_data = None
    for bot_message in result["messages"]:
        if isinstance(bot_message, ToolMessage):
            output = bot_message.content
            if bot_message.name == "rf_diffusion_tool":
                print("\n\n\n-------------------------")
                print(output)
                print("-------------------------\n\n\n\n")
                try:
                    output = json.loads(output)
                    pdb_data = output["pdb"]
                except:
                    pass

    return message(
        id=data.id + 1,
        sender="ai",
        content=result["messages"][-1].content[0]["text"] if result["messages"] else "Done",
        data=pdb_data,
        thread_id=data.thread_id
    )