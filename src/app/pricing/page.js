import { Check, Sparkles, Zap, Crown } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import SectionHeader from "@/components/SectionHeader";

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
    url: "https://pixgen.app/pricing",
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
    canonical: "https://pixgen.app/pricing",
  },
};

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI art generation",
      icon: Sparkles,
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
      icon: Zap,
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
      icon: Crown,
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
      <div className="w-full min-h-screen py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <SectionHeader
              title="Choose Your Plan"
              subtitle="Start free, upgrade when you need more power"
              className="mb-8"
            />
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Whether you&apos;re exploring AI art or running a creative
              business, we have the perfect plan for your needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "border-violet-500/50 bg-linear-to-b from-violet-900/20 to-[#0f1318] shadow-2xl shadow-violet-500/20"
                      : "border-white/10 bg-[#0f1318] hover:border-white/20"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        plan.popular
                          ? "bg-linear-to-br from-violet-600 to-cyan-500"
                          : "bg-slate-800"
                      }`}
                    >
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-syne">
                      {plan.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check
                            className={`mt-0.5 shrink-0 ${
                              plan.popular
                                ? "text-violet-400"
                                : "text-green-400"
                            }`}
                            size={16}
                          />
                          <span className="text-slate-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    {plan.buttonVariant === "gradient" ? (
                      <GradientButton className="w-full py-3 text-base font-semibold">
                        {plan.buttonText}
                      </GradientButton>
                    ) : (
                      <GhostButton className="w-full py-3 text-base font-semibold">
                        {plan.buttonText}
                      </GhostButton>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12 font-syne">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Can I change plans anytime?
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Yes! You can upgrade or downgrade your plan at any time.
                    Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What happens to unused generations?
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Unused generations don&apos;t roll over to the next month.
                    We recommend choosing a plan that fits your monthly usage.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Do you offer refunds?
                  </h3>
                  <p className="text-slate-400 text-sm">
                    We offer a 30-day money-back guarantee for all paid plans.
                    No questions asked.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What AI models are included?
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Free includes Stable Diffusion. Pro adds SDXL, Midjourney,
                    and DALL-E. Enterprise includes all current and future
                    models.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Can I use images commercially?
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Pro and Enterprise plans include commercial licensing. Free
                    plan is for personal use only.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Is there an API available?
                  </h3>
                  <p className="text-slate-400 text-sm">
                    API access is included with Enterprise plans. Contact our
                    sales team for custom API solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="p-8 sm:p-12 rounded-2xl bg-linear-to-r from-violet-900/20 to-cyan-900/20 border border-violet-500/30">
              <h2 className="text-3xl font-bold text-white mb-4 font-syne">
                Ready to Create Amazing AI Art?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already using PixGen to bring
                their imagination to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton className="px-8 py-3 text-lg">
                  Start Free Trial
                </GradientButton>
                <GhostButton className="px-8 py-3 text-lg">
                  View Gallery
                </GhostButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
