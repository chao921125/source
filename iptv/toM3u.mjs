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
let m3uOutput = `#EXTM3U x-tvg-url="https://live.fanmingming.cn/e.xml"\n`;
let currentGroup = null;

lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine !== '') {
        if (trimmedLine.includes("#genre#")) {
            currentGroup = trimmedLine.replace(/,#genre#/, '').trim();
        } else {
            const [originalChannelName, channelLink] = trimmedLine.split(",").map(item => item.trim());
            const processedChannelName = originalChannelName.replace(/(CCTV|CETV)-(\d+).*/, "$1$2");
            m3uOutput += `#EXTINF:-1 tvg-name="${processedChannelName}" tvg-logo="https://live.fanmingming.cn/tv/${processedChannelName}.png"`;
            if (currentGroup) {
                m3uOutput += ` group-title="${currentGroup}"`;
            }
            m3uOutput += `,${originalChannelName}\n${channelLink}\n`;
        }
    }
});

// 将去重后的内容写回文件
fs.writeFileSync(filePathOut, m3uOutput, "utf8");

console.log("格式化完成，结果已保存到 Out.md 文件中。");