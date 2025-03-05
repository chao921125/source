import fs from "node:fs";
import https from "node:https";
import http from "node:http";

// 读取第一个 JSON 文件（可能是在线地址或本地文件）
const file1Path = process.argv[2];
// 读取第二个 JSON 文件（可能是在线地址或本地文件）
const file2Path = process.argv[3];
// 输出文件路径
const outputPath = process.argv[4] || 'merged.json';

// 检查参数
if (!file1Path || !file2Path) {
  console.error('请提供两个 JSON 文件路径或URL作为参数');
  console.log('用法: node index.mjs <file1.json/url1> <file2.json/url2> [output.json]');
  process.exit(1);
}

// 判断是否为URL
function isUrl(path) {
  return path.startsWith('http://') || path.startsWith('https://');
}

// 从URL获取JSON数据
function fetchJsonFromUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https://') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`解析URL返回的JSON数据失败: ${error.message}`));
        }
      });
    }).on('error', (error) => {
      reject(new Error(`获取URL数据失败: ${error.message}`));
    });
  });
}

// 从本地文件获取JSON数据
function readJsonFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`读取或解析本地JSON文件失败: ${error.message}`);
  }
}

// 主函数
async function mergeJsonFiles() {
  try {
    // 获取第一个JSON数据
    const json1 = isUrl(file1Path) 
      ? await fetchJsonFromUrl(file1Path) 
      : readJsonFromFile(file1Path);
    
    // 获取第二个JSON数据
    const json2 = isUrl(file2Path) 
      ? await fetchJsonFromUrl(file2Path) 
      : readJsonFromFile(file2Path);
    
    // 合并 JSON 对象
    const mergedJson = { ...json1, ...json2 };
    
    // 将合并后的 JSON 写入文件
    fs.writeFileSync(outputPath, JSON.stringify(mergedJson, null, 2), 'utf8');
    
    console.log(`已成功将 ${file1Path} 和 ${file2Path} 合并到 ${outputPath}`);
  } catch (error) {
    console.error('合并 JSON 文件时出错:', error.message);
  }
}

// 执行主函数
mergeJsonFiles();
// node ./index.mjs local.json https://example.com/data.json output.json
