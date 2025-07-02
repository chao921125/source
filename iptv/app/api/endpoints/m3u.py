from fastapi import APIRouter, BackgroundTasks, HTTPException, Query, UploadFile, File
from fastapi.responses import FileResponse
from typing import List, Optional
import os

from app.models.m3u import M3URequest, M3UResponse
from app.services.m3u_service import M3UService
from app.core.config import settings

router = APIRouter()

@router.post("/process", response_model=M3UResponse)
async def process_m3u(request: M3URequest) -> M3UResponse:
    """
    处理多个M3U URL并生成文件
    """
    result = await M3UService.process_m3u_urls([str(url) for url in request.urls])
    return M3UResponse(**result)

@router.get("/process", response_model=M3UResponse)
async def process_default_m3u() -> M3UResponse:
    """
    使用默认URL处理M3U
    """
    result = await M3UService.process_m3u_urls(settings.DEFAULT_M3U_URLS)
    return M3UResponse(**result)

@router.get("/download")
async def download_m3u(filename: str = Query(settings.DEFAULT_OUTPUT_FILE)):
    """
    下载生成的M3U文件
    """
    if not os.path.exists(filename):
        raise HTTPException(status_code=404, detail=f"文件 {filename} 不存在")
    
    return FileResponse(
        path=filename,
        filename=os.path.basename(filename),
        media_type="application/x-mpegURL"
    )