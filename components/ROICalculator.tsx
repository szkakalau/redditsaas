"use client";

import { useMemo, useState } from "react";
import StrategyCallLink from "@/components/StrategyCallLink";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function parseNumber(v: string) {
  const cleaned = v.replace(/[^0-9.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function formatMoney(n: number) {
  if (!Number.isFinite(n)) return "$0";
  const rounded = Math.round(n);
  return rounded.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function ROICalculator({
  className,
  defaultLeadsMin = 50,
  defaultLeadsMax = 200,
}: {
  className?: string;
  defaultLeadsMin?: number;
  defaultLeadsMax?: number;
}) {
  const [ltv, setLtv] = useState("6000");
  const [closeRate, setCloseRate] = useState("5");
  const [leadsMin, setLeadsMin] = useState(String(defaultLeadsMin));
  const [leadsMax, setLeadsMax] = useState(String(defaultLeadsMax));

  const model = useMemo(() => {
    const ltvN = clamp(parseNumber(ltv), 0, 1_000_000);
    const closeRatePct = clamp(parseNumber(closeRate), 0, 100);
    const minN = clamp(parseNumber(leadsMin), 0, 100_000);
    const maxN = clamp(parseNumber(leadsMax), 0, 100_000);
    const minLeads = Math.min(minN, maxN);
    const maxLeads = Math.max(minN, maxN);

    const close = closeRatePct / 100;
    const minRevenue = minLeads * close * ltvN;
    const maxRevenue = maxLeads * close * ltvN;
    return { ltvN, closeRatePct, minLeads, maxLeads, minRevenue, maxRevenue };
  }, [closeRate, leadsMax, leadsMin, ltv]);

  return (
    <section className={className}>
      <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
              ROI calculator
            </p>
            <h3 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
              What could Reddit be worth to you?
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Plug in your unit economics. We’ll estimate the revenue range from a lead range — then
              validate the assumptions over email.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  Customer LTV (USD)
                </span>
                <input
                  value={ltv}
                  onChange={(e) => setLtv(e.target.value)}
                  inputMode="decimal"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="Customer LTV in USD"
                />
              </label>

              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  Lead → Customer close rate (%)
                </span>
                <input
                  value={closeRate}
                  onChange={(e) => setCloseRate(e.target.value)}
                  inputMode="decimal"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="Lead to customer close rate percent"
                />
              </label>

              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  Qualified leads / month (min)
                </span>
                <input
                  value={leadsMin}
                  onChange={(e) => setLeadsMin(e.target.value)}
                  inputMode="numeric"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="Qualified leads per month minimum"
                />
              </label>

              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  Qualified leads / month (max)
                </span>
                <input
                  value={leadsMax}
                  onChange={(e) => setLeadsMax(e.target.value)}
                  inputMode="numeric"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="Qualified leads per month maximum"
                />
              </label>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#6B7280]">
              Estimates are directional. Real performance depends on your offer, market, positioning,
              and tracking setup.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                Estimated revenue range / month
              </p>
              <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0B0F19] sm:text-4xl">
                {formatMoney(model.minRevenue)} – {formatMoney(model.maxRevenue)}
              </p>
              <div className="mt-4 grid gap-2 text-sm text-[#6B7280]">
                <p>
                  Inputs: LTV {formatMoney(model.ltvN)} · close rate {model.closeRatePct}% · leads{" "}
                  {model.minLeads}–{model.maxLeads}/mo
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <StrategyCallLink className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                  Email us for an async audit
                </StrategyCallLink>
                <a
                  href="#exec-kit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
                >
                  Get the exec kit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

