import Link from "next/link";
import StrategyCallLink from "@/components/StrategyCallLink";

type TrustProcessData = {
  eyebrow: string;
  title: string;
  honesty: string;
  items: readonly {
    title: string;
    description: string;
    links?: readonly { label: string; href: string }[];
    cta?: { label: string; href: string };
  }[];
  founderOffer: string;
};

function CheckMark() {
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

export default function TrustProcess({ data }: { data: TrustProcessData }) {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-7">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                {data.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
                {data.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280]">{data.honesty}</p>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#0B0F19]">Founder offer</p>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{data.founderOffer}</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <StrategyCallLink className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                    Email us
                  </StrategyCallLink>
                  <Link
                    href="#pricing"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50/70 px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
                  >
                    See guarantee
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="pointer-events-none -mx-7 -mt-7 mb-5 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent"
                aria-hidden
              />
              <div className="space-y-3">
                {data.items.map((it) => (
                  <div
                    key={it.title}
                    className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="flex gap-3 text-base font-semibold text-[#0B0F19]">
                        <CheckMark />
                        <span className="leading-snug">{it.title}</span>
                      </p>
                      {it.cta ? (
                        it.cta.href.startsWith("#") ? (
                          <Link
                            href={it.cta.href}
                            className="shrink-0 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-[#0B0F19] transition hover:border-gray-300"
                          >
                            {it.cta.label}
                          </Link>
                        ) : (
                          <Link
                            href={it.cta.href}
                            className="shrink-0 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-[#0B0F19] transition hover:border-gray-300"
                          >
                            {it.cta.label}
                          </Link>
                        )
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{it.description}</p>
                    {it.links?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {it.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-[#0B0F19] transition hover:border-gray-300"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

