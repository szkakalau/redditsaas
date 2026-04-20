import Link from "next/link";
import { getAuditMailtoHref, getOptionalFormUrl } from "@/lib/constants";

const metrics = [
  "120k+ views",
  "3k+ upvotes",
  "500+ comments",
  "Paying customers acquired",
];

export default function Hero() {
  const formUrl = getOptionalFormUrl();

  return (
    <section className="relative py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <h1 className="font-display text-pretty text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-[#0B0F19] sm:text-4xl sm:leading-[1.15] lg:text-[2.65rem] lg:leading-[1.12]">
            Get Your First Customers From Reddit — Without Getting Banned
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            We plan content, post, engage, and turn Reddit into a consistent lead
            channel for your startup.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280] sm:text-base">
            Request a free audit by email—written English is fine. We reply within
            24–48 hours. No video call required.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <a
              href={getAuditMailtoHref()}
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl bg-[#6366F1] px-6 text-center text-base font-semibold text-white shadow-lg transition active:scale-[0.99] hover:bg-[#5558E3] hover:shadow-xl sm:min-h-[48px] sm:flex-initial sm:px-8"
            >
              Request Free Reddit Audit
            </a>
            <Link
              href="#case-study"
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 text-center text-base font-semibold text-[#0B0F19] shadow-sm transition active:scale-[0.99] hover:border-gray-300 hover:shadow-md sm:min-h-[48px] sm:flex-initial"
            >
              See Case Studies
            </Link>
          </div>
          {formUrl ? (
            <p className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-base">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#6366F1] underline-offset-4 hover:underline"
              >
                Prefer a form?
              </a>{" "}
              (same request, no email client needed)
            </p>
          ) : null}
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 sm:p-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <span className="text-sm font-semibold text-[#0B0F19] sm:text-base">
              Growth dashboard
            </span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              Live
            </span>
          </div>
          <div className="mt-5 grid gap-3 sm:gap-4">
            {metrics.map((line) => (
              <div
                key={line}
                className="rounded-xl bg-gray-50/80 px-4 py-3.5 text-sm font-semibold text-[#0B0F19] sm:text-base"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
