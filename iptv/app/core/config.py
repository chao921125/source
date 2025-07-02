from pydantic import BaseModel
from typing import List

class Settings(BaseModel):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "IPTV API"
    DEFAULT_M3U_URLS: List[str] = [
        "https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/ipv4/result.m3u",
    ]
    DEFAULT_OUTPUT_FILE: str = "index.m3u"
    EPG_URL: str = "https://live.fanmingming.cn/e.xml"

settings = Settings()