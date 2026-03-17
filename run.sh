#!/bin/bash

echo "====================="
echo "当前仓库根目录结构:"
ls -la
echo "====================="

# 进入 iptv 目录
# 假设仓库结构: 仓库根目录/source/iptv/index.py
cd source/iptv

echo "当前所在目录: $(pwd)"
echo "当前目录文件列表:"
ls -la

echo "正在运行 IPTV 脚本..."
python index.py

# 返回上两级，进入 legado 目录
cd ../../source/legado

echo "当前所在目录: $(pwd)"
echo "正在运行 Legado 脚本..."
python index.py