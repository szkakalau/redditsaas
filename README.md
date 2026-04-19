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

推荐 [Vercel](https://vercel.com)：连接本仓库，Framework Preset 选 Next.js 即可。

## 技术栈

- Next.js 14、React 18、TypeScript、Tailwind CSS
- 字体：Inter（[`@fontsource/inter`](https://fontsource.org/fonts/inter)）
