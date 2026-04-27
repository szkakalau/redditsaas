import AuditLink from "@/components/AuditLink";

export default function FinalCTA() {
  return (
    <section className="final-cta-gradient relative overflow-hidden py-16 text-white sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 grain opacity-[0.07]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-5 text-center sm:px-6">
        <h2 className="font-display text-pretty text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Turn Reddit into your growth channel
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-indigo-100/95 sm:text-lg">
          Email us for a free written audit—we&apos;ll review fit, risk, and a
          practical 30-day plan. Async only; no call required unless you ask.
        </p>
        <AuditLink
          className="mt-8 inline-flex min-h-[52px] min-w-[min(100%,18rem)] items-center justify-center rounded-2xl bg-white px-8 text-base font-semibold text-[#312e81] shadow-lg transition active:scale-[0.99] hover:bg-indigo-50 hover:shadow-xl sm:mt-10 sm:min-h-[48px]"
        >
          Request a Free Reddit Audit
        </AuditLink>
      </div>
    </section>
  );
}
