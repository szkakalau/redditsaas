import { getAuditMailtoHref } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="final-cta-gradient py-24 text-white">
      <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Turn Reddit into your growth channel
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-indigo-100">
          Email us for a free written audit—we&apos;ll review fit, risk, and a
          practical 30-day plan. Async only; no call required unless you ask.
        </p>
        <a
          href={getAuditMailtoHref()}
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#4f46e5] shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-xl"
        >
          Request a Free Reddit Audit
        </a>
      </div>
    </section>
  );
}
