import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputPath = path.join(__dirname, "input.json");
const outputPath = path.join(__dirname, "out.json");

async function processJson() {
  try {
    const data = await readFile(inputPath, "utf8");
    const jsonData = JSON.parse(data);

    const uniquePlugins = Array.from(
      new Map(jsonData.plugins.map((item) => [item.url, item])).values()
    );

    await writeFile(outputPath, JSON.stringify(uniquePlugins, null, 2), "utf8");
    console.log("Successfully processed and wrote unique plugins to out.json");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

processJson();