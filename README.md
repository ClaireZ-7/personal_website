# Yi FAN 樊漪 Academic Website / 学术个人网站

这是一个使用 Next.js、React 和 TypeScript 构建的学术个人网站。项目启用了
Next.js 静态导出，执行 `npm run build` 后会在 `out/` 中生成完整的 HTML、CSS、
JavaScript、图片和 PDF，可部署到 Vercel、阿里云 OSS 或其他静态托管平台。

This is an academic website built with Next.js, React, and TypeScript. The project
uses Next.js static export. Running `npm run build` creates a complete static site
in `out/`, ready for Vercel, Alibaba Cloud OSS, or another static host.

- [中文说明](#中文说明)
- [English Guide](#english-guide)

## 中文说明

### 1. 技术与目录概览

- Node.js：建议使用 `.nvmrc` 指定的 Node.js 22。
- 框架：Next.js 16、React 19、TypeScript。
- 部署模式：`next.config.ts` 中的 `output: "export"`。
- 路由格式：`trailingSlash: true`，例如 `/team/`。
- 静态构建输出：`out/`。
- 图片与 PDF路径：`public/assets/`。

Next.js 官方说明：启用 `output: "export"` 后，`next build` 会将每个路由输出为
静态文件，并生成 `out/` 目录。参见
[Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)。

### 2. 在本地运行

首次运行：

```bash
nvm use
npm ci
npm run dev
```

在浏览器打开：

```text
http://localhost:3000
```

如果 `3000` 端口已被占用，Next.js 会显示实际使用的端口，例如 `3001`。

每次完成内容修改后，运行生产构建：

```bash
nvm use
npm run build
```

构建成功后，最终静态网站位于 `out/`。如需预览最终导出结果：

```bash
npx serve out
```

开发时使用 `npm run dev`；部署前必须至少运行一次 `npm run build`。

### 3. 页面修改

| 页面或内容 | 浏览地址 | 修改位置 |
| --- | --- | --- |
| Home | `/` | `src/components/HomePage.tsx` |
| Research | `/research/` | `src/generated-content.ts` 中的 `research` |
| Research Media Coverage | `/research/` | `src/media-coverage.ts` |
| Grants & Honours | `/grants-honours/` | `src/generated-content.ts` 中的 `grants-honours` |
| Teaching & Service | `/teaching-service/` | `src/generated-content.ts` 中的 `teaching-service` |
| Team | `/team/` | `src/team-members.json` |
| Team 排序逻辑 | `/team/` | `src/team.ts` |
| Team 页面结构 | `/team/` | `src/components/TeamPage.tsx` |
| Data | `/data/` | `src/generated-content.ts` 中的 `data` |
| Vacancy | `/vacancy/` | `src/generated-content.ts` 中的 `vacancy` |
| 顶部导航与页面名称 | 全站 | `src/site.ts` |
| 顶部导航组件 | 全站 | `src/components/Header.tsx` |
| 页脚邮箱与文字 | 全站 | `src/components/Footer.tsx` |
| 网站标题与 SEO 描述 | 全站 | `app/layout.tsx` |
| 字体、颜色、布局与响应式样式 | 全站 | `app/globals.css` |
| 图片、CV、Short Bio 和附录 | 全站 | `public/assets/` |
| 静态导出配置 | 构建 | `next.config.ts` |

`src/generated-content.ts` 是从旧 Weebly 网站导入的内容，文件较长。修改时先搜索页面上
显示的原文，再做小范围替换。除非需要重新同步旧 Weebly 网站，否则不要运行
`scripts/import-weebly-content.mjs`，因为它会重新生成并覆盖该文件。Team 页已经脱离旧
HTML，不应再修改 `generated-content.ts` 中遗留的 `team` 数据。

### 4. 修改 Team 信息

推荐使用维护命令，而不是手动修改页面组件。

#### 新增成员

```bash
npm run team:member -- \
  --name "member name" \
  --position "PhD Candidate" \
  --school "Department of Real Estate" \
  --school "NUS" \
  --group team \
  --photo "/photo/path.jpg" \
  --link "https://example.com/profile"
```

参数：

- `--name`：姓名，必填。
- `--position`：职位，例如 `PhD Candidate` 或 `Research Assistant`。
- `--school`：学院或学校；每行使用一次，可重复添加。
- `--group`：填写 `team` 或 `alumni`。
- `--photo`：可选；可填写电脑中的照片路径，脚本会复制到 `public/assets/`。
- `--link`：可选；姓名链接，可指向个人主页、LinkedIn 或 CV。

当前 Team 会自动排列：职位包含 `PhD` 的成员在前，`Research Assistant` 在后，
每组按 surname 字母序排序。

#### 将 Team 成员移入 Alumni

```bash
npm run team:member -- --name "Memmber NAME" --group alumni
```

已有照片、链接、职位和学院会保留。

#### 更新照片、职位或学院

更新照片：

```bash
npm run team:member -- \
  --name "member NAME" \
  --photo "/photo/path.jpg"
```

更新职位：

```bash
npm run team:member -- \
  --name "Member NAME" \
  --position "PhD Candidate"
```

更新学院时，需要重新输入该成员需要保留的全部学院行：

```bash
npm run team:member -- \
  --name "Member NAME" \
  --school "Department of Real Estate" \
  --school "NUS"
```

删除照片或链接：

```bash
npm run team:member -- --name "Member NAME" --remove-photo true
npm run team:member -- --name "Member NAME" --remove-link true
```

也可以直接编辑 `src/team-members.json`：

```json
{
  "name": "Full NAME",
  "position": "PhD Candidate",
  "affiliation": ["Department of Real Estate", "NUS"],
  "group": "team",
  "image": "/assets/photo.jpg",
  "link": "https://example.com/profile"
}
```

`image` 和 `link` 可以省略；没有照片时，页面会显示姓名首字母占位。

### 5. Vercel 部署方案

使用 GitHub 与 Vercel 自动部署。Vercel 会识别 Next.js，并为每次推送生成部署；
非生产分支通常生成 Preview，生产分支生成 Production。参见
[Vercel Next.js deployment guide](https://vercel.com/academy/ai-summary-app-with-nextjs/deploy-the-app)。


#### 后续更新

github 进行改动后，推送到远程仓库将自动更新部署。

```bash
git add -A
git commit -m "Update website content"
git push origin main
```

Vercel 会自动构建并发布 `main` 分支。发布失败时，先在 Vercel 的 Build Logs 中检查 Node.js 版本和 `npm run build` 输出。


## English Guide

### 1. Stack and project layout

- Node.js: Node.js 22 from `.nvmrc` is recommended.
- Framework: Next.js 16, React 19, and TypeScript.
- Deployment mode: `output: "export"` in `next.config.ts`.
- URL format: `trailingSlash: true`, for example `/team/`.
- Static build output: `out/`.
- Images and PDFs path: `public/assets/`.

With `output: "export"`, `next build` emits static files for every route into
`out/`. See the official
[Next.js Static Exports guide](https://nextjs.org/docs/app/guides/static-exports).

### 2. Run locally

First-time setup:

```bash
nvm use
npm ci
npm run dev
```

Open:

```text
http://localhost:3000
```

If port `3000` is occupied, Next.js prints the actual port, such as `3001`.

Run a production build after making content changes:

```bash
nvm use
npm run build
```

The exported website is written to `out/`. To preview that exact output:

```bash
npx serve out
```

Use `npm run dev` while editing, and always run `npm run build` before deployment.

### 3. Where to edit each page

| Page or content | URL | Source file |
| --- | --- | --- |
| Home | `/` | `src/components/HomePage.tsx` |
| Research | `/research/` | `research` in `src/generated-content.ts` |
| Research Media Coverage | `/research/` | `src/media-coverage.ts` |
| Grants & Honours | `/grants-honours/` | `grants-honours` in `src/generated-content.ts` |
| Teaching & Service | `/teaching-service/` | `teaching-service` in `src/generated-content.ts` |
| Team data | `/team/` | `src/team-members.json` |
| Team sorting | `/team/` | `src/team.ts` |
| Team layout | `/team/` | `src/components/TeamPage.tsx` |
| Data | `/data/` | `data` in `src/generated-content.ts` |
| Vacancy | `/vacancy/` | `vacancy` in `src/generated-content.ts` |
| Navigation and page names | Site-wide | `src/site.ts` |
| Header component | Site-wide | `src/components/Header.tsx` |
| Footer email and text | Site-wide | `src/components/Footer.tsx` |
| Site title and SEO metadata | Site-wide | `app/layout.tsx` |
| Typography, colors, layout, responsive CSS | Site-wide | `app/globals.css` |
| Images, CV, Short Bio, appendices | Site-wide | `public/assets/` |
| Static export settings | Build | `next.config.ts` |

`src/generated-content.ts` was imported from the old Weebly website and is large.
Search for the exact visible text before making a narrow edit. Do not run
`scripts/import-weebly-content.mjs` unless you intentionally want to regenerate and
overwrite that file from the old Weebly source. Team is now data-driven; ignore the
legacy `team` HTML in `generated-content.ts`.

### 4. Update Team information

The maintenance command is preferred over editing the page component.

#### Add a member

```bash
npm run team:member -- \
  --name "Member NAME" \
  --position "PhD Candidate" \
  --school "Department of Real Estate" \
  --school "NUS" \
  --group team \
  --photo "/photo/path.jpg" \
  --link "https://example.com/profile"
```

Arguments:

- `--name`: required full name.
- `--position`: position such as `PhD Candidate` or `Research Assistant`.
- `--school`: one affiliation line; repeat it for additional lines.
- `--group`: `team` or `alumni`.
- `--photo`: optional local photo path; the script copies it to `public/assets/`.
- `--link`: optional profile, LinkedIn, or CV URL.

Current Team members are sorted automatically: positions containing `PhD` appear
first, Research Assistants appear next, and each group is sorted by the final word
in the name, treated as the surname.

#### Move a current member to Alumni

```bash
npm run team:member -- --name "Member NAME" --group alumni
```

The existing photo, link, position, and affiliation are retained.

#### Update a photo, position, or affiliation

```bash
npm run team:member -- \
  --name "Member NAME" \
  --photo "/photo/path.jpg"
```

```bash
npm run team:member -- \
  --name "Member NAME" \
  --position "PhD Candidate"
```

When updating affiliations, provide every line that should remain:

```bash
npm run team:member -- \
  --name "Member NAME" \
  --school "Department of Real Estate" \
  --school "NUS"
```

Remove a photo or link:

```bash
npm run team:member -- --name "Member NAME" --remove-photo true
npm run team:member -- --name "Member NAME" --remove-link true
```

You may also edit `src/team-members.json` directly:

```json
{
  "name": "Full NAME",
  "position": "PhD Candidate",
  "affiliation": ["Department of Real Estate", "NUS"],
  "group": "team",
  "image": "/assets/photo.jpg",
  "link": "https://example.com/profile"
}
```

`image` and `link` are optional. A member without a photo receives an initials
placeholder.

### 5. Vercel deployment

The workflow is GitHub-connected Vercel deployment. Vercel detects
Next.js automatically and creates deployments for Git pushes. See the official
[Vercel Next.js deployment guide](https://vercel.com/academy/ai-summary-app-with-nextjs/deploy-the-app).


#### Subsequent updates

After Git pushes, the website is automatically deployed.

```bash
git add -A
git commit -m "Update website content"
git push origin main
```

Vercel rebuilds and publishes the production branch automatically. Use Vercel's Build Logs to diagnose Node.js or build failures.