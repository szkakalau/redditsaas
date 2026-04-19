# Reddit Growth Engine — Landing

单页落地站：Next.js 14（App Router）+ Tailwind CSS，用于 Reddit 投流与预约咨询（Calendly）。

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

## 配置

- 预约链接：编辑 [`lib/constants.ts`](lib/constants.ts) 中的 `CALENDLY_URL`（替换 `REPLACE_ME`）。
- 页脚邮箱：见 [`components/Footer.tsx`](components/Footer.tsx)。

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
