export default function CaseStudy() {
  return (
    <section id="case-study" className="border-t border-gray-100 bg-gray-50/50 py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-4xl">
              Case Study: AI SaaS
            </h2>
            <ul className="mt-8 space-y-4 text-[#6B7280]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                30 days experiment
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                18 posts published
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                120k+ total views
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                First paying customers acquired
              </li>
            </ul>
          </div>
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-[#6366F1]/15 via-white to-[#0B0F19]/10 shadow-xl ring-1 ring-gray-100"
            role="img"
            aria-label="Product analytics screenshot placeholder"
          >
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(99,102,241,0.12),transparent_40%,rgba(11,15,25,0.08))]" />
            <div className="absolute left-6 right-6 top-6 h-8 rounded-lg bg-white/80 shadow-sm ring-1 ring-gray-100" />
            <div className="absolute bottom-8 left-6 right-6 space-y-3">
              <div className="h-3 max-w-[60%] rounded-full bg-[#0B0F19]/10" />
              <div className="h-3 max-w-[40%] rounded-full bg-[#6366F1]/25" />
              <div className="h-3 max-w-[75%] rounded-full bg-gray-200/80" />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-xs font-medium text-[#6B7280]">
              Screenshot placeholder — analytics overview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
