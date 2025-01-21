import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

// 读取文件内容
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "Source.md");
const filePathOut = path.join(__dirname, "Out.md");
const fileContent = fs.readFileSync(filePath, "utf8");

// 按行分割内容
const lines = fileContent.split("\n");

// 用于存储已见过的URL
const seenUrls = new Set();
// 用于存储去重后的内容
const uniqueLines = [];

lines.forEach((line) => {
    if (!line.trim().startsWith("http")) {
        // 如果当前行是非 url，则存储该行
        uniqueLines.push(line);
    } else if (line.trim().startsWith("http")) {
        // 如果当前行是URL且之前有非 url 行
        const url = line.trim();
        if (!seenUrls.has(url)) {
            // 如果URL未见过，则添加到结果中
            seenUrls.add(url);
            uniqueLines.push(url);
        }
        // 重置currentExtInfLine
    } else {
        // 如果当前行不是URL且不是#EXTINF，则直接添加
        uniqueLines.push(line);
    }
});

// 将去重后的内容写回文件
fs.writeFileSync(filePathOut, uniqueLines.join("\n"), "utf8");

console.log("重复项已删除，结果已保存到 Out.md 文件中。");
