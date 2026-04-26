"use client";

import { useMemo } from "react";

type Testimonial = {
  name: string;
  title: string;
  company: string;
  quote: string;
  highlight: string;
};

function initials(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "R";
  const a = parts[0]?.[0] ?? "R";
  const b = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
  return (a + b).toUpperCase();
}

function hashToHue(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) % 360;
  }
  return h;
}

function Avatar({ name }: { name: string }) {
  const hue = useMemo(() => hashToHue(name), [name]);
  const bg = `hsl(${hue} 70% 55%)`;
  const bg2 = `hsl(${(hue + 28) % 360} 70% 45%)`;
  return (
    <div
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl ring-1 ring-black/5"
      aria-hidden
      style={{
        backgroundImage: `radial-gradient(80% 80% at 25% 20%, ${bg}, transparent 60%), radial-gradient(90% 90% at 70% 75%, ${bg2}, transparent 62%), linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0))`,
      }}
    >
      <span className="font-display text-sm font-semibold tracking-tight text-white drop-shadow-sm">
        {initials(name)}
      </span>
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.18]" />
    </div>
  );
}

export default function SocialProof({
  eyebrow = "Proof",
  title = "Trusted by teams that care about brand safety",
  subtitle = "Short, real-world outcomes from consistent, community-first execution.",
  items,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: readonly Testimonial[];
}) {
  if (!items || items.length === 0) {
    const stats = [
      { value: "256k+", label: "Views (case study)" },
      { value: "20k+", label: "Upvotes" },
      { value: "250+", label: "Comments" },
      { value: "99.9%", label: "Upvote ratio" },
    ] as const;

    return (
      <section className="border-y border-gray-100 bg-gray-50/50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-md sm:p-6"
              >
                <p className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs leading-snug text-[#6B7280] sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">{subtitle}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={`${t.name}-${t.company}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 shadow-[0_18px_55px_-30px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.03] transition hover:-translate-y-0.5 hover:shadow-[0_28px_75px_-38px_rgba(99,102,241,0.35)] sm:p-6"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent"
                aria-hidden
              />
              <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-[#6366F1]/10 blur-3xl" />

              <div className="flex items-start gap-3">
                <Avatar name={t.name} />
                <div className="min-w-0">
                  <figcaption className="text-sm font-semibold text-[#0B0F19]">
                    {t.name}
                  </figcaption>
                  <p className="mt-0.5 text-sm text-[#6B7280]">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-[#0B0F19]">
                “{t.quote}”
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50/70 px-3 py-2 text-sm font-semibold text-[#0B0F19]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" aria-hidden />
                <span className="leading-snug">{t.highlight}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
