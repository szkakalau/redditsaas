import Link from "next/link";

export default function SampleAuditPage() {
  return (
    <main className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            Sample (redacted)
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0B0F19] sm:text-4xl">
            Sample async audit report
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            This is a redacted example of what we send over email. It shows the format and depth,
            without exposing client identifiers, subreddit names, or sensitive links.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "1) Fast diagnosis (what’s happening now)",
                bullets: [
                  "Current positioning + common mismatch to subreddit expectations",
                  "Top 3 friction points that prevent replies/clicks",
                  "Safety check: rule sensitivity & risk flags",
                ],
              },
              {
                title: "2) Target map (where to win)",
                bullets: [
                  "Shortlist of communities by intent level",
                  "Posting angles that match native discussion patterns",
                  "Do/Don’t list for each cluster (removal risk controls)",
                ],
              },
              {
                title: "3) Content plan (first 7–10 days)",
                bullets: [
                  "Post formats + outlines (discussion-first)",
                  "Comment strategy & daily engagement loop",
                  "Iteration plan: what we measure and how we adapt",
                ],
              },
              {
                title: "4) Conversion layer (how clicks become leads)",
                bullets: [
                  "CTA and landing suggestions (low-friction)",
                  "When to introduce links and how to avoid pushback",
                  "Basic tracking notes (so you can attribute outcomes)",
                ],
              },
            ].map((s) => (
              <section
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h2 className="font-display text-xl font-semibold text-[#0B0F19]">{s.title}</h2>
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
              href="/ab/reddit-growth-management/resources/methodology"
              className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50/70 px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
            >
              View methodology
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

