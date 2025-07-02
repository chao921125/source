import requests
import re
from urllib.parse import urlparse
from typing import List, Dict, Set, Tuple, Any
import os

from app.core.logging import logger
from app.core.config import settings
from app.models.m3u import Program

class M3UService:
    @staticmethod
    async def fetch_m3u_content(url: str) -> str:
        """
        从URL获取m3u文件内容
        """
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            return response.text
        except Exception as e:
            logger.error(f"获取URL内容失败: {url}\n错误: {e}")
            return ""

    @staticmethod
    def parse_m3u_content(content: str) -> List[Program]:
        """
        解析m3u内容，返回节目信息列表
        每个节目信息是一个字典，包含extinf行和url行
        """
        if not content:
            return []
        
        lines = content.strip().split('\n')
        programs = []
        i = 0
        
        # 跳过#EXTM3U行
        while i < len(lines) and not lines[i].startswith('#EXTINF'):
            i += 1
        
        while i < len(lines):
            if lines[i].startswith('#EXTINF'):
                extinf_line = lines[i]
                url_line = lines[i+1] if i+1 < len(lines) and not lines[i+1].startswith('#') else ""
                
                if url_line:  # 只有当URL行存在时才添加
                    programs.append(Program(
                        extinf=extinf_line,
                        url=url_line
                    ))
                
                i += 2  # 跳过EXTINF行和URL行
            else:
                i += 1  # 跳过其他行
        
        return programs

    @staticmethod
    def remove_duplicates(programs: List[Program]) -> List[Program]:
        """
        去除重复的节目
        优先保留第一个出现的节目
        """
        unique_programs = []
        seen_urls: Set[str] = set()
        seen_titles: Set[Tuple[str, str]] = set()
        
        for program in programs:
            # 提取节目标题
            title_match = re.search(r',[^,]*$', program.extinf)
            title = title_match.group(0)[1:] if title_match else ""
            
            # 规范化URL (移除查询参数等)
            url = program.url
            parsed_url = urlparse(url)
            base_url = f"{parsed_url.scheme}://{parsed_url.netloc}{parsed_url.path}"
            
            # 使用(标题, 基础URL)作为唯一标识
            unique_key = (title, base_url)
            
            if unique_key not in seen_titles and url not in seen_urls:
                seen_titles.add(unique_key)
                seen_urls.add(url)
                unique_programs.append(program)
        
        return unique_programs

    @staticmethod
    def generate_m3u_file(programs: List[Program], output_file: str = settings.DEFAULT_OUTPUT_FILE) -> str:
        """
        生成m3u文件
        """
        with open(output_file, 'w', encoding='utf-8') as f:
            # 写入m3u文件头
            f.write(f'#EXTM3U x-tvg-url="{settings.EPG_URL}"\n')
            
            # 写入节目信息
            for program in programs:
                f.write(f"{program.extinf}\n")
                f.write(f"{program.url}\n")
        
        logger.info(f"成功生成m3u文件: {output_file}，共包含{len(programs)}个节目")
        return output_file

    @classmethod
    async def process_m3u_urls(cls, urls: List[str], output_file: str = settings.DEFAULT_OUTPUT_FILE) -> Dict[str, Any]:
        """
        处理多个M3U URL并生成文件
        """
        all_programs = []
        
        # 获取并解析所有URL的内容
        for url in urls:
            logger.info(f"正在处理: {url}")
            content = await cls.fetch_m3u_content(url)
            programs = cls.parse_m3u_content(content)
            all_programs.extend(programs)
            logger.info(f"从 {url} 获取了 {len(programs)} 个节目")
        
        # 去除重复
        unique_programs = cls.remove_duplicates(all_programs)
        logger.info(f"去重后共有 {len(unique_programs)} 个节目")
        
        # 生成m3u文件
        output_path = cls.generate_m3u_file(unique_programs, output_file)
        
        return {
            "total_programs": len(all_programs),
            "unique_programs": len(unique_programs),
            "output_file": output_path,
            "message": f"成功处理 {len(urls)} 个URL，生成文件 {output_path}"
        }