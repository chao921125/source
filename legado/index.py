import json
import requests
from typing import Dict, List, Set, Any
import time

def fetch_booksource_from_url(url: str) -> List[Dict[str, Any]]:
    """从指定URL获取书源数据"""
    try:
        print(f"正在获取: {url}")
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        data = response.json()

        # 处理不同的数据格式
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            # 某些书源可能以对象形式返回，尝试提取书源列表
            for key in ['data', 'sources', 'bookSources']:
                if key in data and isinstance(data[key], list):
                    return data[key]
            # 如果找不到书源列表，返回空列表
            return []
        else:
            print(f"  警告: {url} 返回的数据格式无法识别")
            return []

    except requests.exceptions.RequestException as e:
        print(f"  错误: 无法从 {url} 获取数据 - {e}")
        return []
    except json.JSONDecodeError as e:
        print(f"  错误: {url} 返回的数据不是有效的JSON格式 - {e}")
        return []

def deduplicate_sources(sources: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """根据书源名称和URL去重"""
    seen_names: Set[str] = set()
    seen_urls: Set[str] = set()
    unique_sources = []

    for source in sources:
        # 获取书源名称和URL
        name = source.get('bookSourceName', '').strip()
        url = source.get('bookSourceUrl', '').strip()

        # 检查是否已存在相同名称或URL的书源
        if not name or not url:
            # 跳过名称或URL为空的书源
            continue

        if name in seen_names or url in seen_urls:
            continue

        seen_names.add(name)
        seen_urls.add(url)
        unique_sources.append(source)

    return unique_sources

def merge_and_deduplicate_booksources() -> None:
    """合并并去重多个书源地址的数据"""

    # 定义要获取的书源地址列表
    booksource_urls = [
        # XIU2 书源
        "https://yuedu.xiu2.xyz/shuyuan",
        "https://cdn.jsdelivr.net/gh/XIU2/Yuedu/shuyuan",

        # AOAOSTAR 书源
        "https://legado.aoaostar.com/sources/b778fe6b.json",
        "https://legado.aoaostar.com/sources/71e56d4f.json",  # 30个精品书源

        # 源仓库示例 (可以添加更多ID)
        "https://www.yckceo.com/yuedu/shuyuan/json/id/5203.json",
        "https://www.yckceo.com/yuedu/shuyuan/json/id/1.json",

        # 其他
        "https://raw.githubusercontent.com/jiwangyihao/source-j-legado/main/bilinovel.json",
        "https://ghp.ci/https://raw.githubusercontent.com/jiwangyihao/source-j-legado/main/bilinovel.json",
        "https://fastly.jsdelivr.net/gh/jiwangyihao/source-j-legado@main/bilinovel.json",

        "https://raw.githubusercontent.com/jiwangyihao/source-j-legado/main/bilinovel-like.json",
        "https://ghp.ci/https://raw.githubusercontent.com/jiwangyihao/source-j-legado/main/bilinovel-like.json",
        "https://fastly.jsdelivr.net/gh/jiwangyihao/source-j-legado@main/bilinovel-like.json",

        "https://raw.githubusercontent.com/jiwangyihao/source-j-legado/main/wenku.json",
        "https://ghp.ci/https://raw.githubusercontent.com/jiwangyihao/source-j-legado/main/wenku.json",
        "https://fastly.jsdelivr.net/gh/jiwangyihao/source-j-legado@main/wenku.json",

        "https://cdn.jsdelivr.net/gh/yolo52/Yuedu@main/shuyuan.json",

        "https://moonbegonia.github.io/Source/yuedu/audio.json",

        "https://bitbucket.org/xiu2/yuedu/raw/master/shuyuan",

        "https://cdn.jsdelivr.net/gh/yolo52/Yuedu@main/轻小说.json",
        "https://shuyuan.nyasama.cc/shuyuan/665afdacc506a084c87c207f9d9ad4ec.json",

        "https://yuedu.miaogongzi.net/shuyuan/miaogongziDY.json",
    ]

    all_sources = []

    # 从每个URL获取书源数据
    for url in booksource_urls:
        sources = fetch_booksource_from_url(url)
        if sources:
            all_sources.extend(sources)
            print(f"  成功获取 {len(sources)} 个书源")
        else:
            print(f"  未获取到有效书源")

        # 添加短暂延迟，避免请求过快
        time.sleep(1)

    print(f"\n总共获取到 {len(all_sources)} 个书源")

    # 去重处理
    unique_sources = deduplicate_sources(all_sources)

    print(f"去重后剩余 {len(unique_sources)} 个唯一书源")

    if not unique_sources:
        print("错误: 未获取到任何有效书源")
        return

    # 为每个书源添加来源标记
    for i, source in enumerate(unique_sources):
        source['_merged_index'] = i + 1

    # 保存合并后的书源到文件
    output_filename = "index.json"
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(unique_sources, f, ensure_ascii=False, indent=2)

    print(f"\n✅ 书源整合完成!")
    print(f"📁 文件已保存为: {output_filename}")
    print(f"📊 统计信息:")
    print(f"   - 原始书源总数: {len(all_sources)}")
    print(f"   - 去重后书源数: {len(unique_sources)}")
    print(f"   - 去除重复数: {len(all_sources) - len(unique_sources)}")

    # 显示前几个书源的名称作为示例
    print(f"\n📋 示例书源 (前5个):")
    for i, source in enumerate(unique_sources[:5]):
        name = source.get('bookSourceName', '未知名称')
        url = source.get('bookSourceUrl', '未知URL')
        print(f"  {i+1}. {name}")
        print(f"     URL: {url[:50]}..." if len(url) > 50 else f"     URL: {url}")

def main():
    """主函数"""
    print("=" * 50)
    print("Legado书源整合工具")
    print("=" * 50)

    try:
        merge_and_deduplicate_booksources()
    except KeyboardInterrupt:
        print("\n\n用户中断操作")
    except Exception as e:
        print(f"\n❌ 程序执行出错: {e}")
        print("请检查网络连接或书源地址是否有效")

if __name__ == "__main__":
    main()
