from typing import List
from langchain.tools import tool
from agents.schemas import ProteinDesignInput
import requests
import os
import json
from agents.schemas import ProteinDesignResult, PDBSearchInput, RfDiffusionPoll
from langchain.tools import StructuredTool
import uuid
from threading import Thread
from langchain_core.messages import AIMessage
from langchain_core.messages import ToolMessage

rf_key = os.getenv("RF_DIFF_KEY")

# TODO: replace this with postgres/redis
rf_jobs = {}

# NOTE: Only using the first 200 lines in the PDB (make this faster) change this later!!
def design_protein(job_id, input_pdb: str, hotspot_res: list[str], contigs: str, diffusion_steps: int = 15) -> dict:
    print(f"Designing protein with hotspot_res {hotspot_res} and contigs {contigs}")
    r = requests.post(
    url=os.getenv("URL", "https://health.api.nvidia.com/v1/biology/ipd/rfdiffusion/generate"),
    headers={"Authorization": f"Bearer {rf_key}"},
    json={
            "input_pdb": input_pdb,
            "contigs": contigs,
            "hotspot_res": hotspot_res,
            "diffusion_steps": diffusion_steps,
        },
    )
    print(r, "Saving to output.pdb:\n", r.text[:200], "...")
    if(r.status_code != 200):
        return ProteinDesignResult(
            message=f"Failed to load due to {r.text}",
            pdb=None
        )
    rf_jobs[job_id] = ProteinDesignResult(
        message=f"Protein designed with {len(input_pdb)} characters of input and hotspots {hotspot_res} and contigs {contigs}.",
        pdb=json.loads(r.text)["output_pdb"]
    ).model_dump()

def design_protein_async(input_pdb: str, hotspot_res: list[str], contigs: str, diffusion_steps: int = 15) -> dict:
    job_id = str(uuid.uuid4())
    rf_jobs[job_id] = {"status": "pending"}
    Thread(target=design_protein, args=(job_id, input_pdb, hotspot_res, contigs, diffusion_steps)).start()
    return {"job_id": job_id}

rf_diffusion_tool = StructuredTool.from_function(
    func=design_protein_async,
    name="rf_diffusion_tool",
    description="""Design a protein using RF diffusion. 
    Requires full PDB file content (not just a PDB ID) as input_pdb. 
    Use `pdb_search_tool` first if you need to fetch a PDB file from an ID.

    This tool is asynchronous returns a job_id which must be passed to the rf_diffusion_poll_tool to actually get the results

    contigs:

      contigs stands for 'contiguous [protein regions]'. 
      This string defines a protein that is being generated. 
      It is a specification written in a domain-specific language that tells RFdiffusion 
      which part of the input protein are to be kept and what kind of a binder (or a scaffold) needs to be constructed. 
      As an example, a string 'A10-100/0 50-150' instructs RFdiffusion to keep amino acids 10-100 in Chain A [from the input PDB file], 
      then break the chain (special '/0' notation, which signifies the end of the chain and thus effectively 
      makes 'A10-100' a new target protein), and construct a new chain (effectively a binder protein) of length 50 to 150 amino acids.

    hotspot residues:

      The hotspot residues string provides a way to specify which region the new protein (binder) must contact with the original 
      input protein (a target), therefore we can guide a binder to a specific region. These residues must be within the input_pdb
    """,
    args_schema=ProteinDesignInput,
    return_schema=dict,
)

def poll_rf_diffusion(job_id: str) -> dict:
    job = rf_jobs.get(job_id, {"status": "not_found"})
    return job

rf_diffusion_poll_tool = StructuredTool.from_function(
    func=poll_rf_diffusion,
    name="rf_diffusion_poll_tool",
    description="""Poll for a result from the rf_diffusion_tool""",
    args_schema=RfDiffusionPoll,
    return_schema=str
)

# NOTE: This is only getting the first 100 lines of a pdb, change in the future!!
def search_pdb(pdb_id: str) -> str:
    print(f"Searching pdb {pdb_id}")
    response = requests.get(f"https://files.rcsb.org/download/{pdb_id}.pdb")
    if response.status_code == 200:
        lines = filter(lambda line: line.startswith("ATOM"), response.text.split("\n"))
        return "\n".join(list(lines)[:100])
    return f"Error fetching {pdb_id}"

pdb_search_tool = StructuredTool.from_function(
    func=search_pdb,
    name="pdb_search_tool",
    description="""Download the full PDB file content from RCSB using the PDB ID (e.g., '1R42').""",
    args_schema=PDBSearchInput,
    return_schema=str
)
