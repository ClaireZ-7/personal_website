import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const htmlFiles = fs.readdirSync("/tmp").filter((name) => /^fanyin-.+\.html$/.test(name));
const urls = new Map();
for (const name of htmlFiles) {
  const html = fs.readFileSync(path.join("/tmp", name), "utf8");
  for (const match of html.matchAll(/(?:https?:\/\/fanyinus\.weebly\.com)?(\/uploads\/1\/1\/7\/3\/117361814\/[^"'<>& )]+)/g)) {
    const relative = match[1].split("?")[0];
    const filename = decodeURIComponent(relative.split("/").at(-1));
    if (!/\.(?:png|jpe?g|webp|gif|pdf)$/i.test(filename)) continue;
    urls.set(filename, `https://fanyinus.weebly.com${relative}`);
  }
}

fs.mkdirSync("public/assets", { recursive: true });
for (const [filename, url] of urls) {
  const destination = path.join("public/assets", filename);
  if (fs.existsSync(destination)) continue;
  const result = spawnSync("curl", ["-L", "--fail", "--max-time", "45", "-o", destination, url], { stdio: "inherit" });
  if (result.status !== 0) console.warn(`Skipped ${filename}`);
}
console.log(`Downloaded ${urls.size} referenced assets.`);
