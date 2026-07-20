# Yi FAN 樊漪 — Academic Website

基于 Next.js、React 与 TypeScript 的个人学术网站。页面结构和内容迁移自原 Weebly 网站，图片、PDF 与附录均已本地化，不再依赖 Weebly 运行。

## 页面

- Home
- Research
- Grants & Honours
- Teaching & Service
- Team
- Data
- Vacancy

## 如何本地打开网页

本项目有两种最常用的本地打开方式：

1. 开发模式：适合修改内容、看实时更新。
2. 生产预览：适合确认最终导出后的静态页面效果。

### 开发模式

需要 Node.js 20.9 或更高版本，建议 Node.js 22。

```bash
nvm use
npm install
npm run dev
```

然后在浏览器里打开 `http://localhost:3000`。页面会随着代码修改自动刷新。

### 生产预览

这个项目在 `next.config.ts` 里启用了静态导出，所以正式构建后不会依赖 Node.js 服务器，而是直接生成静态文件到 `out/`。

```bash
npm run build
```

构建完成后，可以把 `out/` 当作一个纯静态网站来访问。最简单的方式是用本地静态服务器打开它，例如：

```bash
npx serve out
```

如果你只是开发和调试，通常 `npm run dev` 就够了；如果你想检查上线后的真实效果，再用 `build + 静态服务器` 的方式预览。

## 内容更新

- 首页正文：`src/components/HomePage.tsx`
- 其余页面：`src/generated-content.ts`
- 公共样式：`app/globals.css`
- 图片与 PDF：`public/assets/`

`scripts/import-weebly-content.mjs` 和 `scripts/download-assets.mjs` 是本次迁移工具。仅当需要重新从原 Weebly 站点同步内容时运行；正常编辑网站不依赖它们。

## 部署方法

这个项目推荐部署到 Vercel。流程是：

1. 把代码推送到 GitHub 的 `main` 分支。
2. 在 Vercel 里选择 **New Project**，导入这个 GitHub 仓库。
3. Framework Preset 选择 **Next.js**。
4. Build Command 保持默认的 `next build`。
5. 不需要额外填写 Output Directory，因为项目已经配置为静态导出，Vercel 会按 Next.js 项目处理构建结果。
6. 在 Vercel 的 **Settings → Domains** 里绑定正式域名，建议同时绑定根域名和 `www`。

部署后的规则也很简单：每次推送到 `main`，Vercel 会自动生成生产部署；其他分支和 Pull Request 会生成预览部署，方便你先检查再上线。

如果你想把构建结果部署到其他静态托管服务，也可以直接上传 `out/` 目录，因为它已经是完整的静态站点。

## Cloudflare DNS / CDN

推荐先完成 Vercel 的域名验证，再打开 Cloudflare 代理：

1. 将域名 Nameserver 切换到 Cloudflare。
2. 在 Vercel 的 Domain 页面复制它为当前项目给出的 DNS 记录。不要猜固定目标；Vercel 现在可能给出项目专用 CNAME。
3. 在 Cloudflare 创建相同的 `CNAME`/`A` 记录；Vercel 要求的域名验证 `TXT` 记录保持 **DNS only**。
4. 首次验证和证书签发时可先将网站记录设为 **DNS only（灰云）**。Vercel 显示域名与证书正常后，再切换为 **Proxied（橙云）**。
5. Cloudflare **SSL/TLS → Overview** 设为 **Full (strict)**；开启 **Always Use HTTPS**。
6. 建议保留默认缓存策略。本站是静态导出，HTML、CSS、JS 和图片均可由 Cloudflare 缓存。

拓扑为：`访客 → Cloudflare → Vercel`。橙云会让公开 DNS 返回 Cloudflare Anycast 地址，并由 Cloudflare 代理 HTTP/HTTPS 流量，避免访客直接连接源站。

### 中国大陆访问说明

Cloudflare 免费版使用全球网络代理，有机会改善路由并隐藏 Vercel 源站，但**不等同于中国大陆境内 CDN，也不能保证所有地区和运营商稳定绕过网络限制**。Cloudflare 官方的中国大陆节点属于单独的 Enterprise China Network 订阅，并要求 ICP 备案。上线后应使用中国移动、联通、电信多地实测；若需要强 SLA，应选择具备大陆节点和备案支持的部署/CDN 方案。

## 上线检查

- Vercel Domains 中根域名与 `www` 均为 Valid Configuration
- Cloudflare SSL 模式为 Full (strict)，没有 525/526 或重定向循环
- `curl -I https://your-domain.com` 返回 200
- 手机端菜单、CV/Short Bio PDF、Research 外链与 Team 图片正常
- 中国大陆三网和海外各测试至少一个节点
