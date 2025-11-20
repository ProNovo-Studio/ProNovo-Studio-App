from pydantic import BaseModel, model_validator
from typing import List, Optional, Self
from langchain.callbacks.base import BaseCallbackHandler
from agents.rf_validator import validate_rf_params

class ToolOutputCaptureHandler(BaseCallbackHandler):
    def __init__(self):
        self.tool_outputs = []

    def on_tool_end(self, output, **kwargs):
        self.tool_outputs.append(output)

class ProteinDesignResult(BaseModel):
    message: str
    pdb: Optional[str] = None

class ProteinDesignInput(BaseModel):
    input_pdb: str
    hotspot_res: List[str]
    contigs: str
    diffusion_steps: int = 15

    @model_validator(mode='after')
    def verify_params(self) -> Self:
        validate_rf_params(pdb=self.input_pdb, hotspot_res=self.hotspot_res, contigs=self.contigs)
        return self

class PDBSearchInput(BaseModel):
    pdb_id: str