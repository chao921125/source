import requests
import re
from urllib.parse import urlparse
from typing import List, Dict, Set, Tuple, Any
import os
import argparse
import logging
import sys

# --- Logging Setup ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger("iptv-script")

# --- Default Settings ---
class Settings:
    DEFAULT_M3U_URLS: List[str] = [
        "https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/ipv4/result.m3u",
        "https://m3u.ibert.me/fmml_ipv6.m3u",
        "https://m3u.ibert.me/fmml_itv.m3u",
        "https://m3u.ibert.me/fmml_index.m3u",
        "https://m3u.ibert.me/ycl_iptv.m3u",
        "https://m3u.ibert.me/cymz6_lives.m3u",
        "https://m3u.ibert.me/y_g.m3u",
        "https://m3u.ibert.me/j_home.m3u",
        "https://m3u.ibert.me/j_iptv.m3u",
        "https://m3u.ibert.me/o_all.m3u",
        "https://m3u.ibert.me/o_cn.m3u",
        "https://m3u.ibert.me/o_s_cn.m3u",
        "https://m3u.ibert.me/o_s_cn_112114.m3u",
        "https://m3u.ibert.me/o_s_cn_cctv.m3u",
        "https://m3u.ibert.me/o_s_cn_cgtn.m3u",
        "https://m3u.ibert.me/cn.m3u",
        "https://m3u.ibert.me/cn_n.m3u",
        "https://m3u.ibert.me/cn_c.m3u",
        "https://m3u.ibert.me/cn_p.m3u",
        "https://m3u.ibert.me/all.m3u",
        "https://m3u.ibert.me/q_bj_iptv_unicom.m3u",
        "https://m3u.ibert.me/q_bj_iptv_unicom_m.m3u",
        "https://m3u.ibert.me/q_bj_iptv_mobile.m3u",
        "https://m3u.ibert.me/q_bj_iptv_mobile_m.m3u",
        "https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/result.m3u",
        "https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/ipv4/result.m3u",
        "https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/ipv6/result.m3u",
        "https://raw.githubusercontent.com/joevess/IPTV/main/home.m3u8",
        "https://raw.githubusercontent.com/Free-TV/IPTV/refs/heads/master/playlist.m3u8",
        "https://gitlab.com/Meroser/IPTV/-/raw/main/IPTV-demo.m3u",
        "https://live.izbds.com/tv/iptv4.m3u",
        "https://live.izbds.com/tv/iptv6.m3u",
        "https://raw.githubusercontent.com/suxuang/myIPTV/refs/heads/main/itv.m3u",
        "https://raw.githubusercontent.com/suxuang/myIPTV/refs/heads/main/ipv4.m3u",
        "https://raw.githubusercontent.com/suxuang/myIPTV/refs/heads/main/ipv6.m3u",
        "http://175.178.251.183:6689/live.m3u",
        "https://live.iptv365.org/live.m3u"
    ]
    DEFAULT_OUTPUT_FILE: str = "index.m3u"
    EPG_URL: str = "https://live.fanmingming.cn/e.xml"

settings = Settings()

# --- M3U Models ---
class Program:
    def __init__(self, extinf: str, url: str):
        self.extinf = extinf
        self.url = url

# --- M3U Service Logic ---
class M3UService:
    @staticmethod
    def fetch_m3u_content(url: str) -> str:
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            return response.text
        except Exception as e:
            logger.error(f"获取URL内容失败: {url}\n错误: {e}")
            return ""

    @staticmethod
    def parse_m3u_content(content: str) -> List[Program]:
        if not content:
            return []
        
        lines = content.strip().split('\n')
        programs = []
        i = 0
        
        while i < len(lines) and not lines[i].startswith('#EXTINF'):
            i += 1
        
        while i < len(lines):
            if lines[i].startswith('#EXTINF'):
                extinf_line = lines[i]
                url_line = lines[i+1] if i+1 < len(lines) and not lines[i+1].startswith('#') else ""
                
                if url_line:
                    programs.append(Program(
                        extinf=extinf_line,
                        url=url_line
                    ))
                
                i += 2
            else:
                i += 1
        
        return programs

    @staticmethod
    def remove_duplicates(programs: List[Program]) -> List[Program]:
        unique_programs = []
        seen_urls: Set[str] = set()
        seen_titles: Set[Tuple[str, str]] = set()
        
        for program in programs:
            title_match = re.search(r',[^,]*$', program.extinf)
            title = title_match.group(0)[1:] if title_match else ""
            
            url = program.url
            parsed_url = urlparse(url)
            base_url = f"{parsed_url.scheme}://{parsed_url.netloc}{parsed_url.path}"
            
            unique_key = (title, base_url)
            
            if unique_key not in seen_titles and url not in seen_urls:
                seen_titles.add(unique_key)
                seen_urls.add(url)
                unique_programs.append(program)
        
        return unique_programs

    @staticmethod
    def generate_m3u_file(programs: List[Program], output_file: str) -> str:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f'#EXTM3U x-tvg-url="{settings.EPG_URL}"\n')
            
            for program in programs:
                f.write(f"{program.extinf}\n")
                f.write(f"{program.url}\n")
        
        logger.info(f"成功生成m3u文件: {output_file}，共包含{len(programs)}个节目")
        return output_file

    @classmethod
    def process_m3u_urls(cls, urls: List[str], output_file: str) -> Dict[str, Any]:
        all_programs = []
        
        for url in urls:
            logger.info(f"正在处理: {url}")
            content = cls.fetch_m3u_content(url)
            programs = cls.parse_m3u_content(content)
            all_programs.extend(programs)
            logger.info(f"从 {url} 获取了 {len(programs)} 个节目")
        
        unique_programs = cls.remove_duplicates(all_programs)
        logger.info(f"去重后共有 {len(unique_programs)} 个节目")
        
        output_path = cls.generate_m3u_file(unique_programs, output_file)
        
        return {
            "total_programs": len(all_programs),
            "unique_programs": len(unique_programs),
            "output_file": output_path,
            "message": f"成功处理 {len(urls)} 个URL，生成文件 {output_path}"
        }

# --- Main Execution ---
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="IPTV M3U Processor")
    parser.add_argument(
        "-u", "--urls",
        nargs='*',
        help="List of M3U URLs to process."
    )
    parser.add_argument(
        "-o", "--output",
        default=settings.DEFAULT_OUTPUT_FILE,
        help=f"Output file name. Default: {settings.DEFAULT_OUTPUT_FILE}"
    )
    args = parser.parse_args()

    urls_to_process = args.urls if args.urls else settings.DEFAULT_M3U_URLS
    
    M3UService.process_m3u_urls(urls_to_process, args.output)