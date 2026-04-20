"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a video call or fluent spoken English?",
    a: "No. We start with email (or an optional form if we provide one). Written English is enough—we reply in English within 24–48 hours on business days. Calls are optional and only if you want them later.",
  },
  {
    q: "How do I request a free audit?",
    a: "Use any “Request audit” button—it opens an email with a short template. Tell us about your product and niche; we send back a written take on Reddit fit, risks, and next steps.",
  },
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
    <section className="border-t border-gray-100 bg-gray-50/50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl lg:text-4xl">
          FAQ
        </h2>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white shadow-md sm:mt-12">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-1 sm:px-2">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold leading-snug text-[#0B0F19] transition hover:text-[#6366F1] active:bg-gray-50/80 sm:min-h-[52px] sm:px-5 sm:text-[17px]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-2">{item.q}</span>
                  <span
                    className="shrink-0 text-2xl font-light leading-none text-[#6B7280]"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-4 pb-5 text-base leading-relaxed text-[#6B7280] sm:px-5">
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
