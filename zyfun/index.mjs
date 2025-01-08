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
            "id": "3293dc45-cf14-9c66-3028-5b7765b240b7",
            "name": "🙋丫仙女",
            "server": "http://alist.xiaoya.pro/",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "0237306c-ffc0-4ac6-9999-7765ef5f6c06",
            "name": "🤮布满灰尘",
            "server": "https://pan.baiblog.ren/",
            "startPage": "/🤮布满灰尘/V盘/",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "75588ddc-fb8f-405b-8e41-10ceed33cf1f",
            "name": "🌊七米蓝",
            "server": "https://al.chirmyram.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "860cc3bb-2f1a-4679-b921-0c8f0a110302",
            "name": "🌴 非盘",
            "server": "http://www.feifwp.top",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "e363a95b-a7a6-41db-89e0-34b0e594667a",
            "name": "🥼帅盘",
            "server": "https://hi.shuaipeng.wang",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "0f88f8f4-5138-42e3-b397-07a9cf6bd03a",
            "name": "🐉神族九帝",
            "server": "https://alist.shenzjd.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "6b5251dd-7629-442c-9a54-b3e13d543f5e",
            "name": "☃姬路白雪",
            "server": "https://pan.jlbx.xyz",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "b3d7cc44-d00a-4096-894b-86ce9edc1771",
            "name": "🎧听闻网盘",
            "server": "https://wangpan.sangxuesheng.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },
        {
            "id": "4f99204f-403e-42f1-9da3-70661c30565e",
            "name": "✨星梦",
            "server": "https://pan.bashroot.top",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true
        },

        {
            "name": "🙋丫仙女",
            "server": "http://alist.xiaoya.pro/",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "76266126-8536-bc13-f882-3bb187802cd2"
        },
        {
            "name": "🤮布满灰尘",
            "server": "https://pan.baiblog.ren/",
            "startPage": "/🤮布满灰尘/V盘/",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "a2f6e842-0743-5dd2-a85e-cfdaecdfb298"
        },
        {
            "name": "🌊七米蓝",
            "server": "https://al.chirmyram.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "11076590-4c85-b8e5-89f2-2df4b48b2a33"
        },
        {
            "name": "🌴非盘",
            "server": "http://www.feifwp.top",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": false,
            "id": "7e3e270e-7c58-9a69-07f8-0d670ffe8668"
        },
        {
            "name": "🥼帅盘",
            "server": "https://hi.shuaipeng.wang",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": false,
            "id": "d79c7467-7321-1f28-8b75-36c633355bd6"
        },
        {
            "name": "🐉神族九帝",
            "server": "https://alist.shenzjd.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "f346cae0-2805-7dd5-aa87-0be1284dd39a"
        },
        {
            "name": "☃姬路白雪",
            "server": "https://pan.jlbx.xyz",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "433c5080-8a77-ffc4-73e8-167b27cbc3bc"
        },
        {
            "name": "🎧听闻网盘",
            "server": "https://wangpan.sangxuesheng.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": false,
            "id": "f9e46314-4993-e677-291e-9f970fb041f2"
        },
        {
            "name": "✨星梦",
            "server": "https://pan.bashroot.top",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "b68d1329-46e5-580a-2345-123fa54de141"
        },
        {
            "name": "🙋丫仙女",
            "server": "http://alist.xiaoya.pro/",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "28"
        },
        {
            "name": "🤮布满灰尘",
            "server": "https://pan.baiblog.ren/",
            "startPage": "/🤮布满灰尘/V盘/",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "29"
        },
        {
            "name": "🌊七米蓝",
            "server": "https://al.chirmyram.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "30"
        },
        {
            "name": "🌴非盘",
            "server": "http://www.feifwp.top",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": false,
            "id": "31"
        },
        {
            "name": "🥼帅盘",
            "server": "https://hi.shuaipeng.wang",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": false,
            "id": "32"
        },
        {
            "name": "🐉神族九帝",
            "server": "https://alist.shenzjd.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "33"
        },
        {
            "name": "☃姬路白雪",
            "server": "https://pan.jlbx.xyz",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "34"
        },
        {
            "name": "🎧听闻网盘",
            "server": "https://wangpan.sangxuesheng.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": false,
            "id": "35"
        },
        {
            "name": "✨星梦",
            "server": "https://pan.bashroot.top",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "36"
        },


        {
            "name": "🙋丫仙女",
            "server": "http://alist.xiaoya.pro/",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "76266126-8536-bc13-f882-3bb187802cd2"
        },
        {
            "name": "🤮布满灰尘",
            "server": "https://pan.baiblog.ren/",
            "startPage": "/🤮布满灰尘/V盘/",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "a2f6e842-0743-5dd2-a85e-cfdaecdfb298"
        },
        {
            "name": "🌊七米蓝",
            "server": "https://al.chirmyram.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "11076590-4c85-b8e5-89f2-2df4b48b2a33"
        },
        {
            "name": "🐉神族九帝",
            "server": "https://alist.shenzjd.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "f346cae0-2805-7dd5-aa87-0be1284dd39a"
        },
        {
            "name": "☃姬路白雪",
            "server": "https://pan.jlbx.xyz",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "433c5080-8a77-ffc4-73e8-167b27cbc3bc"
        },
        {
            "name": "✨星梦",
            "server": "https://pan.bashroot.top",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "b68d1329-46e5-580a-2345-123fa54de141"
        },
        {
            "name": "❤关于纯七",
            "server": "https://by.xzbzq.com",
            "startPage": "",
            "search": false,
            "headers": null,
            "params": null,
            "isActive": true,
            "id": "cf7c2da5-a1ff-4437-b9a1-538b0f2b8d77"
        }

    ];
    let relArr = [];

    const type = "drive";

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