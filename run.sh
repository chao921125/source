#!/bin/bash

# --- 移除了 proxy 命令 ---

# 注意：假设你的仓库结构如下
# 仓库根目录/
#   ├── run_tasks.sh
#   ├── source/
#   │     ├── iptv/
#   │     │     └── index.py
#   │     └── legado/
#   │           └── index.py

echo "当前工作目录: $(pwd)"
echo "目录列表:"
ls -la

# 进入 source 目录（相对于脚本所在位置）
cd source/iptv
echo "正在运行 IPTV 脚本..."
python index.py

# 返回上一级，进入 legado 目录
cd ../legado
echo "正在运行 Legado 脚本..."
python index.py