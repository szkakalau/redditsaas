"use client";

type WhyUs = {
  eyebrow: string;
  title: string;
  subtitle: string;
  columns: readonly {
    name: string;
    points: readonly string[];
    accent: "rge" | "agency" | "diy" | "auto";
  }[];
};

const accentStyles: Record<
  WhyUs["columns"][number]["accent"],
  { pill: string; glow: string; dot: string }
> = {
  rge: {
    pill: "bg-[#0B0F19] text-white ring-1 ring-white/20",
    glow: "bg-[#6366F1]/12",
    dot: "bg-[#6366F1]",
  },
  agency: {
    pill: "bg-white text-[#0B0F19] ring-1 ring-gray-200",
    glow: "bg-[#0B0F19]/6",
    dot: "bg-[#0B0F19]",
  },
  diy: {
    pill: "bg-white text-[#0B0F19] ring-1 ring-gray-200",
    glow: "bg-amber-500/10",
    dot: "bg-amber-500",
  },
  auto: {
    pill: "bg-white text-[#0B0F19] ring-1 ring-gray-200",
    glow: "bg-rose-500/10",
    dot: "bg-rose-500",
  },
};

export default function WhyChooseUs({ data }: { data: WhyUs }) {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {data.columns.map((c) => {
            const s = accentStyles[c.accent];
            const featured = c.accent === "rge";
            return (
              <div
                key={c.name}
                className={`group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-[0_18px_55px_-30px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.03] transition hover:-translate-y-0.5 hover:shadow-[0_28px_75px_-38px_rgba(99,102,241,0.28)] sm:p-6 ${
                  featured ? "border-[#6366F1]/35" : "border-gray-200/80"
                }`}
              >
                <div className={`pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full blur-3xl ${s.glow}`} />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent"
                  aria-hidden
                />

                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-lg font-semibold text-[#0B0F19]">{c.name}</p>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${s.pill}`}>
                    {featured ? "Recommended" : "Alternative"}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 text-base text-[#0B0F19]">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`}
                        aria-hidden
                      />
                      <span className="leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

