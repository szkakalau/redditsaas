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
    <section className="relative overflow-hidden bg-[#0B0F19] py-14 text-gray-300 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 grain opacity-50"
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-5 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Why Reddit is the most underrated growth channel in 2026
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            And why most startups fail to unlock it.
          </p>
        </div>

        <div className="mt-10 sm:mt-14">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A5B4FC]">
            Why Reddit
          </h3>
          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3">
            {whyReddit.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg sm:p-6"
              >
                <p className="text-base font-medium leading-snug text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Why Most Startups Fail
          </h3>
          <ul className="mt-5 space-y-2 sm:space-y-3">
            {whyFail.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A5B4FC]" />
                <span className="text-base leading-relaxed text-gray-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center font-display text-xl font-semibold tracking-tight text-white sm:mt-12 sm:text-2xl md:text-3xl">
          Reddit growth requires native execution.
        </p>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A5B4FC]">
              Why Us
            </h3>
            <ul className="mt-5 space-y-2 sm:space-y-3">
              {whyUs.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Why Now
            </h3>
            <ul className="mt-5 space-y-2 sm:space-y-3">
              {whyNow.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-bold text-white sm:mt-8">
              Early adopters win the most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
