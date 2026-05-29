export type PricingPlan = {
  id: string;
  audience: "students" | "employees" | "colleges";
  name: string;
  price: string;
  cadence: string;
  description: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  author?: string;
  publishedAt?: string;
};

export type ContactEntry = {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  source?: string;
  status?: string;
};

type CurrencyCode = "USD" | "INR";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const USD_TO_INR_RATE = 83.5;

function detectCurrency(locale?: string | null): CurrencyCode {
  if (!locale) {
    return "USD";
  }

  const normalized = locale.toLowerCase();

  if (normalized.includes("in") || normalized.includes("hi") || normalized.includes("ta") || normalized.includes("bn") || normalized.includes("ml") || normalized.includes("kn") || normalized.includes("te") || normalized.includes("mr") || normalized.includes("gu") || normalized.includes("pa") || normalized.includes("or") || normalized.includes("as") || normalized.includes("ne") || normalized.includes("si") || normalized.includes("te")) {
    return "INR";
  }

  return "USD";
}

function parsePriceValue(price: string): number | null {
  const numericValue = Number(String(price).replace(/[^\d.]/g, ""));

  if (Number.isNaN(numericValue)) {
    return null;
  }

  return numericValue;
}

function formatPrice(price: string, currency: CurrencyCode): string {
  const rawValue = parsePriceValue(price);

  if (rawValue === null) {
    return price;
  }

  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(rawValue);
  }

  const convertedValue = rawValue * USD_TO_INR_RATE;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(convertedValue);
}

type StrapiItem = {
  id?: string | number;
  attributes?: Record<string, unknown>;
} & Record<string, unknown>;

async function fetchCollection<T>(collection: string): Promise<T[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${collection}?populate=*`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    return (json.data || []).map((item: StrapiItem) => ({
      id: String(item.id ?? item.attributes?.id ?? ""),
      ...(item.attributes ?? item)
    }) as T);
  } catch {
    return [];
  }
}

function normalizeAudience(audience: string): PricingPlan["audience"] {
  if (audience === "individuals") {
    return "students";
  }

  if (audience === "employers") {
    return "employees";
  }

  if (audience === "students" || audience === "employees" || audience === "colleges") {
    return audience;
  }

  return "colleges";
}

export async function getPricing(locale?: string | null): Promise<PricingPlan[]> {
  const data = await fetchCollection<PricingPlan>("pricings");
  const currency = detectCurrency(locale);
  const audienceOrder = { students: 0, employees: 1, colleges: 2 };
  const plans = (data.length ? data : fallbackPricing)
    .map((plan) => ({
      ...plan,
      audience: normalizeAudience(String(plan.audience || ""))
    }))
    .sort((a, b) => audienceOrder[a.audience] - audienceOrder[b.audience]);

  return plans.map((plan) => ({
    ...plan,
    price: formatPrice(plan.price, currency)
  }));
}

export async function getBlogs(): Promise<BlogPost[]> {
  const data = await fetchCollection<BlogPost>("blogs");
  return data.length ? data : fallbackBlogs;
}

export async function getContacts(): Promise<ContactEntry[]> {
  const data = await fetchCollection<ContactEntry>("contacts");
  return data;
}

export const fallbackPricing: PricingPlan[] = [
  {
    id: "starter",
    audience: "students",
    name: "Starter",
    price: "Free",
    cadence: "",
    description: "A free plan for building interview-ready skill profiles.",
    features: ["Resume builder", "5 AI mock interviews", "Daily job matches", "Career roadmap"]
  },
  {
    id: "pro",
    audience: "employees",
    name: "Pro",
    price: "Per month",
    cadence: "",
    description: "A monthly plan for structured hiring workflows and interview prep.",
    badge: "POPULAR",
    highlighted: true,
    features: ["Unlimited resumes", "Unlimited AI interviews", "Role coaching", "Salary benchmarks"]
  },
  {
    id: "annual",
    audience: "colleges",
    name: "Annual",
    price: "Per year",
    cadence: "",
    description: "An annual plan for scale, reporting, and recruiter-facing placement workflows.",
    features: ["Unlimited students", "Placement analytics", "Faculty access", "Recruiter network"]
  }
];

export const fallbackBlogs: BlogPost[] = [
  {
    id: "1",
    title: "How AI mock interviews improve placement readiness",
    slug: "ai-mock-interviews-placement-readiness",
    excerpt: "A practical guide for turning interview practice into measurable placement outcomes.",
    category: "AI",
    readTime: "6 min"
  },
  {
    id: "2",
    title: "What recruiters should track before time-to-hire slips",
    slug: "recruiter-time-to-hire-metrics",
    excerpt: "Pipeline velocity, source mix, and scorecard quality tell the story early.",
    category: "Hiring",
    readTime: "5 min"
  },
  {
    id: "3",
    title: "A placement-cell dashboard that leadership actually reads",
    slug: "placement-dashboard-leadership",
    excerpt: "Move from anecdotal updates to cohort-level reporting with useful benchmarks.",
    category: "Colleges",
    readTime: "7 min"
  }
];
