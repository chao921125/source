import fs from "node:fs";

function generateUUIDv1() {
    const timestamp = Date.now();
    const timeHigh = ((timestamp & 0xfffffff) * 10000) + 0x1000; // 时间高位加上版本号 1
    const node = '00:11:22:33:44:55'; // 模拟的 MAC 地址
    const random = Math.floor(Math.random() * 0x100000000).toString(16).padStart(8, '0');

    return `${timestamp.toString(16).padStart(8, '0')}-${timeHigh.toString(16)}-${random}-${node.replace(/:/g, '')}`;
}

function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
        const rand = (Math.random() * 16) | 0;
        const value = char === 'x' ? rand : (rand & 0x3) | 0x8;
        return value.toString(16);
    });
}

function generateUUIDv7() {
    const timestamp = BigInt(Date.now()); // 当前时间戳（毫秒）
    const random = crypto.getRandomValues(new Uint8Array(10)); // 随机数生成

    // 时间戳的高位部分（42 位）
    const timestampHigh = timestamp >> 18n;
    // 时间戳的低位部分（12 位）
    const timestampLow = (timestamp & 0x3ffffn).toString(16).padStart(5, '0');

    // 随机数生成（10 字节 = 80 位）
    const randomHex = Array.from(random, byte => byte.toString(16).padStart(2, '0')).join('');

    return `${timestampHigh.toString(16).padStart(8, '0')}-${timestampLow}-${randomHex.slice(0, 4)}-${randomHex.slice(4, 12)}-${randomHex.slice(12)}`;
}

function init() {
    const dataArr = [
        {
            "key": "量子资源",
            "name": "量子资源",
            "api": "http://cj.lziapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 1
        },
        {
            "key": "非凡资源",
            "name": "非凡资源",
            "api": "http://www.ffzy.tv/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "https://ffzyplayer.com/?url=",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 2
        },
        {
            "key": "明帝影视",
            "name": "明帝影视",
            "api": "https://ys.md214.cn/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 3
        },
        {
            "key": "快车资源",
            "name": "快车资源",
            "api": "https://caiji.kczyapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 4
        },
        {
            "key": "无尽资源",
            "name": "无尽资源",
            "api": "https://api.wujinapi.me/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 5
        },
        {
            "key": "天空影院",
            "name": "天空影院",
            "api": "https://api.tiankongapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 6
        },
        {
            "key": "卧龙资源",
            "name": "卧龙资源",
            "api": "https://collect.wolongzyw.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 7
        },
        {
            "key": "影图影视",
            "name": "影图影视",
            "api": "https://cj.vodimg.top/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 8
        },
        {
            "key": "南国资源",
            "name": "南国资源",
            "api": "http://api.nguonphim.tv/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 9
        },
        {
            "key": "飞速资源",
            "name": "飞速资源",
            "api": "https://www.feisuzyapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 10
        },
        {
            "key": "ikun资源",
            "name": "ikun资源",
            "api": "https://ikunzyapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 11
        },
        {
            "key": "天堂资源",
            "name": "天堂资源",
            "api": "http://vipmv.cc/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 12
        },
        {
            "key": "映迷影院",
            "name": "映迷影院",
            "api": "https://www.inmi.app/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 13
        },
        {
            "key": "1080资源",
            "name": "1080资源",
            "api": "https://1080p.tv/api.php/provide/vod",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 14
        },
        {
            "key": "易看资源",
            "name": "易看资源",
            "api": "https://api.yikanapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 15
        },
        {
            "key": "酷点资源",
            "name": "酷点资源",
            "api": "https://kudianzy.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 16
        },
        {
            "key": "忆梦资源",
            "name": "忆梦资源",
            "api": "http://anltv.cn/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 17
        },
        {
            "key": "樱花资源",
            "name": "樱花资源",
            "api": "https://m3u8.apiyhzy.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 18
        },
        {
            "key": "TOM资源",
            "name": "TOM资源",
            "api": "https://api.tomcaiji.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 19
        },
        {
            "key": "闪电资源",
            "name": "闪电资源",
            "api": "http://sdzyapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 20
        },
        {
            "key": "FOX资源",
            "name": "FOX资源",
            "api": "https://api.foxzyapi.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 21
        },
        {
            "key": "红牛资源",
            "name": "红牛资源",
            "api": "https://www.hongniuzy2.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 22
        },
        {
            "key": "77韩剧",
            "name": "77韩剧",
            "api": "https://www.77hanju.com/api.php/provide/vod/",
            "download": "",
            "jiexiUrl": "",
            "group": "默认",
            "status": true,
            "isActive": true,
            "type": 1,
            "id": 23
        }
    ];
    let relArr = [];

    const type = "sites";

    for (let o of dataArr) {
        let isRepeat = false;
        for (let rep of relArr) {
            if (type === "analyze" || type === "iptv" || type === "channel") {
                isRepeat = o.url === rep.url;
            }
            if (type === "sites") {
                isRepeat = o.api === rep.api;
            }
            if (type === "drive") {
                isRepeat = o.server === rep.server;
            }
            if (isRepeat) break;
        }
        if (!isRepeat) {
            const ki = generateUUIDv4();
            if (type === "analyze") {
                relArr.push({
                    "id": ki,
                    "name": o.name || "",
                    "type": o.type || 1,
                    "url": o.url || "",
                    "isActive": o.isActive || true
                });
            }
            if (type === "iptv") {
                relArr.push({
                    "id": ki,
                    "name": o.name || "",
                    "url": o.url || "",
                    "type": o.type || 1,
                    "isActive": o.isActive || true,
                    "epg": o.epg || "",
                    "logo": o.logo || ""
                });
            }
            if (type === "channel") {
                relArr.push({
                    "id": ki,
                    "name": o.name || "",
                    "url": o.url || "",
                    "group": o.group || "默认"
                });
            }
            if (type === "sites") {
                relArr.push({
                    "id": ki,
                    "key": ki,
                    "name": o.name || "",
                    "api": o.api || "",
                    "playUrl": o.playUrl || "",
                    "search": o.search || 0,
                    "group": o.group || "切片",
                    "type": o.type || 1,
                    "ext": o.ext || "",
                    "categories": o.categories || "电视,影视",
                    "isActive": o.isActive || true
                });
            }
            if (type === "drive") {
                relArr.push({
                    "id": ki,
                    "name": o.name || "",
                    "server": o.server || "",
                    "showAll": o.showAll || false,
                    "startPage": o.startPage || "",
                    "search": o.search || false,
                    "headers": o.headers || "{}",
                    "params": o.params || "{}",
                    "isActive": o.isActive || true
                });
            }
        }
    }
    console.log(relArr);
    try {
        // 将对象转换为 JSON 字符串
        const jsonData = JSON.stringify(relArr, null, 2); // 使用 2 个空格缩进，使 JSON 更易读
        fs.writeFileSync('data.json', jsonData);
        console.log('写入文件成功');
    } catch (err) {
        console.error('写入文件时出错:', err);
    }
}

init();