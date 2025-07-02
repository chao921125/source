from pydantic import BaseModel, HttpUrl, Field
from typing import List, Optional

class Program(BaseModel):
    extinf: str
    url: str

class M3URequest(BaseModel):
    urls: List[HttpUrl] = Field(..., description="M3U文件的URL列表")

class M3UResponse(BaseModel):
    total_programs: int
    unique_programs: int
    output_file: str
    message: str