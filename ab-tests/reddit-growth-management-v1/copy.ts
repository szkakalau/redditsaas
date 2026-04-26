export const PLANS = [
  {
    key: "starter",
    name: "STARTER",
    price: "$899",
    cadence: "/ month",
    badge: undefined,
    tagline: "Best for early-stage startups & indie projects",
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
  "Account warm-up & karma building",
  "Subreddit research & targeting",
  "High-performing post writing",
  "Daily engagement & comment strategy",
  "Viral content testing",
  "Traffic & growth reporting",
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
    a: "Yes. We use organic, community-first strategies.",
  },
  {
    q: "How long until results?",
    a: "Usually 3–6 weeks for first traction.",
  },
  {
    q: "Do you guarantee traffic?",
    a: "We guarantee consistent posting, engagement, and optimization.",
  },
] as const;

