const whyReddit = [
  "430M+ active users",
  "High-intent traffic",
  "Low competition",
];

const whyFail = [
  "Ads get downvoted or banned",
  "Founders post like marketers",
  "Agencies don’t understand Reddit",
];

const whyUs = [
  "We don’t run ads",
  "We engage like real users",
  "We turn attention into customers",
];

const whyNow = [
  "Facebook ads saturated",
  "Google ads expensive",
  "Twitter reach declining",
];

export default function Differentiation() {
  return (
    <section className="bg-[#0B0F19] py-24 text-gray-300">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Reddit is the most underrated growth channel in 2026
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            And why most startups fail to unlock it.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6366F1]">
            Why Reddit
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {whyReddit.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <p className="font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Why Most Startups Fail
          </h3>
          <ul className="mt-6 space-y-3">
            {whyFail.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Reddit growth requires native execution.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6366F1]">
              Why Us
            </h3>
            <ul className="mt-6 space-y-3">
              {whyUs.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Why Now
            </h3>
            <ul className="mt-6 space-y-3">
              {whyNow.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-bold text-white">
              Early adopters win the most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
