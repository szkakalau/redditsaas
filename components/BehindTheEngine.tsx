"use client";

type Person = {
  name: string;
  role: string;
  bio: string;
  bullets: readonly string[];
};

function InitialAvatar({ name }: { name: string }) {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return (
    <div
      className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#0B0F19] text-white shadow-md ring-1 ring-white/20"
      aria-hidden
    >
      <span className="font-display text-sm font-semibold tracking-tight">{initials || "RG"}</span>
    </div>
  );
}

export default function BehindTheEngine({
  eyebrow = "Behind the engine",
  title = "Reddit natives, not generalist marketers",
  subtitle = "High-ticket decisions need human trust. Here’s the team and the operating standard behind the work.",
  people,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  people: readonly Person[];
}) {
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

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-6">
          {people.map((p) => (
            <div
              key={p.name}
              className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 shadow-[0_18px_55px_-30px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.03] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-[#6366F1]/10 blur-3xl" />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent"
                aria-hidden
              />

              <div className="flex items-start gap-4">
                <InitialAvatar name={p.name} />
                <div>
                  <p className="text-base font-semibold text-[#0B0F19]">{p.name}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#6B7280]">{p.role}</p>
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-[#6B7280]">{p.bio}</p>
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base text-[#0B0F19]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-[#6B7280]">
          We keep details high-level on the public page. On the audit call, we’ll share the exact workflow,
          examples, and what we’d do in your market.
        </p>
      </div>
    </section>
  );
}

