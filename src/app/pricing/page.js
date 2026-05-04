import PricingClient from "./PricingClient";

export const metadata = {
  title: "Pricing - Choose Your PixGen Plan",
  description:
    "Choose the perfect PixGen plan for your AI art needs. From free tier to professional plans with unlimited generations, premium models, and commercial licensing.",
  keywords: [
    "AI art pricing",
    "PixGen plans",
    "AI image generation subscription",
    "Stable Diffusion pricing",
    "Midjourney alternative",
    "AI art commercial license",
  ],
  openGraph: {
    title: "PixGen Pricing - AI Art Generation Plans",
    description:
      "Choose from Free, Pro, or Enterprise plans. Generate stunning AI art with premium models and commercial licensing.",
    url: "https://pixgen-by-marufbillah.vercel.app/pricing",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "PixGen Pricing Plans",
      },
    ],
  },
  alternates: {
    canonical: "https://pixgen-by-marufbillah.vercel.app/pricing",
  },
};

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI art generation",
      icon: "Sparkles",
      features: [
        "10 generations per month",
        "Basic AI models (Stable Diffusion)",
        "Standard resolution (512x512)",
        "Community gallery access",
        "Basic prompt templates",
        "Personal use license",
      ],
      limitations: [
        "Watermarked images",
        "No commercial use",
        "Limited model access",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "ghost",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For creators and professionals who need more power",
      icon: "Zap",
      features: [
        "500 generations per month",
        "Premium AI models (SDXL, Midjourney, DALL-E)",
        "High resolution up to 2048x2048",
        "Priority generation queue",
        "Advanced editing tools",
        "Custom style training",
        "Commercial use license",
        "No watermarks",
        "Priority support",
      ],
      limitations: [],
      buttonText: "Start Pro Trial",
      buttonVariant: "gradient",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For teams and businesses with high-volume needs",
      icon: "Crown",
      features: [
        "Unlimited generations",
        "All premium AI models",
        "Ultra-high resolution (4K+)",
        "Instant generation (no queue)",
        "API access",
        "Custom model fine-tuning",
        "Team collaboration tools",
        "White-label solutions",
        "Extended commercial license",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "ghost",
      popular: false,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PixGen AI Art Generation",
    description:
      "AI-powered image generation platform with multiple pricing tiers",
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: `PixGen ${plan.name}`,
      price: plan.price.replace("$", ""),
      priceCurrency: "USD",
      description: plan.description,
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient plans={plans} />
    </>
  );
}
