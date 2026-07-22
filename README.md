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
- 图片与 PDF：`public/assets/`。

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

### 3. 每个页面在哪里修改

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

完整请见 `TEAM_MAINTENANCE.md`。推荐使用维护命令，而不是手动修改页面组件。

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
每组按姓名最后一个单词，即 surname，按英文字母排序。

#### 将 Team 成员移入 Alumni

```bash
npm run team:member -- --name "Qiuxia GAO" --group alumni
```

已有照片、链接、职位和学院会保留。

#### 更新照片、职位或学院

更新照片：

```bash
npm run team:member -- \
  --name "member name" \
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

#### 第一次部署

1. 在本地确认 `npm run build` 成功。
2. 将项目提交并推送到 GitHub。
3. 登录 Vercel，选择 **Add New → Project**。
4. 导入对应的 GitHub 仓库。
5. Framework Preset 选择或确认 **Next.js**。
6. Root Directory 保持 `./`。
7. Build Command 使用 `npm run build`，Install Command 使用 `npm ci` 或默认值。
8. 不要手动覆盖 Output Directory，让 Vercel 的 Next.js Preset 处理静态导出。
9. 选择 **Deploy**，完成后逐页检查 `/research/`、`/team/`、`/data/` 和 404 页面。

本项目当前不需要环境变量。

#### 后续更新

```bash
git add -A
git commit -m "Update website content"
git push origin main
```

Vercel 会自动构建并发布 `main` 分支。发布失败时，先在 Vercel 的 Build Logs 中检查
Node.js 版本和 `npm run build` 输出。

#### 自定义域名

1. 打开 Vercel 项目的 **Settings → Domains**。
2. 添加根域名和/或 `www` 子域名。
3. 在域名 DNS 服务商处填写 Vercel 当前页面显示的 A、CNAME 或 TXT 记录。
4. 不要硬编码旧教程中的 DNS 值；以项目 Domains 页面给出的值为准。
5. 等待域名验证和 HTTPS 证书签发，再测试 HTTP 到 HTTPS 和根域名到 `www` 的跳转。

官方说明：
[Vercel custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain)。

### 6. 阿里云部署方案

本项目是多页面静态导出，架构为：

```text
访客 → 自定义域名 / 可选 CDN → 阿里云 OSS → out/ 静态文件
```

#### 备案与区域选择

- OSS Bucket 位于中国大陆并使用自定义域名时，需要完成 ICP 备案。
- 已备案主域名的子域名通常无需单独备案，但仍需按阿里云要求完成域名绑定。
- 如果暂时没有备案，可选择香港或其他非中国大陆区域，但大陆访问速度和稳定性应实测。

参见阿里云官方的
[OSS ICP filing requirements](https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/use-oss)。

#### 创建并配置 OSS

1. 在阿里云 OSS 控制台创建一个专门用于公开网站的 Bucket。
2. 选择 **Standard** 存储类型；区域应与目标访问地区匹配。
3. 进入 **数据管理 / Data Management → 静态页面 / Static Page**。
4. Default Homepage 设置为 `index.html`。
5. 开启 Subfolder Homepage，因为本项目会生成 `team/index.html` 等子目录首页。
6. Subfolder 404 Rule 选择 **Redirect**，使 `/team` 能跳转到 `/team/`。
7. Default 404 Page 设置为 `404.html`，Error Page Status Code 设置为 `404`。
8. 按 OSS 静态网站要求关闭该 Bucket 的 Block Public Access，并将 Bucket ACL 设为
   **Public Read**。该 Bucket 只能放公开网站文件，绝不能存放密钥或私密资料。

以上配置对应阿里云的
[OSS static website hosting guide](https://help.aliyun.com/en/oss/user-guide/hosting-static-websites)。

#### 构建并上传

```bash
nvm use
npm ci
npm run build
```

方法一：在 OSS 控制台进入 **Object Management → Objects**，上传 `out/` 内的所有内容，
注意上传的是 `out/` 的内容，不是在 Bucket 根目录再创建一层 `out`。

方法二：安装并配置 `ossutil` 后上传：

```bash
ossutil cp -r out/ oss://YOUR_BUCKET_NAME/ --update
```

`--update` 只上传不存在或较新的文件。它不会自动删除云端已废弃的旧文件，改名或删除页面后
应在 OSS 中检查残留对象。命令参数参见
[ossutil cp documentation](https://help.aliyun.com/en/oss/developer-reference/upload-objects-6)。

#### 域名、HTTPS 与 CDN

1. 在 OSS 中绑定已备案的自定义域名；不要把 OSS 默认 Bucket 域名作为正式网站地址。
2. 在 DNS 中将网站域名指向 OSS 控制台提供的目标地址。
3. 为自定义域名配置 HTTPS 证书，并开启 HTTP 到 HTTPS 跳转。
4. 需要更好的大陆访问速度时，可为该域名启用阿里云 CDN，并将 OSS 设为源站。
5. 每次发布后，如 CDN 仍显示旧页面，执行 URL/目录刷新或等待缓存过期。

#### 阿里云后续发布流程

```bash
nvm use
npm run build
ossutil cp -r out/ oss://YOUR_BUCKET_NAME/ --update
```

发布后至少检查：首页、`/team/`、`/research/`、图片、PDF、外部链接、移动端菜单和
不存在页面的 404 状态。

### 7. 发布前检查清单

- `npm run build` 成功且没有 TypeScript 错误。
- 首页、Research、Teaching、Team、Data 和 Vacancy 页面可访问。
- Team 中 PhD/RA 顺序、照片裁切、姓名链接正确。
- CV、Short Bio、论文附录和其他 PDF 可以打开。
- 桌面端和手机端没有文字或图片重叠。
- 自定义域名、HTTPS、404 和重定向正常。
- 阿里云大陆区域已完成所需备案，OSS Bucket 中没有任何私密文件。

---

## English Guide

### 1. Stack and project layout

- Node.js: Node.js 22 from `.nvmrc` is recommended.
- Framework: Next.js 16, React 19, and TypeScript.
- Deployment mode: `output: "export"` in `next.config.ts`.
- URL format: `trailingSlash: true`, for example `/team/`.
- Static build output: `out/`.
- Images and PDFs: `public/assets/`.

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

The extended guide is also available in `TEAM_MAINTENANCE.md`. The maintenance
command is preferred over editing the page component.

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
npm run team:member -- --name "Qiuxia GAO" --group alumni
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

GitHub-connected Vercel deployment is the recommended workflow. Vercel detects
Next.js automatically and creates deployments for Git pushes. See the official
[Vercel Next.js deployment guide](https://vercel.com/academy/ai-summary-app-with-nextjs/deploy-the-app).

#### First deployment

1. Confirm that `npm run build` succeeds locally.
2. Commit and push the repository to GitHub.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Confirm the **Next.js** Framework Preset.
6. Keep Root Directory as `./`.
7. Use `npm run build` as Build Command and `npm ci` or the detected default as Install Command.
8. Do not override Output Directory; let Vercel's Next.js preset handle the static export.
9. Deploy, then test `/research/`, `/team/`, `/data/`, assets, and the 404 page.

No environment variables are currently required.

#### Subsequent updates

```bash
git add -A
git commit -m "Update website content"
git push origin main
```

Vercel rebuilds and publishes the production branch automatically. Use Vercel's
Build Logs to diagnose Node.js or build failures.

#### Custom domain

1. Open **Project Settings → Domains**.
2. Add the apex domain and/or `www` subdomain.
3. Add the A, CNAME, or TXT records currently shown by Vercel at the DNS provider.
4. Do not copy stale DNS values from tutorials; use the values shown for this project.
5. Wait for verification and HTTPS certificate issuance, then test redirects.

See [Vercel custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain).

### 6. Alibaba Cloud deployment

The recommended architecture for this static multi-page export is:

```text
Visitor → custom domain / optional CDN → Alibaba Cloud OSS → out/ files
```

#### Region and ICP filing

- A custom domain serving content from an OSS bucket in the Chinese mainland requires ICP filing.
- A subdomain of an already filed apex domain normally does not need a separate filing, subject to Alibaba Cloud's binding requirements.
- A Hong Kong or other non-mainland region can be used without mainland hosting, but mainland performance should be tested.

See the official
[OSS ICP filing requirements](https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/use-oss).

#### Create and configure OSS

1. Create a dedicated public-website bucket in the OSS console.
2. Use the Standard storage class and select a suitable region.
3. Open **Data Management → Static Page**.
4. Set Default Homepage to `index.html`.
5. Enable Subfolder Homepage because the export contains paths such as `team/index.html`.
6. Set Subfolder 404 Rule to **Redirect**, so `/team` redirects to `/team/`.
7. Set Default 404 Page to `404.html` and Error Page Status Code to `404`.
8. Following OSS static-hosting requirements, disable Block Public Access for this bucket and set its ACL to **Public Read**. Store public website assets only; never upload secrets or private documents.

See the
[OSS static website hosting guide](https://help.aliyun.com/en/oss/user-guide/hosting-static-websites).

#### Build and upload

```bash
nvm use
npm ci
npm run build
```

Console method: open **Object Management → Objects** and upload the contents of
`out/` to the bucket root. Do not create an extra top-level `out` directory.

CLI method after installing and configuring `ossutil`:

```bash
ossutil cp -r out/ oss://YOUR_BUCKET_NAME/ --update
```

`--update` uploads missing or newer files but does not delete obsolete remote files.
After renaming or deleting pages, check OSS for stale objects. See the official
[ossutil cp documentation](https://help.aliyun.com/en/oss/developer-reference/upload-objects-6).

#### Domain, HTTPS, and CDN

1. Bind a filed custom domain to OSS; do not use the default bucket endpoint as the production website URL.
2. Point the DNS record to the target shown in the OSS console.
3. Configure an HTTPS certificate and redirect HTTP to HTTPS.
4. Optionally enable Alibaba Cloud CDN with OSS as the origin for better mainland delivery.
5. Purge relevant CDN URLs/directories after deployment when old content remains cached.

#### Subsequent Alibaba Cloud releases

```bash
nvm use
npm run build
ossutil cp -r out/ oss://YOUR_BUCKET_NAME/ --update
```

After publishing, test the homepage, `/team/`, `/research/`, images, PDFs, external
links, mobile navigation, and a non-existent URL returning the intended 404 page.

### 7. Pre-release checklist

- `npm run build` succeeds without TypeScript errors.
- Home, Research, Teaching, Team, Data, and Vacancy are reachable.
- Team ordering, photo crops, names, and links are correct.
- CV, Short Bio, appendices, and other PDFs open correctly.
- Desktop and mobile layouts have no overlapping text or images.
- Custom domain, HTTPS, 404 handling, and redirects work.
- Required ICP filing is complete for mainland Alibaba Cloud hosting, and the OSS bucket contains no private files.
