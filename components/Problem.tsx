const problems = [
  {
    title: "Reddit hates marketers",
    body: "Promotional tone and lazy spam trigger downvotes, reports, and removals—fast.",
  },
  {
    title: "Founders don’t understand culture",
    body: "Each subreddit has norms, language, and proof expectations that generic playbooks miss.",
  },
  {
    title: "Traffic converts insanely well",
    body: "When you earn trust, Reddit visitors show up ready to click, try, and buy—if you don’t waste the moment.",
  },
];

export default function Problem() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
          Why Reddit is Hard
        </h2>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-6"
            >
              <h3 className="text-lg font-semibold text-[#0B0F19]">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#6B7280]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-lg font-semibold text-[#0B0F19] sm:mt-12 sm:text-xl">
          That&apos;s where we come in.
        </p>
      </div>
    </section>
  );
}
