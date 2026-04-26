import Link from "next/link";

export default function MethodologyPage() {
  return (
    <main className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Methodology
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0B0F19] sm:text-4xl">
            The Reddit growth loop (safety-first)
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            This is the execution system we run. It’s designed to stay native to each community,
            reduce removal risk, and compound trust over time.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Step 1 — Rule-first targeting",
                body: "We map communities by intent and rules. If a subreddit doesn’t allow promotion, we don’t force it — we design a discussion-first angle that fits.",
                bullets: [
                  "Subreddit clusters by buyer stage",
                  "Rule constraints & mod patterns",
                  "Risk flags and safety controls",
                ],
              },
              {
                title: "Step 2 — Native writing (not marketing)",
                body: "Posts are written to match the tone and format that communities reward. We bias toward useful threads that invite replies, not clickbait.",
                bullets: [
                  "Discussion hooks + honest framing",
                  "Objection-aware wording",
                  "Soft-CTA placement strategy",
                ],
              },
              {
                title: "Step 3 — Daily engagement",
                body: "Most of Reddit is won in the comments. We build presence by replying, contributing, and carrying threads forward — consistently.",
                bullets: [
                  "Reply management on your posts",
                  "Proactive commenting in target threads",
                  "Community-first participation",
                ],
              },
              {
                title: "Step 4 — Iterate based on reality",
                body: "We learn from actual removals, comment sentiment, and what triggers high-quality replies — then iterate weekly.",
                bullets: [
                  "Format testing (what gets replies)",
                  "Angle testing (what gets qualified clicks)",
                  "Weekly refinement loop",
                ],
              },
            ].map((s) => (
              <section
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h2 className="font-display text-xl font-semibold text-[#0B0F19]">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{s.body}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                      <span className="leading-snug text-[#6B7280]">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ab/reddit-growth-management"
              className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]"
            >
              Back to the page
            </Link>
            <Link
              href="/ab/reddit-growth-management/resources/sample-audit"
              className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50/70 px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
            >
              View sample audit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

