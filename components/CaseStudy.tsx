import Image from "next/image";
import StrategyCallLink from "@/components/StrategyCallLink";
import { CONTACT_EMAIL } from "@/lib/constants";

const shots = [
  {
    src: "/screenshots/redditsaas_01.jpg",
    width: 785,
    height: 509,
    alt: "Reddit SaaS case study — account trust metrics (karma, age, contributions)",
    caption: "Trust foundation: 42,894 karma · 3 months age · 542 contributions",
  },
  {
    src: "/screenshots/redditsaas_02.jpg",
    width: 772,
    height: 704,
    alt: "Reddit SaaS case study — views and engagement metrics",
    caption: "Performance: 256K views · 20K upvotes · 99.9% ratio · 250 comments",
  },
] as const;

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="scroll-mt-24 border-t border-gray-100 bg-[radial-gradient(ellipse_90%_45%_at_50%_-15%,rgba(99,102,241,0.07),transparent)] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
              Proof
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
              Case Study: AI SaaS
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#6B7280]">
              Metrics pulled directly from the screenshots — trust signals and
              performance from consistent, community-first execution.
            </p>

            <details className="mt-6 rounded-2xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none text-sm font-semibold text-[#0B0F19]">
                Full breakdown (strategy + execution)
                <span className="ml-2 text-[#6366F1]">+</span>
              </summary>
              <div className="mt-4 space-y-5 text-sm leading-relaxed text-[#6B7280]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                    Background
                  </p>
                  <p className="mt-2">
                    Seed-stage AI SaaS team looking for a predictable top-of-funnel channel without
                    risking bans or brand damage.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                    Strategy
                  </p>
                  <ul className="mt-2 space-y-2">
                    {[
                      "Persona-led accounts + warm-up before scaling posting volume",
                      "Targeted subreddits where buyers already ask for solutions",
                      "Value-first content with soft CTAs (native tone, rule-first)",
                    ].map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                    Execution
                  </p>
                  <ul className="mt-2 space-y-2">
                    {[
                      "Week 1–2: daily engagement to establish trust signals",
                      "Week 3–4: non-promotional posts to test formats",
                      "Week 5+: double down on winners and improve conversion tracking",
                    ].map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                    What made it work
                  </p>
                  <p className="mt-2">
                    Patience on warm-up, strict rule checks, and iterating based on real comments —
                    not assumptions.
                  </p>
                  <p className="mt-2 text-xs">
                    Individual results vary. This is one case study.
                  </p>
                </div>
              </div>
            </details>
            <ul className="mt-8 space-y-4 text-base text-[#6B7280]">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6366F1]" />
                256K views
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6366F1]" />
                20K upvotes (99.9% upvote ratio)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6366F1]" />
                250 comments
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6366F1]" />
                42,894 karma (3 months account age)
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                Verify this case study
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                We don’t publish raw links publicly by default (client privacy + subreddit policy
                sensitivity). On the audit call, we can share a verification pack that includes:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#0B0F19]">
                {[
                  "Direct links to the original Reddit posts",
                  "Screenshot-to-link mapping for every metric shown",
                  "The posting + engagement timeline we followed",
                  "A redacted version if the client needs confidentiality",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    "Verification pack request — Reddit Growth Engine"
                  )}`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50/70 px-4 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
                >
                  Request verification pack
                </a>
                <StrategyCallLink className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-[#0B0F19] px-4 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                  Book the audit call
                </StrategyCallLink>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2 lg:gap-8">
            {shots.map((shot, i) => (
              <figure key={shot.src} className="group relative">
                <div className="relative overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_22px_50px_-14px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.04] transition duration-300 hover:border-[#6366F1]/25 hover:shadow-[0_28px_60px_-16px_rgba(99,102,241,0.22)]">
                  <div
                    className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#6366F1]/35 to-transparent opacity-80"
                    aria-hidden
                  />
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 1024px) 92vw, 524px"
                    className="h-auto w-full"
                    priority={i === 0}
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-snug text-[#6B7280] sm:text-base">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
