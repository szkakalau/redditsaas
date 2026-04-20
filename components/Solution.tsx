const solutions = [
  {
    title: "Content Strategy",
    body: "Subreddit selection, angles, and posting cadence aligned with how buyers actually search for answers.",
  },
  {
    title: "Ghostwriting",
    body: "Founder-led voice without the time sink—clear, helpful posts that fit each community.",
  },
  {
    title: "Posting & Engagement",
    body: "Consistent threads, thoughtful replies, and follow-ups that build credibility—not noise.",
  },
  {
    title: "Traffic → Leads Funnel",
    body: "Clear next steps from post to DM, email, or landing page—measured and iterated weekly.",
  },
];

export default function Solution() {
  return (
    <section className="border-t border-gray-100 bg-gray-50/50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
          Reddit Growth Engine
        </h2>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6"
            >
              <h3 className="text-lg font-semibold text-[#0B0F19]">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#6B7280]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
