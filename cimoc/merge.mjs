// merge-apk-json.mjs
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

/**
 * 合并 cimoc 目录下所有以 "apk" 开头（除了 apk04）的 JSON 文件
 * @returns {void}
 */
function mergeApkJsonFiles() {
    const cimocDir = './';
    const outputFile = './apk.json';

    // 读取目录中的所有文件
    const files = readdirSync(cimocDir);

    // 筛选出以 apk 开头且不是 apk04 的 JSON 文件
    const apkFiles = files
        .filter(file =>
            file.startsWith('apk') &&
            extname(file) === '.json' &&
            file !== 'apk04.json'
        )
        .sort();

    console.log('找到以下 APK 文件:', apkFiles);

    // 用于存储合并后的内容
    let mergedData = {};

    // 按顺序读取并合并文件
    for (const file of apkFiles) {
        const filePath = join(cimocDir, file);
        try {
            const fileContent = readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(fileContent);

            // 合并数据，后面的文件会覆盖前面的同名键
            mergedData = { ...mergedData, ...jsonData };

            console.log(`已处理文件: ${file}，包含 ${Object.keys(jsonData).length} 个键`);
        } catch (error) {
            console.error(`处理文件 ${file} 时出错:`, error.message);
        }
    }

    // 写入合并后的数据到 apk.json
    try {
        writeFileSync(outputFile, JSON.stringify(mergedData, null, 2), 'utf8');
        console.log(`成功合并 ${apkFiles.length} 个文件到 ${outputFile}`);
        console.log(`合并后的文件包含 ${Object.keys(mergedData).length} 个唯一键`);
    } catch (error) {
        console.error('写入文件时出错:', error.message);
    }
}

// 运行合并函数
mergeApkJsonFiles();
