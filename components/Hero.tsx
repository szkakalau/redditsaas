import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

const metrics = [
  "120k+ views",
  "3k+ upvotes",
  "500+ comments",
  "Paying customers acquired",
];

export default function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#0B0F19] sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
            Get Your First Customers From Reddit — Without Getting Banned
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
            We plan content, post, engage, and turn Reddit into a consistent lead
            channel for your startup.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#6366F1] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#5558E3] hover:shadow-xl"
            >
              Book Free Reddit Audit
            </a>
            <Link
              href="#case-study"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
            >
              See Case Studies
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <span className="text-sm font-semibold text-[#0B0F19]">
              Growth dashboard
            </span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              Live
            </span>
          </div>
          <div className="mt-6 grid gap-4">
            {metrics.map((line) => (
              <div
                key={line}
                className="rounded-xl bg-gray-50/80 px-4 py-3 text-sm font-semibold text-[#0B0F19] transition hover:bg-gray-50"
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
