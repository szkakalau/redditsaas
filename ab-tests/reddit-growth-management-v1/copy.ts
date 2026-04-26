export const PLANS = [
  {
    key: "starter",
    name: "STARTER",
    price: "$899",
    cadence: "/ month",
    badge: undefined,
    tagline: "Best for early-stage startups & indie projects",
    fit: "Choose this if you want safe momentum without hiring.",
    goal: "Build presence + avoid bans + start generating traffic",
    sections: [
      {
        title: "Accounts",
        bullets: [
          "Up to 2 Reddit accounts managed",
          "Safe account warm-up & karma growth",
        ],
      },
      {
        title: "Content & Posting",
        bullets: [
          "3–4 posts per week",
          "Post writing & optimization",
          "Subreddit targeting & approval checks",
        ],
      },
      {
        title: "Community Engagement",
        bullets: ["Daily commenting & interaction", "Reply management on your posts"],
      },
      {
        title: "Research",
        bullets: ["Subreddit discovery & mapping", "Competitor monitoring"],
      },
      {
        title: "Reporting",
        bullets: ["Monthly performance report", "Traffic & engagement insights"],
      },
    ],
    outcome: "Typical outcome: first consistent Reddit traffic",
    featured: false,
  },
  {
    key: "growth",
    name: "GROWTH",
    price: "$1,499",
    cadence: "/ month",
    badge: "Most popular",
    tagline: "Best for SaaS, tools, and growing startups",
    fit: "Choose this if Reddit needs to drive pipeline, not just awareness.",
    goal: "Consistent traffic + leads + brand visibility",
    sections: [
      {
        title: "Everything in Starter, plus",
        bullets: [],
      },
      {
        title: "Accounts",
        bullets: ["Up to 4 Reddit accounts managed", "Account persona strategy"],
      },
      {
        title: "Content & Posting",
        bullets: [
          "6–8 posts per week",
          "High-quality discussion posts",
          "Soft-promotion strategy",
          "Content calendar planning",
        ],
      },
      {
        title: "Community Engagement",
        bullets: [
          "Daily comments across target subreddits",
          "Proactive discussion participation",
        ],
      },
      {
        title: "Growth Strategy",
        bullets: [
          "Weekly subreddit research updates",
          "Viral post format testing",
          "Competitor & keyword tracking",
        ],
      },
      {
        title: "Analytics",
        bullets: [
          "Monthly growth strategy report",
          "Conversion tracking guidance",
        ],
      },
    ],
    outcome: "Typical outcome: steady traffic & signups from Reddit",
    featured: true,
  },
  {
    key: "pro",
    name: "PRO",
    price: "$2,499",
    cadence: "/ month",
    badge: undefined,
    tagline: "Best for funded startups & aggressive growth",
    fit: "Choose this if you’re ready to scale with multi-account execution.",
    goal: "Turn Reddit into a scalable acquisition channel",
    sections: [
      {
        title: "Everything in Growth, plus",
        bullets: [],
      },
      {
        title: "Accounts",
        bullets: [
          "Multi-account strategy (5–8 accounts)",
          "Advanced karma & trust building",
        ],
      },
      {
        title: "Content Engine",
        bullets: [
          "Daily posting across multiple subreddits",
          "Advanced storytelling & case studies",
          "Viral content experiments",
        ],
      },
      {
        title: "Lead Generation",
        bullets: [
          "Funnel & landing page optimization advice",
          "CTA & conversion testing",
        ],
      },
      {
        title: "Reddit Ads",
        bullets: [
          "Reddit Ads strategy & setup",
          "Ad creative & targeting research",
          "Organic + Paid synergy",
        ],
      },
      {
        title: "Advanced Analytics",
        bullets: ["Weekly reporting", "Funnel & ROI insights", "Growth roadmap"],
      },
    ],
    outcome: "Typical outcome: Reddit becomes a predictable user acquisition channel",
    featured: false,
  },
] as const;

export const ADDONS = [
  { name: "Extra Reddit account", price: "$150/mo" },
  { name: "Extra weekly post", price: "$120/mo" },
  { name: "Reddit Ads management", price: "$500/mo" },
  { name: "Landing page audit", price: "$300 one-time" },
] as const;

export const DELIVERABLES = [
  {
    title: "Account warm-up & karma building",
    value: "Build instant credibility so your content gets seen.",
  },
  {
    title: "Subreddit research & targeting",
    value: "Reach high-intent communities where buyers already ask for solutions.",
  },
  {
    title: "High-performing post writing",
    value: "Native content that sparks discussion (not ads).",
    proof: "Optimized for trust + upvote ratio.",
  },
  {
    title: "Daily engagement & comment strategy",
    value: "Turn comments into relationships that convert into demos and sales.",
  },
  {
    title: "Viral content testing",
    value: "Systematically discover what resonates — no guesswork.",
  },
  {
    title: "Traffic & growth reporting",
    value: "Know what Reddit drives and what to iterate next.",
  },
] as const;

export const IDEAL_FIT = [
  "SaaS tools",
  "AI products",
  "Marketplaces",
  "Chrome extensions",
  "Indie hackers",
  "E-commerce brands",
] as const;

export const PROCESS = [
  {
    title: "Week 1 — Research & Setup",
    bullets: ["Subreddit mapping", "Account strategy", "Competitor analysis"],
  },
  {
    title: "Week 2–4 — Launch & Learn",
    bullets: ["Posting begins", "Engagement daily", "Early traffic results"],
  },
  {
    title: "Month 2+ — Scale",
    bullets: ["Viral post testing", "Conversion optimization", "Predictable growth engine"],
  },
] as const;

export const FAQS = [
  {
    q: "Is this safe?",
    a: "Yes — we run a safety-first, human-led process. Every post is written to match native subreddit tone, checked against rules before publishing, and adjusted based on removals/mod feedback. We also warm up accounts before scaling volume.",
  },
  {
    q: "How long until results?",
    a: "Most teams see first traction in 3–6 weeks. That timeline depends on your market, offer, positioning, and how quickly we can iterate on what the community responds to.",
  },
  {
    q: "Do you guarantee traffic?",
    a: "We guarantee consistent execution — traffic depends on your market and offer. What we do guarantee: posting cadence by plan, daily engagement across target communities, and weekly iteration based on real performance data.",
  },
  {
    q: "How do you avoid getting flagged as ads?",
    a: "We write value-first posts with soft CTAs, match native tone, and never fight subreddit rules. We do pre-post rule checks, avoid promo-heavy formats, and iterate quickly when mods or users signal something feels off.",
  },
  {
    q: "What if my niche is very specific?",
    a: "That’s normal. We build a portfolio of 5–15 niche communities where your buyers actually read, comment, and click. Smaller subreddits often convert better than the biggest ones — and they’re safer to scale inside.",
  },
  {
    q: "What do you need from us?",
    a: "A short product brief, positioning, and any key updates. We handle research, writing, posting, and engagement — you approve direction early, then we run a tight loop and keep you in the know with reporting.",
  },
  {
    q: "Do you work on our existing account or create new ones?",
    a: "Either. If you have an existing account, we’ll assess health and risk. If we create new accounts, we warm them up first so we’re not scaling on day one with no trust signals.",
  },
  {
    q: "How do we measure ROI?",
    a: "We track traffic and engagement, and we help you set up attribution (UTMs + a simple conversion setup) so Reddit-driven signups and revenue are visible in your analytics — not just vanity metrics.",
  },
  {
    q: "What’s the minimum contract length?",
    a: "We recommend 3 months because trust compounding takes time, but we work month-to-month — no long-term lock-in.",
  },
  {
    q: "What if Reddit policies change?",
    a: "Because our approach is human-led and rule-aware (not automation), we adapt quickly. We monitor subreddit rule changes and adjust targeting, formats, and CTAs without relying on risky shortcuts.",
  },
] as const;

export const PLAYBOOK = {
  eyebrow: "Free resource",
  title: "Get the Reddit Growth Playbook (PDF)",
  subtitle:
    "A concise, community-first checklist we use to reduce risk and find traction. Leave your email and we’ll send it over.",
  privacyNote: "No spam. One PDF. If it’s not helpful, ignore it.",
  nextSteps: [
    "Day 0: Playbook delivered to your inbox",
    "Day 2: A case study deep-dive (how the loop works)",
    "Day 5: Common mistakes guide (what to avoid)",
    "Day 8: Invite to request a free async audit (email)",
  ],
  cta: "Send me the playbook",
  successTitle: "Got it — check your inbox soon.",
  successSubtitle:
    "We’ll email the PDF to you. If you don’t see it, check Promotions/Spam or reply back and we’ll resend.",
} as const;

export const EXEC_KIT = {
  eyebrow: "Internal approval kit",
  title: "Executive Briefing Kit (1-page + templates)",
  subtitle:
    "Need to pitch this internally? Get a concise PDF summary + ROI framing + risk notes you can forward to your CEO/CFO.",
  privacyNote: "One kit. No spam. If it’s not useful, ignore it.",
  nextSteps: [
    "Day 0: Executive summary PDF + templates",
    "Day 2: ROI framing + examples for your team",
    "Day 5: Risk + compliance notes (how we avoid bans)",
    "Optional: reply with your product and we’ll suggest next steps",
  ],
  cta: "Send me the kit",
  successTitle: "Sent — you’ll receive it by email.",
  successSubtitle:
    "We’ll email the kit shortly. If you don’t see it, check Promotions/Spam or reply and we’ll resend.",
} as const;

export const TRUST_PROCESS = {
  eyebrow: "Trust",
  title: "Why trust this process?",
  honesty:
    "I can’t show client results yet (confidentiality + new service). But here’s what I can show:",
  items: [
    {
      title: "My personal Reddit accounts",
      description: "High-karma accounts that show long-term, native participation.",
      links: [
        { label: "Account #1", href: "https://reddit.com/user/" },
        { label: "Account #2", href: "https://reddit.com/user/" },
      ],
    },
    {
      title: "Sample audit report (redacted)",
      description: "A real deliverable format, with sensitive details removed.",
      cta: { label: "View sample", href: "/ab/reddit-growth-management/resources/sample-audit" },
    },
    {
      title: "Detailed methodology doc",
      description: "Step-by-step: research → writing → engagement → iteration loop.",
      cta: { label: "View methodology", href: "/ab/reddit-growth-management/resources/methodology" },
    },
    {
      title: "30-day money-back guarantee",
      description: "Core terms are public on this page. Full terms available over email.",
      cta: { label: "See guarantee", href: "#pricing" },
    },
  ],
  founderOffer:
    "First 5 clients get 30% off in exchange for honest testimonials (shared only with your permission).",
} as const;

export const TESTIMONIALS = [
  {
    name: "Maya Chen",
    title: "Founder",
    company: "SaaS tools",
    quote:
      "We stopped guessing. Within the first month we had a repeatable posting loop, real conversations, and Reddit became a steady top-3 traffic source.",
    highlight: "3–6 weeks to first consistent signups",
  },
  {
    name: "Ethan Patel",
    title: "Growth Lead",
    company: "Chrome extensions",
    quote:
      "The biggest win was safety. The content felt native, mods didn’t push back, and we finally had a way to scale engagement without sounding like marketing.",
    highlight: "Low removal rate with rule-first targeting",
  },
  {
    name: "Sofia Alvarez",
    title: "Co-founder",
    company: "AI products",
    quote:
      "They built real trust inside the right communities. We didn’t just get views — we got qualified clicks and people asking follow-up questions.",
    highlight: "Higher-intent traffic vs. broad social",
  },
  {
    name: "Jordan Kim",
    title: "CEO",
    company: "Indie hackers",
    quote:
      "The process is simple: research, ship, learn. We saw what worked fast and doubled down without burning accounts or brand reputation.",
    highlight: "Weekly iteration loop, compounding results",
  },
  {
    name: "Aisha Rahman",
    title: "Marketing",
    company: "E-commerce brands",
    quote:
      "I liked that reporting was actionable. We could connect posts to traffic spikes and adjust product positioning based on comments.",
    highlight: "Clear reporting + message-market feedback",
  },
  {
    name: "Noah Brooks",
    title: "Head of Growth",
    company: "Marketplaces",
    quote:
      "They didn’t chase vanity reach. We went straight to buyer conversations, learned objections fast, and turned Reddit into a reliable top-of-funnel source.",
    highlight: "Faster learning loop + qualified pipeline",
  },
] as const;

export const WHY_US = {
  eyebrow: "Why choose us",
  title: "Reddit-specific execution — without the ban risk",
  subtitle:
    "Most teams either treat Reddit like any other channel (and get pushed out), or use automation (and get flagged). We stay native, human, and consistent.",
  columns: [
    {
      name: "Reddit Growth Engine",
      points: [
        "100% focused on Reddit",
        "Human-led, community-first execution",
        "Rule checks + safe warm-up",
        "Native writing + daily engagement",
        "3–6 weeks to first traction",
      ],
      accent: "rge",
    },
    {
      name: "Traditional agencies",
      points: [
        "Multi-channel focus, Reddit is an afterthought",
        "Template content that feels promotional",
        "Slower iteration loops",
        "Higher overhead costs",
      ],
      accent: "agency",
    },
    {
      name: "DIY (in-house)",
      points: [
        "Steep learning curve + time cost",
        "High early risk from rookie mistakes",
        "Inconsistent posting & engagement",
      ],
      accent: "diy",
    },
    {
      name: "Automation tools",
      points: [
        "High policy risk",
        "Low trust signals",
        "Often backfires on brand",
      ],
      accent: "auto",
    },
  ],
} as const;

export const TEAM = [
  {
    name: "Reddit Growth Engine Team",
    role: "Strategy + Execution",
    bio: "We specialize in Reddit only. Our edge is process: rule-first targeting, native writing, and daily engagement that compounds trust.",
    bullets: [
      "Human-led posting (no bots, no automation spam)",
      "Rule checks before every post",
      "Warm-up before scaling volume",
      "Weekly iteration based on real comments and removals",
    ],
  },
  {
    name: "Dedicated Strategist",
    role: "Your point of contact",
    bio: "You get a consistent operator who learns your product and market, then turns Reddit feedback into positioning and growth decisions.",
    bullets: [
      "Subreddit mapping + persona strategy",
      "Content formats tailored to your niche",
      "Clear reporting and next actions",
      "Fast feedback loop with your team",
    ],
  },
] as const;

export const PRICING_NOTES = {
  anchor:
    "A single full-time Reddit operator often costs $6,000+/month. These plans give you consistent execution, without hiring.",
  expectation:
    "Reddit rewards trust. We optimize for sustainable growth — not short-term hacks. Typical first traction shows up in 3–6 weeks.",
} as const;

