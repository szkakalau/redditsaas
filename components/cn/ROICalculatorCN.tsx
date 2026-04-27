"use client";

import { useMemo, useState } from "react";
import AuditLink from "@/components/AuditLink";

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
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(rounded);
}

export default function ROICalculatorCN({
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
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
              ROI 计算器
            </p>
            <h3 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
              Reddit 能为你带来多少价值？
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              输入你的单位经济模型，我们会估算收入范围——然后在审计中验证假设。
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  客户终身价值 LTV (USD)
                </span>
                <input
                  value={ltv}
                  onChange={(e) => setLtv(e.target.value)}
                  inputMode="decimal"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="客户 LTV（美元）"
                />
              </label>

              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  线索 → 客户转化率 (%)
                </span>
                <input
                  value={closeRate}
                  onChange={(e) => setCloseRate(e.target.value)}
                  inputMode="decimal"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="线索到客户转化率（百分比）"
                />
              </label>

              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  每月合格线索数（最低）
                </span>
                <input
                  value={leadsMin}
                  onChange={(e) => setLeadsMin(e.target.value)}
                  inputMode="numeric"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="每月合格线索数最低值"
                />
              </label>

              <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  每月合格线索数（最高）
                </span>
                <input
                  value={leadsMax}
                  onChange={(e) => setLeadsMax(e.target.value)}
                  inputMode="numeric"
                  enterKeyHint="done"
                  className="mt-2 w-full bg-transparent text-base font-semibold text-[#0B0F19] outline-none sm:text-sm"
                  aria-label="每月合格线索数最高值"
                />
              </label>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#6B7280]">
              估算仅供参考。实际表现取决于你的产品、市场、定位和追踪设置。
            </p>
          </div>

          <div className="w-full lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                预计月收入范围
              </p>
              <p className="mt-3 break-words font-display text-2xl font-semibold tracking-tight text-[#0B0F19] tabular-nums sm:text-4xl">
                {formatMoney(model.minRevenue)} – {formatMoney(model.maxRevenue)}
              </p>
              <div className="mt-4 grid gap-2 text-sm text-[#6B7280]">
                <p>
                  输入：LTV {formatMoney(model.ltvN)} · 转化率 {model.closeRatePct}% · 线索{" "}
                  {model.minLeads}–{model.maxLeads}/月
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <AuditLink className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg active:scale-[0.99]">
                  预约免费审计
                </AuditLink>
                <a
                  href="#exec-kit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-[#0B0F19] shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.99]"
                >
                  获取高管工具包
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

