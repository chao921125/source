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

const uniqueLines = [];
let lineText = "";

lines.forEach((line) => {
    if (line.trim().includes("#genre#")) {
        uniqueLines.push(line);
    } else if (line.trim().includes("http")) {
        const url = line.trim();
        lineText += url;
        uniqueLines.push(lineText);
        lineText = "";
    } else if (line.trim() !== "") {
        lineText += line +",";
    } else {
        uniqueLines.push(line);
    }
});

fs.writeFileSync(filePathOut, uniqueLines.join("\n"), "utf8");

console.log("结果已保存到 Out.md 文件中。");
