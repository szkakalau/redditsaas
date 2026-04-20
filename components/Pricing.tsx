import { getAuditMailtoHref } from "@/lib/constants";

const tiers = [
  {
    name: "Starter",
    price: "$299",
    description: "Validate Reddit as a channel with a focused posting rhythm.",
    features: [
      "Subreddit research",
      "4 posts/month",
      "Comment engagement",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$599",
    description: "Scale output and daily presence where your buyers already hang out.",
    features: [
      "Research + strategy",
      "12 posts/month",
      "Daily engagement",
      "Funnel suggestions",
    ],
    featured: true,
  },
  {
    name: "Done-for-You",
    price: "$999",
    description: "Full execution with aggressive iteration and hands-off operations.",
    features: [
      "Full Reddit management",
      "Unlimited posts",
      "Landing page optimization",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
          Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#6B7280] sm:text-lg">
          Pick a plan that matches your stage. Start with a free async audit by
          email—we align on goals before you commit.
        </p>

        <div className="mt-10 lg:mt-14">
          <div
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-5 pr-5 pt-2 scrollbar-hide sm:pl-6 sm:pr-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 lg:pl-0 lg:pr-0 lg:pt-0"
            role="list"
            aria-label="Pricing plans"
          >
            {tiers.map((tier) => (
              <div
                key={tier.name}
                role="listitem"
                className={`relative flex min-h-full w-[min(100%,20rem)] shrink-0 snap-center flex-col rounded-2xl border bg-white p-5 shadow-md sm:w-[min(100%,22rem)] sm:p-6 lg:w-auto ${
                  tier.featured
                    ? "border-[#6366F1] ring-2 ring-[#6366F1]/20"
                    : "border-gray-100"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6366F1] px-3 py-1 text-xs font-semibold text-white shadow">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-[#0B0F19]">{tier.name}</h3>
                <p className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold tracking-tight text-[#0B0F19]">
                    {tier.price}
                  </span>
                  <span className="text-sm text-[#6B7280]">/mo</span>
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-base text-[#6B7280]">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={getAuditMailtoHref()}
                  className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#6366F1] px-4 text-base font-semibold text-white shadow-md transition active:scale-[0.99] hover:bg-[#5558E3] hover:shadow-lg sm:min-h-[48px] sm:text-sm"
                >
                  Get started via email
                </a>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-[#9CA3AF] lg:hidden">
            Swipe for more plans
          </p>
        </div>
      </div>
    </section>
  );
}
