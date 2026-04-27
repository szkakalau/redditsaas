import Link from "next/link";
import StrategyCallLink from "@/components/StrategyCallLink";
import CaseStudy from "@/components/CaseStudy";
import PlaybookLeadMagnet from "@/components/PlaybookLeadMagnet";
import ROICalculator from "@/components/ROICalculator";
import TrustProcess from "@/components/TrustProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import BehindTheEngine from "@/components/BehindTheEngine";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  ADDONS,
  DELIVERABLES,
  EXEC_KIT,
  FAQS,
  IDEAL_FIT,
  PLAYBOOK,
  PLANS,
  PRICING_NOTES,
  PROCESS,
  TEAM,
  TRUST_PROCESS,
  WHY_US,
} from "@/ab-tests/reddit-growth-management-v1/copy";

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

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-24 -top-24 h-[22rem] w-[22rem] rounded-full bg-[#6366F1]/15 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 h-[26rem] w-[26rem] rounded-full bg-[#0B0F19]/10 blur-3xl" />
      <div className="absolute left-1/2 top-[-10rem] h-[22rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#A5B4FC]/18 blur-3xl" />
    </div>
  );
}

function Arrow() {
  return (
    <span className="text-[#6B7280]" aria-hidden>
      →
    </span>
  );
}

function PlanCard({ p }: { p: (typeof PLANS)[number] }) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border bg-white p-5 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:shadow-[0_26px_70px_-26px_rgba(99,102,241,0.28)] sm:p-6 ${
        p.featured
          ? "border-[#6366F1]/40 ring-2 ring-[#6366F1]/20"
          : "border-gray-200/70"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#6366F1]/10 blur-3xl" aria-hidden />

      {p.badge ? (
        <span className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] px-3 py-1 text-xs font-semibold text-white shadow-lg ring-1 ring-white/40">
          {p.badge}
        </span>
      ) : null}

      <div className="flex flex-1 flex-col">
        <div className={`flex items-end justify-between gap-4 ${p.badge ? "pt-8" : ""}`}>
          <p className="text-sm font-semibold tracking-wide text-[#0B0F19]">{p.name}</p>
          <p className="text-sm font-semibold text-[#6B7280]">{p.cadence}</p>
        </div>
        <p className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-4xl font-semibold tracking-tight text-[#0B0F19]">
            {p.price}
          </span>
        </p>
        <p className="mt-3 text-base font-semibold text-[#0B0F19]">{p.tagline}</p>
        <p className="mt-2 text-base leading-relaxed text-[#6B7280]">
          <span className="font-semibold text-[#0B0F19]">Goal:</span> {p.goal}
        </p>
        {"fit" in p ? (
          <p className="mt-2 text-sm font-semibold text-[#0B0F19]">{p.fit}</p>
        ) : null}

        {/* Mobile: collapse the heavy details */}
        <div className="mt-5 space-y-4 md:hidden">
          {p.sections.slice(0, 2).map((s) => (
            <div key={s.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                {s.title}
              </p>
              {s.bullets.length ? (
                <ul className="mt-2 space-y-2">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-base text-[#6B7280]">Included.</p>
              )}
            </div>
          ))}
          <details className="rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3">
            <summary className="cursor-pointer list-none text-sm font-semibold text-[#0B0F19]">
              See everything included
              <span className="ml-2 text-[#6366F1]">+</span>
            </summary>
            <div className="mt-3 space-y-4">
              {p.sections.map((s) => (
                <div key={s.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                    {s.title}
                  </p>
                  {s.bullets.length ? (
                    <ul className="mt-2 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-base text-[#6B7280]">Included.</p>
                  )}
                </div>
              ))}
            </div>
          </details>
        </div>

        {/* Desktop: show full detail */}
        <div className="mt-5 hidden space-y-4 md:block">
          {p.sections.map((s) => (
            <div key={s.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                {s.title}
              </p>
              {s.bullets.length ? (
                <ul className="mt-2 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-base text-[#6B7280]">Included.</p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-[#0B0F19]">{p.outcome}</p>

        <StrategyCallLink className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#0B0F19] px-4 text-base font-semibold text-white shadow-md transition active:scale-[0.99] hover:shadow-lg sm:min-h-[48px] sm:text-sm">
          Email us
        </StrategyCallLink>
      </div>
    </div>
  );
}

export default function ABRedditGrowthManagement() {
  return (
    <main className="pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-[#0B0F19]"
          >
            Reddit Growth Engine
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#pricing"
              className="text-sm font-medium text-[#6B7280] transition hover:text-[#0B0F19]"
            >
              Plans
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-[#6B7280] transition hover:text-[#0B0F19]"
            >
              Process
            </a>
            <StrategyCallLink className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0B0F19] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition active:scale-[0.98] hover:shadow-lg">
              Email us
            </StrategyCallLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
        <Glow />
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.35]" aria-hidden />
        <div className="mx-auto grid max-w-content items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
              Reddit Growth Management
            </p>
            <h1 className="mt-3 font-display text-pretty text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-[#0B0F19] sm:text-4xl lg:text-[2.75rem]">
              Turn Reddit into your #1 predictable acquisition channel
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              We help B2B startups generate qualified leads from Reddit — without getting banned,
              without spam, and without wasting months learning the hard way.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#0B0F19]">
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1">
                No spam
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1">
                No bots
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1">
                Safety-first
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1">
                Community-first
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1">
                Founding client program · 5 spots at 30% off
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[#6B7280]">
              Results depend on your market, offer, and execution. We’ll set expectations up front.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <StrategyCallLink className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl bg-[#0B0F19] px-6 text-center text-base font-semibold text-white shadow-lg transition active:scale-[0.99] hover:shadow-xl sm:min-h-[48px] sm:flex-initial sm:px-8">
                Request a free async audit (email)
              </StrategyCallLink>
              <a
                href="#playbook"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-center text-base font-semibold text-[#0B0F19] shadow-sm transition active:scale-[0.99] hover:border-gray-300 hover:shadow-md sm:min-h-[48px] sm:flex-initial"
              >
                Download free playbook
              </a>
              <a
                href="#case-study"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-center text-base font-semibold text-[#0B0F19] shadow-sm transition active:scale-[0.99] hover:border-gray-300 hover:shadow-md sm:min-h-[48px] sm:flex-initial"
              >
                Case Study
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[#0B0F19]">📧 Email-Only Service</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded-full border border-gray-200 bg-gray-50/70 px-3 py-1 text-[#0B0F19]">
                    Typical response time: &lt;2 hours
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50/70 px-3 py-1 text-[#0B0F19]">
                    Audit delivery: 24 hours
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                We work asynchronously over email — no calls needed. This keeps costs lower and gives
                you written records for internal sharing.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Prefer a call? We can arrange one with an English-speaking strategist.
              </p>
            </div>

            <p className="mt-4 text-sm font-semibold text-[#0B0F19]">
              We onboard 5–6 new clients/month to maintain quality.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-6">
              <p className="font-display text-lg font-semibold text-[#0B0F19]">
                What you get
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                We don’t just post — we build trust that converts.
              </p>
              <div className="mt-5 space-y-3">
                {DELIVERABLES.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
                    <p className="flex items-start justify-between gap-3 text-base font-semibold text-[#0B0F19]">
                      <span className="leading-snug">{d.title}</span>
                      <Check />
                    </p>
                    <p className="mt-2 flex gap-2 text-sm leading-relaxed text-[#6B7280]">
                      <Arrow />
                      <span>{d.value}</span>
                    </p>
                    {"proof" in d ? (
                      <p className="mt-2 text-xs font-semibold text-[#0B0F19]">{d.proof}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Reddit */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
              Why Reddit?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Reddit is one of the last platforms where organic reach still works. But it’s also
              the hardest platform to crack.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                Opportunity
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-[#0B0F19]">
                High intent communities, still underpriced
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "500M+ monthly users",
                  "4,000+ active communities across niches",
                  "Users search for solutions (not entertainment)",
                  "Often lower CAC than paid social",
                ].map((b) => (
                  <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                Why it’s hard
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-[#0B0F19]">
                Trust is earned — and mistakes compound
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "New accounts often get removed early",
                  "Many subreddits ban direct promotion",
                  "Mods and users spot marketing instantly",
                  "A single misstep can burn an account’s credibility",
                ].map((b) => (
                  <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B0F19]" />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-[#6B7280]">
                We optimize for safe, repeatable loops — not hacks.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {[
              "Accounts get banned easily",
              "Communities hate marketers",
              "Promotion can backfire fast",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6"
              >
                <p className="text-base font-semibold text-[#0B0F19]">{t}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-display text-lg font-semibold text-[#0B0F19] sm:mt-12 sm:text-xl">
            That’s where we come in. Human-led execution, rule-first targeting, and a steady
            iteration loop.
          </p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
                Who we work with
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
                If your customers hang out on Reddit, we can reach them.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280] sm:text-base">
                Perfect for:
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md sm:p-6">
              <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                {IDEAL_FIT.map((x) => (
                  <li
                    key={x}
                    className="rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3 text-base font-semibold text-[#0B0F19]"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="pb-14 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <PlaybookLeadMagnet copy={PLAYBOOK} />
        </div>
      </section>

      {/* Executive kit */}
      <section className="pb-14 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          {/* Mobile: keep the page short (collapse the second form) */}
          <details className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] backdrop-blur-sm md:hidden sm:p-7">
            <summary className="cursor-pointer list-none">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                    {EXEC_KIT.eyebrow}
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold tracking-tight text-[#0B0F19]">
                    {EXEC_KIT.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    Need internal approval? Tap to get the kit.
                  </p>
                </div>
                <span className="mt-1 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs font-semibold text-[#0B0F19]">
                  Open
                </span>
              </div>
            </summary>
            <div className="mt-5">
              <PlaybookLeadMagnet
                id="exec-kit"
                copy={EXEC_KIT}
                source="exec-briefing-kit"
                mailtoSubject="Executive Briefing Kit request — Reddit Growth Engine"
                mailtoIntroLine="New Executive Briefing Kit request"
              />
            </div>
          </details>

          {/* Desktop/tablet: show full section */}
          <div className="hidden md:block">
            <PlaybookLeadMagnet
              id="exec-kit"
              copy={EXEC_KIT}
              source="exec-briefing-kit"
              mailtoSubject="Executive Briefing Kit request — Reddit Growth Engine"
              mailtoIntroLine="New Executive Briefing Kit request"
            />
          </div>
        </div>
      </section>

      {/* Screenshot examples (reuse original homepage section) */}
      <CaseStudy />

      {/* Trust (process-first) */}
      <TrustProcess data={TRUST_PROCESS} />

      {/* Why choose us */}
      <WhyChooseUs data={WHY_US} />

      {/* Team */}
      <BehindTheEngine people={TEAM} />

      {/* ROI calculator */}
      <section className="pb-14 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <ROICalculator />
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="scroll-mt-24 border-t border-gray-100 bg-[radial-gradient(ellipse_90%_45%_at_50%_-15%,rgba(99,102,241,0.07),transparent)] py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
              Plans
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Pick a plan. We’ll run it safely, consistently, and with a real growth loop.
            </p>
            <p className="mt-5 text-sm font-semibold text-[#0B0F19]">
              30-day money-back guarantee* · Month-to-month · Community-first
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
              *Ask us over email for details.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-[#0B0F19] sm:text-base">
              {PRICING_NOTES.anchor}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-[#0B0F19]">
              We onboard 5–6 new clients/month to maintain quality.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-md ring-1 ring-black/[0.03] sm:p-6">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/45 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#6366F1]/10 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#0B0F19]/8 blur-3xl"
                aria-hidden
              />

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                    🛡️ Our Guarantee — At a Glance
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    Full terms below · Questions?{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                        "Guarantee questions — Reddit Growth Engine"
                      )}`}
                      className="font-semibold text-[#0B0F19] underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-400"
                    >
                      Email us
                    </a>
                    .
                  </p>
                </div>

                <div className="grid gap-3 sm:max-w-[34rem] sm:flex-1 sm:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                    <p className="text-sm font-semibold text-[#0B0F19]">
                      ✓ 30-day money-back
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                      Full refund in the first 30 days.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                    <p className="text-sm font-semibold text-[#0B0F19]">
                      ✓ First post guarantee
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                      Revise or refund if unhappy.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                    <p className="text-sm font-semibold text-[#0B0F19]">
                      ✓ Zero-ban protection
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                      We cover recovery + 1 month free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <PlanCard key={p.key} p={p} />
            ))}
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-md sm:mt-12 sm:p-6">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/45 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#6366F1]/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#0B0F19]/8 blur-3xl"
              aria-hidden
            />

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  Our guarantee
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-[#0B0F19]">
                  Risk-reversal, built in
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                  You’re buying execution on a sensitive platform. We keep the risk on us — and we
                  keep the terms clear.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <StrategyCallLink className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#0B0F19] px-6 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                    Email us
                  </StrategyCallLink>
                  <a
                    href="#playbook"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50/70 px-6 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.99]"
                  >
                    Get the playbook
                  </a>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#6B7280]">
                  Full terms available over email (~5 min read).
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                    <p className="text-sm font-semibold text-[#0B0F19]">30-day money-back</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-[#6B7280]">
                      <li>• Cancel anytime in the first 30 days</li>
                      <li>• Full refund, no questions asked</li>
                      <li>• Excludes ad spend and third-party costs</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                    <p className="text-sm font-semibold text-[#0B0F19]">First post guarantee</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-[#6B7280]">
                      <li>• Unhappy after the first post? We’ll revise or refund</li>
                      <li>• Share specific feedback within 7 days</li>
                      <li>• Clear expectations, written in email</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 sm:col-span-2 lg:col-span-1">
                    <p className="text-sm font-semibold text-[#0B0F19]">Zero-ban protection</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-[#6B7280]">
                      <li>• If an account is banned due to our ops, we cover recovery</li>
                      <li>• + 1 month free service extension</li>
                      <li>• Excludes violations of the agreed strategy</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm ring-1 ring-black/[0.03]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                    Why this exists
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    Guarantees are only meaningful when they’re specific. We keep them short and
                    operational — so you know exactly what happens if you’re unhappy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expectations: visible on desktop, collapsible on mobile */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-md sm:mt-12 sm:p-6">
            <details className="md:hidden">
              <summary className="cursor-pointer list-none">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                      Expectations
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold text-[#0B0F19]">
                      Sustainable growth beats short-term hacks
                    </p>
                  </div>
                  <span className="mt-1 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs font-semibold text-[#0B0F19]">
                    Open
                  </span>
                </div>
              </summary>
              <div className="mt-4">
                <p className="text-base leading-relaxed text-[#6B7280]">{PRICING_NOTES.expectation}</p>
                <a
                  href="#playbook"
                  className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-gray-200 bg-gray-50/70 px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.99]"
                >
                  Get the playbook
                </a>
              </div>
            </details>

            <div className="hidden md:flex md:flex-col md:gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  Expectations
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-[#0B0F19]">
                  Sustainable growth beats short-term hacks
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#6B7280]">
                  {PRICING_NOTES.expectation}
                </p>
              </div>
              <a
                href="#playbook"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50/70 px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.99]"
              >
                Get the playbook
              </a>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-5 shadow-md sm:mt-14 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  Optional add-ons
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-[#0B0F19]">
                  Upsells you can add anytime
                </p>
              </div>
              <p className="text-sm text-[#6B7280]">Transparent, modular pricing.</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ADDONS.map((a) => (
                <div
                  key={a.name}
                  className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4"
                >
                  <p className="text-base font-semibold text-[#0B0F19]">{a.name}</p>
                  <p className="mt-1 text-sm font-semibold text-[#6366F1]">{a.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-md sm:mt-12 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  Enterprise
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-[#0B0F19]">
                  Custom plans for bigger teams
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#6B7280]">
                  Series A+ startups, multiple products, compliance needs, or a high-volume content
                  engine — we’ll scope a custom plan.
                </p>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Enterprise — Reddit Growth Engine"
                )}`}
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#0B0F19] px-6 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
              Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              A simple loop: research, ship, learn, and scale.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-6">
            {PROCESS.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6"
              >
                <p className="font-display text-lg font-semibold text-[#0B0F19]">
                  {step.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
              FAQ
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6"
              >
                <p className="text-base font-semibold text-[#0B0F19]">{f.q}</p>
                <p className="mt-2 text-base leading-relaxed text-[#6B7280]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta-gradient relative overflow-hidden py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.07]" aria-hidden />
        <div className="relative mx-auto max-w-content px-5 text-center sm:px-6">
          <h2 className="font-display text-pretty text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Ready to turn Reddit into a growth engine?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-indigo-100/95 sm:text-lg">
            Email us. We’ll map subreddits, risks, and a safe execution plan — async.
          </p>
          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:mt-10 sm:grid-cols-2">
            <StrategyCallLink className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-8 text-base font-semibold text-[#312e81] shadow-lg transition active:scale-[0.99] hover:bg-indigo-50 hover:shadow-xl sm:min-h-[48px] sm:text-sm">
              Email us
            </StrategyCallLink>
            <a
              href="#playbook"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 text-base font-semibold text-white shadow-lg transition hover:bg-white/15 active:scale-[0.99] sm:min-h-[48px] sm:text-sm"
            >
              Download free playbook
            </a>
          </div>
        </div>
      </section>

      {/* Mobile bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="border-t border-gray-200/90 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_-8px_rgba(15,23,42,0.15)] backdrop-blur-md">
          <StrategyCallLink className="flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-[#0B0F19] text-center text-base font-semibold text-white shadow-md transition active:scale-[0.99]">
            Email us for a free audit
          </StrategyCallLink>
        </div>
      </div>
    </main>
  );
}

