import type { Metadata } from "next";
import Link from "next/link";
import AuditLink from "@/components/AuditLink";
import PlaybookLeadMagnet from "@/components/PlaybookLeadMagnet";
import ROICalculatorCN from "@/components/cn/ROICalculatorCN";

export const metadata: Metadata = {
  title: "Reddit 出海增长引擎｜把 Reddit 变成稳定获客渠道",
  description:
    "我们帮助出海企业从 Reddit 获取高质量线索——不封号、不 spam、不用自己摸索踩坑。零垃圾内容、零机器人、安全第一、社区优先。",
};

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-24 -top-24 h-[22rem] w-[22rem] rounded-full bg-[#6366F1]/15 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 h-[26rem] w-[26rem] rounded-full bg-[#0B0F19]/10 blur-3xl" />
      <div className="absolute left-1/2 top-[-10rem] h-[22rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#A5B4FC]/18 blur-3xl" />
    </div>
  );
}

function Check() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#6366F1]/10 text-[#4F46E5]"
      aria-hidden
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 01.006 1.414l-7.5 7.56a1 1 0 01-1.42 0L3.29 9.79a1 1 0 011.42-1.4l3.03 3.07 6.79-6.84a1 1 0 011.414-.006z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-content px-5 sm:px-6" aria-hidden>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
}

function StatCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-4 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm sm:p-5">
      <p className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
        {v}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#6B7280]">{k}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold text-[#0B0F19]">
      <Check />
      <span>{children}</span>
    </span>
  );
}

const FAQS = [
  {
    q: "这个服务安全吗？",
    a: "是的。我们采用安全第一、人工执行的流程。每条内容都匹配原生版块风格，发布前检查规则，根据移除/版主反馈调整；扩大发帖量前会先预热账号。",
  },
  {
    q: "多久能看到效果？",
    a: "大多数团队 3–6 周初见效果。具体取决于你的市场、产品、定位，以及我们迭代社区反馈的速度。",
  },
  {
    q: "你们保证流量吗？",
    a: "我们保证持续执行——流量取决于你的市场和产品。我们保证：按方案发帖频率、目标社区的每日互动、基于真实数据的每周迭代。",
  },
  {
    q: "如何避免被标记为广告？",
    a: "我们撰写价值优先内容，使用软性 CTA，匹配原生风格，从不违反版块规则；发布前检查规则，避免推广-heavy 形式，当版主或用户表示不适时快速迭代。",
  },
  {
    q: "如果我的细分领域很小众怎么办？",
    a: "很正常。我们通常建立 5–15 个细分社区组合。小版块往往比大版块转化更好，也更安全可规模化。",
  },
  {
    q: "你们需要我们提供什么？",
    a: "简短的产品简介、定位信息和关键更新即可。我们负责研究、撰写、发帖和互动；你早期批准方向，然后我们紧密迭代，通过报告让你持续掌握进展。",
  },
  {
    q: "使用现有账号还是创建新账号？",
    a: "都可以。现有账号我们先评估健康与风险；新账号我们会先预热，避免第一天就零信任信号规模化。",
  },
  {
    q: "如何衡量 ROI？",
    a: "我们追踪流量和互动，并帮助你设置归因（UTM + 简单转化设置），让 Reddit 驱动的注册和收入在你的分析里可见——不只是虚荣指标。",
  },
  {
    q: "最短合同期限是多久？",
    a: "我们建议 3 个月（信任积累需要时间），但我们月付无绑定。首月后可随时取消。",
  },
  {
    q: "如果 Reddit 政策变化怎么办？",
    a: "因为我们的方法是人工执行且规则感知（不是自动化），可以快速适应。我们持续监控版块规则变化，调整定位、形式与 CTA，不依赖风险捷径。",
  },
  {
    q: "30 天内不满意怎么办？",
    a: "随时邮件联系我们并说明担忧。我们会在 48 小时内调整策略，或在 5 个工作日内处理全额退款。无通话、无压力。",
  },
  {
    q: "可以随时暂停或取消吗？",
    a: "可以。月付意味着 exactly that。每月 25 日前邮件通知可取消下月服务。无罚款、无挽留电话。",
  },
] as const;

export default function CNPage() {
  return (
    <main className="pb-[calc(2.25rem+env(safe-area-inset-bottom,0px))]">
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
          <Link href="/ab/reddit-growth-management" className="font-display text-lg font-semibold tracking-tight text-[#0B0F19]">
            Reddit Growth Engine
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#plans" className="text-sm font-medium text-[#6B7280] transition hover:text-[#0B0F19]">
              定价方案
            </a>
            <a href="#process" className="text-sm font-medium text-[#6B7280] transition hover:text-[#0B0F19]">
              服务流程
            </a>
            <a href="#faq" className="text-sm font-medium text-[#6B7280] transition hover:text-[#0B0F19]">
              FAQ
            </a>
            <AuditLink className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0B0F19] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition active:scale-[0.98] hover:shadow-lg">
              免费获取审计方案
            </AuditLink>
          </div>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
        <Glow />
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.35]" aria-hidden />
        <div className="mx-auto grid max-w-content items-start gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
              🇨🇳 Reddit 出海增长引擎
            </p>
            <h1 className="mt-3 font-display text-pretty text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-[#0B0F19] sm:text-4xl lg:text-[2.75rem]">
              把 Reddit 变成你最稳定的欧美客户获取渠道
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              我们帮助出海企业从 Reddit 获取高质量线索——不封号、不 spam、不用自己摸索踩坑。
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Pill>零垃圾内容</Pill>
              <Pill>零机器人</Pill>
              <Pill>安全第一</Pill>
              <Pill>社区优先</Pill>
            </div>

            <div className="mt-5 rounded-2xl border border-[#6366F1]/20 bg-[#6366F1]/5 px-4 py-3 text-sm font-semibold text-[#0B0F19]">
              🎯 创始客户名额 · 仅需 5 席 · 首月 30% 折扣
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#6B7280]">
              效果因市场、产品、执行力而异，我们会在合作前明确预期。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <AuditLink className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl bg-[#0B0F19] px-6 text-center text-base font-semibold text-white shadow-lg transition active:scale-[0.99] hover:shadow-xl sm:min-h-[48px] sm:flex-initial sm:px-8">
                免费获取审计方案
                <span className="ml-2 text-white/80">24 小时内回复</span>
              </AuditLink>
              <a
                href="#playbook"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-center text-base font-semibold text-[#0B0F19] shadow-sm transition active:scale-[0.99] hover:border-gray-300 hover:shadow-md sm:min-h-[48px] sm:flex-initial"
              >
                下载免费运营指南
                <span className="ml-2 text-[#6B7280]">PDF playbook</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                📧 纯邮件沟通服务
              </p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
                无需通话，异步更快
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#6B7280]">
                我们通过邮件异步沟通，无需通话。这样成本更低，且有书面记录便于内部汇报。
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                    响应时间
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#0B0F19]">&lt; 2 小时</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                    审计交付
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#0B0F19]">24 小时</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#6B7280]">
                （如需通话，我们可安排英语策略师对接）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 核心数据/信任信号 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard k="月活用户" v="5 亿+" />
            <StatCard k="垂直社区" v="4000+" />
            <StatCard k="点赞率" v="99.9%" />
            <StatCard k="初见效果" v="3–6 周" />
          </div>
          <div className="mt-8 rounded-3xl border border-amber-200/70 bg-amber-50/70 p-5 ring-1 ring-black/[0.03] sm:p-7">
            <p className="text-sm font-semibold text-[#0B0F19]">⚠️ 为保证服务质量，我们每月仅接待 5–6 个新客户</p>
            <p className="mt-2 text-sm font-semibold text-[#0B0F19]">📍 本月剩余名额：3 席</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. 服务内容 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            What you get
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            我们不只是发帖——我们建立能转化的信任
          </h2>
          <div className="mt-8 grid gap-4">
            {[
              ["🔐", "账号预热与 Karma 积累", "快速建立账号可信度，让内容被看见"],
              ["🎯", "版块研究与精准定位", "找到高意向社区，那里买家已在主动寻求解决方案"],
              ["✍️", "高表现内容撰写", "原生内容引发讨论（不是广告），优化信任度与点赞率"],
              ["💬", "每日互动与评论策略", "把评论转化为关系，最终变成演示请求和销售"],
              ["🚀", "病毒式内容测试", "系统化发现什么内容有效，无需猜测"],
              ["📊", "流量与增长报告", "清楚知道 Reddit 带来什么，下一步如何迭代"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-xl ring-1 ring-black/[0.04]">
                    {icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#0B0F19]">{title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. 为什么是 Reddit */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Why Reddit
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            为什么选择 Reddit？
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Reddit 是最后一个自然流量仍然有效的平台，但也是最难攻克的。
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
              <p className="text-base font-semibold text-[#0B0F19]">🎁 机会</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">高意向社区，仍被低估</p>
              <ul className="mt-5 space-y-3 text-sm text-[#0B0F19]">
                {[
                  "5 亿+ 月活用户",
                  "4000+ 垂直社区",
                  "用户主动搜索解决方案",
                  "CAC 通常低于付费广告",
                  "我们优化安全、可重复的增长循环——不是捷径。",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
              <p className="text-base font-semibold text-[#0B0F19]">⚠️ 难点</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">信任需要积累，错误会累积</p>
              <ul className="mt-5 space-y-3 text-sm text-[#0B0F19]">
                {[
                  "新账号早期容易被移除",
                  "多数版块禁止直接推广",
                  "版主和用户能识别营销",
                  "一次失误可能毁掉账号",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B0F19]" aria-hidden />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm font-semibold text-[#0B0F19]">
            这就是我们的价值所在：人工执行、规则优先定位、稳定迭代循环。
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* 5. 目标客户 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Who we work with
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            我们服务哪些客户？
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            如果你的客户在 Reddit 上，我们就能触达他们。
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "SaaS 工具",
              "AI 产品",
              "交易平台",
              "浏览器插件",
              "独立开发者",
              "跨境电商品牌",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-4 text-sm font-semibold text-[#0B0F19] shadow-sm ring-1 ring-black/[0.03]"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. 案例研究 */}
      <section className="py-12 sm:py-16" id="proof">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Proof
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            案例研究
          </h2>

          <div className="mt-8 rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04] sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-base font-semibold text-[#0B0F19]">AI SaaS 客户案例（创始客户·保密）</p>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-[#6B7280]">
                脱敏展示 · 完整验证可邮件获取
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["256K", "次浏览"],
                ["20K", "点赞（99.9% 点赞率）"],
                ["250", "条评论"],
                ["42,894", "Karma（3 个月账号）"],
              ].map(([v, k]) => (
                <div key={k} className="rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3">
                  <p className="font-display text-2xl font-semibold text-[#0B0F19]">{v}</p>
                  <p className="mt-1 text-sm font-semibold text-[#6B7280]">{k}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="#proof"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-base font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99] sm:min-h-[48px] sm:text-sm"
              >
                方式 1：即时查看（脱敏证据 + 方法论）
              </a>
              <AuditLink className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#0B0F19] px-6 text-base font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99] sm:min-h-[48px] sm:text-sm">
                方式 2：完整验证（邮件获取）
              </AuditLink>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
              我们尊重要求保密的客户，公开分享脱敏数据。完整验证资料可通过邮件获取。
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. 信任构建 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Trust
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            为什么信任这个服务？
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            我们正在建设公开案例库（安全且经客户许可）。以下是目前可展示的：
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "🎁 创始客户优惠",
                body: "前 5 名客户享受 30% 折扣；交换条件：详细案例研究 + 真实评价（仅在您许可的情况下分享）。",
                cta: "了解详情",
              },
              {
                title: "👤 个人 Reddit 账号",
                body: "高 Karma 账号，展示长期原生参与（账号示例可邮件提供）。",
                cta: "查看主页",
              },
              {
                title: "📄 审计报告样例（脱敏）",
                body: "真实交付物格式，敏感信息已移除。",
                cta: "查看样例",
              },
              {
                title: "📚 详细方法论文档",
                body: "逐步流程：研究 → 撰写 → 互动 → 迭代循环。",
                cta: "查看方法论",
              },
              {
                title: "🛡️ 30 天无理由退款保证",
                body: "核心条款公开在本页；完整条款可通过邮件获取。",
                cta: "查看保证条款",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7"
              >
                <p className="text-base font-semibold text-[#0B0F19]">{x.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{x.body}</p>
                <a
                  href="#guarantee"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0F19] underline decoration-gray-300 underline-offset-4 hover:decoration-gray-400"
                >
                  {x.cta} <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 8. 竞品对比 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Why choose us
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            为什么选择我们？
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Reddit 专属执行——零封号风险。我们保持原生、人工、持续。
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200/80 bg-white/90 shadow-sm ring-1 ring-black/[0.03]">
            <div className="overflow-x-auto">
              <table className="min-w-[860px] w-full text-left text-sm">
                <thead className="bg-gray-50/70">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                      对比项
                    </th>
                    {["Reddit 增长引擎", "传统代理", "DIY 自营", "自动工具"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Reddit 专注度", "✅ 100%", "⚠️ 部分", "✅ 100%", "⚠️ 部分"],
                    ["人工执行", "✅", "✅", "✅", "❌"],
                    ["规则检查 + 安全预热", "✅", "⚠️", "❌", "❌"],
                    ["原生内容 + 每日互动", "✅", "⚠️", "⚠️", "❌"],
                    ["3–6 周初见效果", "✅", "⚠️", "❌", "❌"],
                    ["多渠道重心", "❌", "✅", "❌", "❌"],
                    ["模板化推广内容", "❌", "✅", "⚠️", "✅"],
                    ["学习曲线 + 时间成本", "❌", "❌", "✅", "❌"],
                    ["新手失误高风险", "❌", "❌", "✅", "✅"],
                    ["高政策风险", "❌", "⚠️", "⚠️", "✅"],
                    ["推荐指数", "⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐", "⭐"],
                  ].map((row) => (
                    <tr key={row[0]} className="align-top">
                      <td className="px-5 py-4 font-semibold text-[#0B0F19]">{row[0]}</td>
                      {row.slice(1).map((c, i) => (
                        <td key={i} className="px-5 py-4 text-[#0B0F19]">
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 9. 团队介绍 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Behind the engine
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            幕后团队
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Reddit 原生运营者，不是综合营销人员。高客单价决策需要人的信任。
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
              <p className="text-base font-semibold text-[#0B0F19]">🧠 Reddit 增长引擎团队</p>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">策略 + 执行</p>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                我们只专注于 Reddit。我们的优势是流程：规则优先定位、原生内容撰写、持续互动积累信任。
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#0B0F19]">
                {[
                  "人工发帖（零机器人、零自动化 spam）",
                  "每条发帖前规则检查",
                  "扩大发帖量前账号预热",
                  "基于真实评论与移除反馈每周迭代",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
              <p className="text-base font-semibold text-[#0B0F19]">👔 专属策略师</p>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">你的对接人</p>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                你会有一位固定的运营人员，学习你的产品和市场，然后把 Reddit 反馈转化为定位和增长决策。
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#0B0F19]">
                {[
                  "版块映射 + 人设策略",
                  "针对你细分领域的内容形式",
                  "清晰的报告和下一步行动",
                  "与团队的快速反馈循环",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B0F19]" aria-hidden />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-[#6B7280]">
            公开页面我们保持高级别概述。邮件中我们会分享确切工作流、案例示例，以及针对你市场的具体方案。
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* 10. ROI 计算器 */}
      <section className="py-12 sm:py-16" id="roi">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <ROICalculatorCN />
        </div>
      </section>

      {/* 11. 定价方案 */}
      <section className="py-12 sm:py-16" id="plans">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Plans
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            选择方案
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            我们会安全、持续地执行，打造真实增长循环。
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-[#0B0F19]">
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1">✅ 30 天退款保证</span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1">✅ 月付无绑定</span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1">✅ 社区优先</span>
          </div>

          <div className="mt-6 rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
            <p className="text-sm font-semibold text-[#0B0F19]">雇佣全职 Reddit 运营：$6,000–8,000/月 + 福利</p>
            <p className="mt-2 text-sm font-semibold text-[#0B0F19]">我们的团队：$899/月起 → 节省 85%+</p>
            <p className="mt-3 text-sm font-semibold text-[#0B0F19]">
              ⚠️ 为保证服务质量，每月仅接待 5–6 个新客户 · 本月剩余 3 席
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200/80 bg-gray-50/70 p-5 ring-1 ring-black/[0.03] sm:p-7">
            <p className="text-sm font-semibold text-[#0B0F19]">🛡️ 我们的保证——一目了然</p>
            <div className="mt-4 grid gap-2 text-sm text-[#0B0F19]">
              <p>✓ 30 天退款：前 30 天内全额退款</p>
              <p>✓ 首帖保证：不满意可修改或退款</p>
              <p>✓ 零封号保护：我们承担恢复 + 赠送 1 个月服务</p>
            </div>
            <p className="mt-3 text-xs text-[#6B7280]">完整条款见下方 · 问题请邮件咨询</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "STARTER",
                price: "$899/月",
                badge: "",
                lines: ["早期项目 · 建立存在感", "2 个账号", "3–4 帖/周", "月度报告"],
              },
              {
                name: "GROWTH",
                price: "$1,499/月",
                badge: "⭐ 最受欢迎",
                lines: ["成长型 SaaS · 稳定流量 + 线索", "4 个账号", "6–8 帖/周", "月度策略报告"],
              },
              {
                name: "PRO",
                price: "$2,499/月",
                badge: "",
                lines: ["融资后扩张 · 规模化获客", "5–8 个账号", "每日发帖", "周度报告"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border bg-white p-5 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04] sm:p-7 ${
                  p.badge ? "border-[#6366F1]/40 ring-2 ring-[#6366F1]/15" : "border-gray-200/80"
                }`}
              >
                {p.badge ? (
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-3 py-1 text-xs font-semibold text-white shadow-lg ring-1 ring-white/40">
                    {p.badge}
                  </span>
                ) : null}
                <div className={p.badge ? "pt-8" : ""}>
                  <p className="text-sm font-semibold tracking-wide text-[#0B0F19]">{p.name}</p>
                  <p className="mt-2 font-display text-4xl font-semibold tracking-tight text-[#0B0F19]">
                    {p.price}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-[#0B0F19]">
                    {p.lines.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden />
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <AuditLink className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                    邮件咨询
                  </AuditLink>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
              <p className="text-sm font-semibold text-[#0B0F19]">可选增值服务（Add-ons）</p>
              <ul className="mt-4 space-y-2 text-sm text-[#0B0F19]">
                {[
                  "额外 Reddit 账号：$150/月",
                  "额外每周发帖：$120/月",
                  "Reddit 广告管理：$500/月",
                  "落地页审计：$300（一次性）",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B0F19]" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
              <p className="text-sm font-semibold text-[#0B0F19]">企业定制</p>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                A 轮+ 初创公司、多产品、合规需求或高量内容引擎——我们将定制方案。
              </p>
              <AuditLink className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]">
                联系我们
              </AuditLink>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 12. 保证条款 */}
      <section className="py-12 sm:py-16" id="guarantee">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Guarantee
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            我们的保证
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            风险逆转，内置其中。你购买的是敏感平台的执行服务。我们承担风险，条款清晰。
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "🛡️ 30 天退款保证",
                lines: ["前 30 天内随时取消", "全额退款，无需理由", "不包含广告支出和第三方成本"],
              },
              {
                title: "✍️ 首帖保证",
                lines: ["第一条帖子后不满意？我们修改或退款", "7 天内提供具体反馈", "期望清晰，邮件书面确认"],
              },
              {
                title: "🔐 零封号保护",
                lines: ["如账号因我们操作被封，我们承担恢复", "+ 赠送 1 个月免费服务延长", "不包含违反约定策略的情况"],
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7"
              >
                <p className="text-base font-semibold text-[#0B0F19]">{c.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#0B0F19]">
                  {c.lines.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200/80 bg-gray-50/70 p-5 ring-1 ring-black/[0.03] sm:p-7">
            <p className="text-sm font-semibold text-[#0B0F19]">为什么这样设计</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
              保证只有具体才有意义。我们保持简短可操作——让你清楚知道不满意时会发生什么。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <AuditLink className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                邮件咨询保证详情
              </AuditLink>
              <a
                href="#playbook"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
              >
                下载免费运营指南
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 13. 服务流程 */}
      <section className="py-12 sm:py-16" id="process">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Process
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            服务流程
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            简单循环：研究 → 发布 → 学习 → 规模化
          </p>

          <div className="mt-8 rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7">
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "第 1 周",
                  items: ["研究与设置", "版块映射", "账号策略", "竞品分析"],
                },
                {
                  title: "第 2–4 周",
                  items: ["发布与学习", "开始发帖", "每日互动", "早期流量结果"],
                },
                {
                  title: "第 2 个月+",
                  items: ["规模化", "病毒内容测试", "转化优化", "可预测增长引擎"],
                },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
                  <p className="text-sm font-semibold text-[#0B0F19]">{x.title}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#0B0F19]">
                    {x.items.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#6B7280]">
              可持续增长胜过短期捷径。Reddit 奖励信任。通常 3–6 周初见效果。
            </p>
            <a
              href="#playbook"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0F19] underline decoration-gray-300 underline-offset-4 hover:decoration-gray-400"
            >
              下载免费运营指南 <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 14. FAQ */}
      <section className="py-12 sm:py-16" id="faq">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
            常见问题
          </h2>

          <div className="mt-8 grid gap-3">
            {FAQS.map((x) => (
              <details
                key={x.q}
                className="group rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] open:shadow-[0_18px_55px_-28px_rgba(15,23,42,0.25)] sm:p-7"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-base font-semibold text-[#0B0F19]">{x.q}</p>
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0B0F19]">
                      <span className="block text-lg leading-none group-open:hidden" aria-hidden>
                        +
                      </span>
                      <span className="hidden text-lg leading-none group-open:block" aria-hidden>
                        –
                      </span>
                    </span>
                  </div>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook / exec kit */}
      <section className="py-12 sm:py-16" id="playbook">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <PlaybookLeadMagnet
            copy={{
              eyebrow: "免费 PDF",
              title: "下载 Reddit 运营指南（Playbook）",
              subtitle:
                "一份可转发给团队的执行手册：定位框架、内容结构、互动策略、常见风险与避坑清单。",
              privacyNote: "无 spam。只发 1 份 PDF。如果不需要，忽略即可。",
              nextSteps: [
                "提交邮箱后会打开一封邮件草稿（用于我们人工发送 PDF）",
                "我们会把 PDF 发到你的邮箱；没收到可回复邮件让我们重发",
              ],
              cta: "把 PDF 发给我",
              successTitle: "已收到请求",
              successSubtitle: "我们会尽快把 PDF 发给你（如果你的浏览器拦截了邮件打开，也没关系）。",
            }}
            id="playbook"
            mailtoSubject="中文 Playbook 请求 — Reddit 出海增长引擎"
            mailtoIntroLine="New CN Playbook request"
            source="cn-landing"
          />

          <div id="exec-kit" className="mt-6 rounded-3xl border border-gray-200/80 bg-gray-50/70 p-5 ring-1 ring-black/[0.03] sm:p-7">
            <p className="text-sm font-semibold text-[#0B0F19]">获取高管工具包（Executive kit）</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
              需要向 CEO/CFO 内部汇报？我们可提供一份简洁 PDF：ROI 框架、风险说明、预算对比与可执行时间线。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <AuditLink className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                邮件获取工具包
              </AuditLink>
              <a
                href="#roi"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
              >
                先用 ROI 计算器估算
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 15. 底部 CTA */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] sm:p-10">
            <Glow />
            <div className="pointer-events-none absolute inset-0 grain opacity-[0.35]" aria-hidden />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                最后一页
              </p>
              <h2 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
                想安全地把 Reddit 跑成可预测的增长引擎？
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
                纯邮件异步对接，24 小时交付审计。我们会在合作前明确预期与风险边界。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <AuditLink className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#0B0F19] px-6 text-base font-semibold text-white shadow-lg transition hover:shadow-xl active:scale-[0.99] sm:min-h-[48px] sm:text-sm">
                  免费获取审计方案
                </AuditLink>
                <a
                  href="#playbook"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-base font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99] sm:min-h-[48px] sm:text-sm"
                >
                  下载免费运营指南
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[#6B7280]">
                提示：我们每月仅接待 5–6 个新客户，以保证执行质量与安全性。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

