import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("src/team-members.json");
const assetsDirectory = path.resolve("public/assets");

function readArguments(values) {
  const result = {};
  for (let index = 0; index < values.length; index += 2) {
    const key = values[index]?.replace(/^--/, "");
    const value = values[index + 1];
    if (!key || value === undefined) throw new Error(`Invalid argument near: ${values[index] ?? "end"}`);
    if (key === "school") {
      result.school ??= [];
      result.school.push(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function memberSlug(name) {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function storePhoto(photo, name) {
  if (photo.startsWith("/assets/")) return photo;

  const source = path.resolve(photo);
  if (!fs.existsSync(source)) throw new Error(`Photo not found: ${source}`);

  const extension = path.extname(source).toLowerCase() || ".jpg";
  const filename = `${memberSlug(name)}${extension}`;
  fs.mkdirSync(assetsDirectory, { recursive: true });
  fs.copyFileSync(source, path.join(assetsDirectory, filename));
  return `/assets/${filename}`;
}

const args = readArguments(process.argv.slice(2));
if (!args.name) throw new Error("--name is required");
if (args.group === "teams") args.group = "team";
if (args.group === "alumi") args.group = "alumni";
if (args.group && !["team", "alumni"].includes(args.group)) {
  throw new Error('--group must be either "team" or "alumni"');
}

const members = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const existingIndex = members.findIndex((member) => member.name.toLowerCase() === args.name.toLowerCase());

if (existingIndex < 0 && (!args.position || !args.school?.length || !args.group)) {
  throw new Error("A new member requires --position, at least one --school, and --group");
}

const existing = existingIndex >= 0 ? members[existingIndex] : {};
const updated = {
  ...existing,
  name: args.name,
  position: args.position ?? existing.position,
  affiliation: args.school ?? existing.affiliation,
  group: args.group ?? existing.group,
};

if (args.photo) updated.image = storePhoto(args.photo, args.name);
if (args.link) updated.link = args.link;
if (args["remove-photo"] === "true") delete updated.image;
if (args["remove-link"] === "true") delete updated.link;

if (existingIndex >= 0) members[existingIndex] = updated;
else members.push(updated);

fs.writeFileSync(dataPath, `${JSON.stringify(members, null, 2)}\n`);
console.log(`${existingIndex >= 0 ? "Updated" : "Added"} ${updated.name} (${updated.group}).`);
