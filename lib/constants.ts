/**
 * Calendly 预约链接（全站按钮共用）
 *
 * 填法二选一：
 * 1）改下面默认值：把 REPLACE_ME 换成你的 Calendly 链接（见 README「接入 Calendly」）
 * 2）用环境变量：在项目根目录建 `.env.local`，写 NEXT_PUBLIC_CALENDLY_URL=你的链接（Vercel 同理在后台加）
 *
 * 链接格式示例：https://calendly.com/你的用户名/会议类型 或 https://calendly.com/你的用户名
 */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
  "https://calendly.com/REPLACE_ME";
