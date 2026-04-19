# Reddit Growth Engine — Landing

单页落地站：Next.js 14（App Router）+ Tailwind CSS，用于 Reddit 投流；线索以 **邮件（mailto）** 为主，可选第三方表单，无后端。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 构建

```bash
npm run build
npm start
```

## 配置联系邮箱与表单

1. **邮箱**：编辑 [`lib/constants.ts`](lib/constants.ts) 里的默认 `contact@email.com`（`CONTACT_EMAIL`），或在本机 / Vercel 设置环境变量 `NEXT_PUBLIC_CONTACT_EMAIL`（会覆盖默认）。页脚与所有「Request audit」按钮共用该地址。
2. **（可选）表单**：在 Formspree、Tally 等创建表单后，把公开提交 URL 设为 `NEXT_PUBLIC_FORM_URL`，Hero 区会多一个 **Prefer a form?** 链接。详见 [`.env.example`](.env.example)。

审计请求通过 **mailto** 预填主题与正文；无需 Calendly。

## 部署

推荐 [Vercel](https://vercel.com) 导入本 GitHub 仓库，按下面设置：

| 项 | 值 |
|----|-----|
| Framework Preset | **Next.js**（自动检测即可） |
| Root Directory | **`.`**（留空或填 `./`，不要选子目录） |
| Build Command | 默认 `next build` |
| Output Directory | 留空（由 Next 插件处理） |
| Install Command | 默认 `npm install`（仓库根目录须有 `package-lock.json`） |

若构建失败：在 Vercel 项目 **Deployments → 失败那条 → Building** 里展开日志，查看红色报错（常见为 Root Directory 指错、或 Node 版本过旧）。本项目要求 **Node ≥ 18.17**（见 `package.json` 的 `engines`）。

## 技术栈

- Next.js 14、React 18、TypeScript、Tailwind CSS
- 字体：Inter（[`@fontsource/inter`](https://fontsource.org/fonts/inter)）
