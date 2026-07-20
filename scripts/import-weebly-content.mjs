import fs from "node:fs";
import path from "node:path";

const sources = {
  research: "/tmp/fanyin-research.html",
  "grants-honours": "/tmp/fanyin-grants.html",
  "teaching-service": "/tmp/fanyin-teaching.html",
  team: "/tmp/fanyin-team.html",
  data: "/tmp/fanyin-data.html",
  vacancy: "/tmp/fanyin-vacancy.html",
};

function extractElementInnerHtml(html, id) {
  const idIndex = html.search(new RegExp(`<div[^>]+id=["']${id}["']`, "i"));
  if (idIndex < 0) throw new Error(`Cannot find #${id}`);
  const openEnd = html.indexOf(">", idIndex) + 1;
  const tag = /<\/?div\b[^>]*>/gi;
  tag.lastIndex = openEnd;
  let depth = 1;
  let match;
  while ((match = tag.exec(html))) {
    depth += match[0][1] === "/" ? -1 : 1;
    if (depth === 0) return html.slice(openEnd, match.index);
  }
  throw new Error(`Unclosed #${id}`);
}

function clean(fragment) {
  const contactIndex = fragment.lastIndexOf("Contact me at");
  if (contactIndex >= 0) {
    const sectionStart = fragment.lastIndexOf('<div class="wsite-section-wrap">', contactIndex);
    if (sectionStart >= 0) fragment = fragment.slice(0, sectionStart);
  }
  return fragment
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/\s(?:data|onclick|onload)-?[^=\s]*=("[^"]*"|'[^']*')/gi, "")
    .replace(/(?:https?:\/\/fanyinus\.weebly\.com)?\/uploads\/[^"']*?\/([^\/"']+)(?=["'])/gi, "/assets/$1")
    .replace(/href="\/?research\.html"/gi, 'href="/research/"')
    .replace(/href="\/?grants--honours\.html"/gi, 'href="/grants-honours/"')
    .replace(/href="\/?teaching--service\.html"/gi, 'href="/teaching-service/"')
    .replace(/href="\/?team\.html"/gi, 'href="/team/"')
    .replace(/href="\/?data\.html"/gi, 'href="/data/"')
    .replace(/href="\/?vacancy\.html"/gi, 'href="/vacancy/"')
    .replace(/href="\/"/gi, 'href="/"')
    .replace(/<div class="wsite-spacer"[^>]*><\/div>/gi, "")
    .trim();
}

const imported = Object.fromEntries(Object.entries(sources).map(([slug, file]) => {
  const html = fs.readFileSync(file, "utf8");
  return [slug, clean(extractElementInnerHtml(html, "wsite-content"))];
}));

const output = `// Generated from the public Weebly site.\nexport const contentBySlug: Record<string, string> = ${JSON.stringify(imported, null, 2)};\n`;
fs.mkdirSync(path.resolve("src"), { recursive: true });
fs.writeFileSync(path.resolve("src/generated-content.ts"), output);
console.log(`Imported ${Object.keys(imported).length} pages.`);
