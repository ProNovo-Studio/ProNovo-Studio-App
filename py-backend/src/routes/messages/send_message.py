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

    if data.content == "/test-rf-diffusion":
        pdb_data = open("src/routes/messages/output.pdb", "r").read()
        return message(
            id=data.id + 1,
            sender="ai",
            content="Here is an RFdiffusion-designed binder for PDB 1R42 using:\n\n- Contigs: `A21-24/0 30-40` (kept target A21–A24 and designed a new 30–40 aa chain)\n- Hotspots: A19, A20, A21\n",
            data=pdb_data,
            thread_id=data.thread_id
        )

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