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

## 接入 Calendly（傻瓜步骤）

整站「Book Audit」「预约」类按钮都指向同一个链接，改一次即可。

### A. 在 Calendly 里拿到链接

1. 打开 [https://calendly.com](https://calendly.com) ，注册/登录。
2. 左侧进入 **Scheduling**（或 **Event types**），确认已有一个预约类型（例如 30 分钟）；没有就点 **Create** 新建一个。
3. 点开该预约类型右侧的 **Copy link**（或 **Share**），复制 **完整浏览器地址**。  
   - 常见形态：`https://calendly.com/你的用户名/30min` 或 `https://calendly.com/你的用户名`  
   - 必须是 **`https://` 开头**，复制整段，不要只复制路径。

### B. 填进本项目（二选一）

**方式 1：直接改代码（最简单）**

1. 打开 [`lib/constants.ts`](lib/constants.ts)。
2. 把 `https://calendly.com/REPLACE_ME` 整段换成你刚复制的链接，保存。
3. 本地 `npm run dev` 点页面按钮，应跳转到你的 Calendly。
4. 推送到 GitHub 后，Vercel 会自动重新部署。

**方式 2：用环境变量（适合已在 Vercel 部署、不想改代码）**

1. 复制 [`.env.example`](.env.example) 为项目根目录下的 `.env.local`。
2. 写上：  
   `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/你的用户名/xxx`（不要引号，不要换行）
3. 本地重启 `npm run dev` 再测。
4. **Vercel**：项目 → **Settings** → **Environment Variables** → 新增同名变量 `NEXT_PUBLIC_CALENDLY_URL`，值为同一链接，环境勾选 **Production**（以及需要的话 **Preview**）→ Save → **Deployments** 里对最新部署点 **Redeploy**。

> 说明：若同时设置了环境变量和 `constants.ts` 里的默认值，**以环境变量为准**。

### 其他

- 页脚邮箱：编辑 [`components/Footer.tsx`](components/Footer.tsx)。

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
