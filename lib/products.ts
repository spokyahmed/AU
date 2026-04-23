export type Variant = {
  slug: string;
  duration: string;
  months: number;
  price: string;
  priceValue: string;
  planId: string;
};

export type Tier = {
  id: "member" | "insider" | "tip";
  name: string;
  tagline: string;
  description: string;
  features: string[];
  kind: "subscription" | "donation";
  variants: Variant[];
};

export const tiers: Tier[] = [
  {
    id: "member",
    name: "Member Pass",
    tagline: "Pull up a chair",
    description:
      "Your key to the main lounge. Every channel where the conversation actually happens — work, fitness, books, relationships, and the weekly check-in the crew never misses.",
    features: [
      "Access to the main Alpha Underground lounge",
      "Weekly Sunday check-in — goals, wins, what you're working on",
      "Business, fitness, finance, and mindset channels",
      "Book club with a new pick every month",
      "Late-night voice rooms (10pm–2am, nightly)",
    ],
    kind: "subscription",
    variants: [
      {
        slug: "member-1m",
        duration: "1 month",
        months: 1,
        price: "$10",
        priceValue: "$10 · 1 month",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_MEMBER_1M ?? "",
      },
      {
        slug: "member-3m",
        duration: "3 months",
        months: 3,
        price: "$30",
        priceValue: "$30 · 3 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_MEMBER_3M ?? "",
      },
      {
        slug: "member-6m",
        duration: "6 months",
        months: 6,
        price: "$50",
        priceValue: "$50 · 6 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_MEMBER_6M ?? "",
      },
      {
        slug: "member-9m",
        duration: "9 months",
        months: 9,
        price: "$75",
        priceValue: "$75 · 9 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_MEMBER_9M ?? "",
      },
      {
        slug: "member-12m",
        duration: "12 months",
        months: 12,
        price: "$100",
        priceValue: "$100 · 12 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_MEMBER_12M ?? "",
      },
    ],
  },
  {
    id: "insider",
    name: "Insider Pass",
    tagline: "The back room",
    description:
      "Members hang out in the lounge. Insiders get the back room — private voice, mentor matches, first call on retreats, and a direct line to the founders.",
    features: [
      "Everything in Member Pass",
      "Private Insider lounge and voice rooms",
      "Monthly cigar & whiskey voice night with invited guests",
      "1-on-1 mentor match from the Insider roster",
      "First access to in-person retreats and city meetups",
      "Direct line to the founders",
      "Custom Insider role and name color",
      "2× entries on every giveaway",
    ],
    kind: "subscription",
    variants: [
      {
        slug: "insider-1m",
        duration: "1 month",
        months: 1,
        price: "$40",
        priceValue: "$40 · 1 month",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_INSIDER_1M ?? "",
      },
      {
        slug: "insider-3m",
        duration: "3 months",
        months: 3,
        price: "$120",
        priceValue: "$120 · 3 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_INSIDER_3M ?? "",
      },
      {
        slug: "insider-6m",
        duration: "6 months",
        months: 6,
        price: "$200",
        priceValue: "$200 · 6 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_INSIDER_6M ?? "",
      },
      {
        slug: "insider-9m",
        duration: "9 months",
        months: 9,
        price: "$300",
        priceValue: "$300 · 9 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_INSIDER_9M ?? "",
      },
      {
        slug: "insider-12m",
        duration: "12 months",
        months: 12,
        price: "$400",
        priceValue: "$400 · 12 months",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_INSIDER_12M ?? "",
      },
    ],
  },
  {
    id: "tip",
    name: "Buy the Bar a Round",
    tagline: "Keep the lights on",
    description:
      "No perks, no role, no catch. A one-dollar tip that keeps the servers running, the Wi-Fi on, and the mods from quitting.",
    features: [
      "One-time $1 tip",
      "Our genuine thanks in #announcements",
      "Warm fuzzy feelings",
    ],
    kind: "donation",
    variants: [
      {
        slug: "tip",
        duration: "One-time",
        months: 0,
        price: "$1",
        priceValue: "$1 · one-time",
        planId: process.env.NEXT_PUBLIC_WHOP_PLAN_TIP ?? "",
      },
    ],
  },
];

export function getVariant(
  slug: string
): { tier: Tier; variant: Variant } | undefined {
  for (const tier of tiers) {
    const variant = tier.variants.find((v) => v.slug === slug);
    if (variant) return { tier, variant };
  }
  return undefined;
}

export function allVariantSlugs(): string[] {
  return tiers.flatMap((t) => t.variants.map((v) => v.slug));
}
