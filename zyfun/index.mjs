import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

// 读取文件内容
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "index.json");
const filePathIn = path.join(__dirname, "input.json");
const filePathOut = path.join(__dirname, "out.json");

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

async function init() {
    const readData = JSON.parse(getData());
    let relData = JSON.parse(getDataPre()) || [];
    let outData = {};
    for (const key in readData) {
        let type = key || "sites";
        const dataArr = readData[key];
        let relArr = relData[key] || [];

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
    }

    try {
        // 将对象转换为 JSON 字符串
        const jsonData = JSON.stringify(relData, null, 2); // 使用 2 个空格缩进，使 JSON 更易读
        fs.writeFileSync(filePathOut, jsonData, "utf8");
        console.log('写入文件成功');
    } catch (err) {
        console.error('写入文件时出错:', err);
    }
}

function getData() {
    return fs.readFileSync(filePathIn, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return [];
        }
        try {
            // 解析 JSON 数据
            return JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return [];
        }
    });
}
function getDataPre() {
    return fs.readFileSync(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return [];
        }
        try {
            // 解析 JSON 数据
            return JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return [];
        }
    });
}

init();