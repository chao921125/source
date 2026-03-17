#!/bin/bash

# 第一步：执行代理命令
proxy

# 第二步：进入 iptv 目录并运行 Python 脚本
cd /Users/huangchao/Work/GitHub/source/iptv
python index.py

# 第三步：进入 legado 目录并运行 Python 脚本
cd /Users/huangchao/Work/GitHub/source/legado
python index.py