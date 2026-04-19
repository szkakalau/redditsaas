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
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-4xl">
          Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#6B7280]">
          Pick a plan that matches your stage. Start with a free async audit by
          email—we align on goals before you commit.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl ${
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
                <span className="text-4xl font-bold tracking-tight text-[#0B0F19]">
                  {tier.price}
                </span>
                <span className="text-sm text-[#6B7280]">/mo</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                {tier.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-[#6B7280]">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={getAuditMailtoHref()}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#6366F1] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#5558E3] hover:shadow-lg"
              >
                Get started via email
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
