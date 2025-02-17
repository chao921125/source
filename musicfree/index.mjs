import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

// 读取文件内容
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "index.json");
const filePathOut = path.join(__dirname, "out.json");

// 读取 JSON 文件内容
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    try {
        // 解析 JSON 数据
        const jsonData = JSON.parse(data);
        let map = new Map();
        let uniqueData = [];
        // 使用 Set 去重
        for (const item of jsonData.plugins) {
            if (!map.has(item.url)) {
                map.set(item.url, item);
            }
        }
        map.forEach((item) => {
            uniqueData.push(item);
        });
        fs.writeFileSync(filePathOut, JSON.stringify(uniqueData), "utf8");
    } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
    }
});
