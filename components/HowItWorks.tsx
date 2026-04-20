const steps = [
  {
    step: "1",
    title: "Audit",
    body: "We map your ICP, relevant subreddits, risks, and quick wins—before a single post goes live.",
  },
  {
    step: "2",
    title: "Strategy",
    body: "Messaging, proof assets, posting calendar, and engagement rules tailored to each community.",
  },
  {
    step: "3",
    title: "Execution",
    body: "Publish, reply, and iterate daily with native tone—so traction compounds instead of stalling.",
  },
  {
    step: "4",
    title: "Conversion",
    body: "Turn attention into pipeline: CTAs, DM flows, and landing tweaks tracked against leads booked.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
          How It Works
        </h2>
        <div className="relative mt-10 sm:mt-14">
          <div
            className="absolute left-[1.125rem] top-0 hidden h-full w-px bg-gradient-to-b from-[#6366F1] via-[#6366F1]/40 to-transparent md:block"
            aria-hidden
          />
          <ol className="space-y-8 sm:space-y-10 md:space-y-12">
            {steps.map((s, i) => (
              <li key={s.step} className="relative flex gap-5 sm:gap-6 md:gap-10">
                <div className="flex shrink-0 flex-col items-center md:w-12">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6366F1] text-sm font-bold text-white shadow-md ring-4 ring-white">
                    {s.step}
                  </span>
                  {i < steps.length - 1 ? (
                    <span className="mt-2 h-full min-h-[2rem] w-px flex-1 bg-[#6366F1]/30 md:hidden" />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1 rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6">
                  <h3 className="text-lg font-semibold text-[#0B0F19]">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#6B7280]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
