#!/bin/bash

echo "当前所在目录: $(pwd)"
echo "目录列表:"
ls -la

# ========== 运行 IPTV 脚本 ==========
echo "正在运行 IPTV 脚本..."

# 1. 进入 iptv 目录（注意：是 ./iptv，不是 source/iptv）
cd iptv

# 2. 运行脚本
python index.py

# 3. 返回上一级（回到项目根目录）
cd ..


# ========== 运行 Legado 脚本 ==========
echo "正在运行 Legado 脚本..."

# 1. 进入 legado 目录
cd legado

# 2. 运行脚本
python index.py

echo "所有任务执行完成。"