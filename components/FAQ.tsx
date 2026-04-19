"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Reddit marketing allowed?",
    a: "Yes—when it’s done natively. Reddit’s policies and individual subreddit rules generally allow helpful, transparent participation. We avoid spam, misleading claims, and vote manipulation, and we tailor execution to each community’s guidelines so your brand stays compliant and credible.",
  },
  {
    q: "How fast will I see results?",
    a: "Most teams see early signals in 2–4 weeks (meaningful engagement, DMs, clicks), with compounding results over 60–90 days as trust builds. Timelines depend on your offer, proof assets, and how competitive your niche is on Reddit.",
  },
  {
    q: "Do you guarantee customers?",
    a: "No ethical growth partner can guarantee revenue outcomes. We guarantee a disciplined process: research-backed strategy, consistent execution, measurement against agreed KPIs, and weekly iteration. Our goal is to make customer acquisition predictable—not promised.",
  },
  {
    q: "Do you work with any niche?",
    a: "We work with B2B and prosumer startups where buyers ask questions and compare solutions openly (SaaS, dev tools, AI, productivity, and more). If Reddit isn’t a natural discovery channel for your ICP, we’ll tell you upfront.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-gray-100 bg-gray-50/50 py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-4xl">
          FAQ
        </h2>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white shadow-md">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-5 py-1">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-[#0B0F19] transition hover:text-[#6366F1]"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span
                    className="text-xl font-light text-[#6B7280] transition"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-4 text-sm leading-relaxed text-[#6B7280]">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
