import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePathIn = path.join(__dirname, "input.json");
const filePathBase = path.join(__dirname, "index.json");
const filePathOut = path.join(__dirname, "out.json");

const generateUUID = () => randomUUID();
const getTimestamp = () => Date.now();

function readJsonSafe(filepath) {
    try {
        if (!fs.existsSync(filepath)) return null;
        return JSON.parse(fs.readFileSync(filepath, "utf8"));
    } catch (e) {
        console.warn(`⚠️ 读取失败 ${filepath}: ${e.message}`);
        return null;
    }
}

async function init() {
    console.log("🔍 开始诊断并处理数据...\n");

    const inputData = readJsonSafe(filePathIn);
    const baseData = readJsonSafe(filePathBase);

    if (!inputData) {
        console.error("❌ 错误：找不到 input.json 或格式错误！");
        return;
    }

    // 初始化输出
    const output = {
        analyze: Array.isArray(baseData?.analyze) ? [...baseData.analyze] : [],
        iptv: Array.isArray(baseData?.iptv) ? [...baseData.iptv] : [],
        channel: Array.isArray(baseData?.channel) ? [...baseData.channel] : [],
        sites: Array.isArray(baseData?.sites) ? [...baseData.sites] : [],
        setting: Array.isArray(baseData?.setting) && baseData.setting.length > 0 ? baseData.setting : []
    };

    if (output.setting.length === 0) output.setting.push(createDefaultSetting());
    else output.setting[0] = mergeSettings(output.setting[0]);

    let addedCount = { analyze: 0, iptv: 0, channel: 0, sites: 0 };
    let skipCount = { analyze: 0, iptv: 0, channel: 0, sites: 0 };

    for (const key in inputData) {
        if (key === 'setting') continue;

        const rawItems = inputData[key];
        if (!Array.isArray(rawItems)) {
            console.warn(`⚠️ 跳过非数组: ${key}`);
            continue;
        }

        let targetType = key;
        const isDrive = (key === 'drive');
        if (isDrive) targetType = 'sites';

        if (!['analyze', 'iptv', 'channel', 'sites'].includes(targetType)) continue;

        console.log(`\n📂 正在处理 [${key}] -> 目标 [${targetType}] (共 ${rawItems.length} 条)`);

        const targetArray = output[targetType];

        for (const item of rawItems) {
            // 1. 提取指纹
            let currentFingerprint = "";
            if (targetType === 'analyze') currentFingerprint = item.url || item.api || "";
            else if (targetType === 'iptv') currentFingerprint = item.url || item.api || "";
            else if (targetType === 'channel') currentFingerprint = item.url || item.api || "";
            else if (targetType === 'sites') currentFingerprint = isDrive ? (item.server || "") : (item.api || "");

            // 2. 调试：如果指纹为空，警告
            if (!currentFingerprint) {
                console.log(`   ⚠️ 警告：发现无指纹数据 (name: ${item.name || '未知'}), 尝试生成随机ID但不去重...`);
                // 如果没有指纹，我们选择不进行去重检查，直接添加（或者你可以选择跳过）
                // 这里为了安全，如果没有指纹，我们假设它是新的，但打印警告
            }

            // 3. 去重检查
            let duplicateName = null;
            if (currentFingerprint) {
                for (const existing of targetArray) {
                    let existingFingerprint = "";
                    if (targetType === 'analyze') existingFingerprint = existing.url || existing.api || "";
                    else if (targetType === 'iptv') existingFingerprint = existing.url || existing.api || "";
                    else if (targetType === 'channel') existingFingerprint = existing.url || existing.api || "";
                    else if (targetType === 'sites') existingFingerprint = existing.api || "";

                    if (existingFingerprint === currentFingerprint) {
                        duplicateName = existing.name || existingFingerprint;
                        break;
                    }
                }
            }

            if (duplicateName) {
                skipCount[targetType]++;
                // 只打印前 5 个重复项，避免刷屏
                if (skipCount[targetType] <= 5) {
                    console.log(`   ⏭️ 跳过重复: "${item.name || '无名'}" (指纹: ${currentFingerprint.substring(0, 50)}...) -> 匹配到已有: "${duplicateName}"`);
                } else if (skipCount[targetType] === 6) {
                    console.log(`   ... 还有更多重复项未显示`);
                }
                continue;
            }

            // 4. 构建新数据 (逻辑同前，省略部分以节省空间，保持核心逻辑)
            const now = getTimestamp();
            const newId = generateUUID();
            const newKey = generateUUID();
            let newItem = {};

            // --- 构建逻辑开始 ---
            if (targetType === 'analyze') {
                let newType = 1;
                if (item.type === 0) newType = 1;
                else if (item.type === 1) newType = 2;
                else if (item.type !== undefined) newType = item.type;

                newItem = {
                    id: newId, key: newKey, name: item.name || "新解析", api: item.url || item.api || "",
                    type: newType, flag: item.flag || [], headers: item.headers || {}, script: item.script || "",
                    isActive: item.isActive !== false, createdAt: now, updatedAt: now
                };
            } else if (targetType === 'iptv') {
                let newType = 1;
                if (typeof item.type === 'string') {
                    if (item.type === 'remote') newType = 1;
                    else if (item.type === 'local') newType = 2;
                    else if (item.type === 'manual') newType = 3;
                } else if (item.type !== undefined) newType = item.type;

                newItem = {
                    id: newId, key: newKey, name: item.name || "新直播", api: item.url || item.api || "",
                    type: newType, epg: item.epg || "https://epg.112114.eu.org/?ch={name}&date={date}",
                    logo: item.logo || "https://epg.112114.eu.org/logo/{name}.png",
                    headers: item.headers || {}, isActive: item.isActive !== false, createdAt: now, updatedAt: now
                };
            } else if (targetType === 'channel') {
                newItem = {
                    id: newId, name: item.name || "新频道", api: item.url || item.api || "",
                    logo: item.logo || "", playback: item.playback || "", group: item.group || "默认",
                    createdAt: now, updatedAt: now
                };
            } else if (targetType === 'sites') {
                let extStr = "{}";
                if (isDrive) {
                    try {
                        let extObj = item.params ? (typeof item.params === 'string' ? JSON.parse(item.params) : item.params) : {};
                        if (item.showAll !== undefined) extObj.showAll = item.showAll;
                        extStr = JSON.stringify(extObj);
                    } catch(e) { extStr = "{}"; }
                } else {
                    extStr = typeof item.ext === 'string' ? item.ext : (item.ext ? JSON.stringify(item.ext) : "");
                }

                let searchVal = !isDrive && item.search ? (typeof item.search === 'boolean' ? item.search : parseInt(item.search)>0) : false;

                newItem = {
                    id: newId, key: newKey, name: item.name || (isDrive?"新云盘":"新站"),
                    api: isDrive ? (item.server||"") : (item.api||""),
                    playUrl: item.playUrl||"", search: searchVal, group: item.group||(isDrive?"云盘":"切片"),
                    type: isDrive ? 13 : (item.type!==undefined?item.type:1),
                    ext: extStr, categories: item.categories||"电视,影视",
                    isActive: item.isActive!==false, createdAt: now, updatedAt: now
                };
            }
            // --- 构建逻辑结束 ---

            targetArray.push(newItem);
            addedCount[targetType]++;
        }
    }

    // 输出统计
    console.log("\n✅ 处理完成!");
    console.log(`   📈 新增: Analyze(+${addedCount.analyze}), IPTV(+${addedCount.iptv}), Channel(+${addedCount.channel}), Sites(+${addedCount.sites})`);
    console.log(`   🚫 跳过: Analyze(${skipCount.analyze}), IPTV(${skipCount.iptv}), Channel(${skipCount.channel}), Sites(${skipCount.sites})`);

    if (skipCount.analyze > 0 || skipCount.iptv > 0 || skipCount.channel > 0) {
        console.log("\n💡 提示: 如果跳过数量较多，说明 input.json 中的 URL 已存在于 index.json 中。");
        console.log("   若想强制添加，请删除 index.json 或修改 input.json 中的 URL。");
    }

    fs.writeFileSync(filePathOut, JSON.stringify(output, null, 2), "utf8");
    console.log(`   💾 已保存至: ${filePathOut}`);
}

function createDefaultSetting() {
    return { version: "3.4.3", theme: "system", lang: "zh_CN", zoom: 1, proxy: { type: "none", url: "", bypass: "" }, hot: "kylive", site: { searchMode: "site", filterMode: false }, live: { ipMark: true, thumbnail: false, delay: false, epg: "https://epg.112114.eu.org/?ch={name}&date={date}", logo: "https://epg.112114.eu.org/logo/{name}.png" }, defaultSite: "", defaultIptv: "", defaultAnalyze: "", barrage: { url: "", id: "name", key: "danmuku", support: ["qq", "qiyi", "youku", "mgtv"], time: 0, type: 1, color: 2, text: 4 }, player: { type: "xgplayer", external: "" }, softSolution: false, disclaimer: true, bossKey: "Shift+Command+Z", sniffer: { type: "cdp", url: "" }, autoStart: false, hardwareAcceleration: true, ua: "Mozilla/5.0", dns: "", cloud: { sync: false, type: "webdav", data: { url: "", user: "", password: "" } }, aigc: { type: "openai", server: "", key: "", model: "gpt-3.5-turbo" }, timeout: 5000, debug: false };
}
function mergeSettings(old) { const d = createDefaultSetting(); const m = {...d, ...old}; ['proxy','site','live','barrage','player','sniffer','cloud','aigc'].forEach(k=>{if(old[k])m[k]={...d[k],...old[k]}}); return m; }

init();