import Image from "next/image";
import Link from "next/link";
import { Sparkles, Zap, Palette, TrendingUp } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import SectionHeader from "@/components/SectionHeader";
import ImageCard from "@/components/ImageCard";
import { images } from "@/data/images";

export const metadata = {
  title: "Home - Explore AI-Generated Art Gallery",
  description:
    "Discover thousands of stunning AI-generated artworks from Stable Diffusion, Midjourney, and DALL-E. Browse cyberpunk, fantasy, abstract, and photorealistic AI art. Join the PixGen community today.",
  openGraph: {
    title: "PixGen - AI Image Generation Gallery",
    description:
      "Explore thousands of stunning AI-generated artworks, curated by style, mood, and model.",
    url: "https://pixgen-by-marufbillah.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PixGen AI Art Gallery",
      },
    ],
  },
  alternates: {
    canonical: "https://pixgen-by-marufbillah.vercel.app",
  },
};

export default function Home() {
  const topImages = images.slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PixGen - AI Image Generation Gallery",
    description: "Explore thousands of stunning AI-generated artworks",
    url: "https://pixgen-by-marufbillah.vercel.app",
    mainEntity: {
      "@type": "ImageGallery",
      name: "AI-Generated Art Collection",
      description: "Curated collection of AI-generated images from various models"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture" aria-label="Hero section">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-[#080b10] to-cyan-900/20" />

        {/* Floating Images */}
        <div className="absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
          <div className="absolute top-20 left-10 w-64 h-48 rounded-2xl overflow-hidden blur-sm float-1">
            <Image
              src="https://picsum.photos/seed/float1/400/300"
              alt=""
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute top-40 right-20 w-72 h-56 rounded-2xl overflow-hidden blur-sm float-2">
            <Image
              src="https://picsum.photos/seed/float2/400/300"
              alt=""
              fill
              sizes="288px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-32 left-1/4 w-56 h-44 rounded-2xl overflow-hidden blur-sm float-3">
            <Image
              src="https://picsum.photos/seed/float3/400/300"
              alt=""
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-20 right-1/3 w-64 h-52 rounded-2xl overflow-hidden blur-sm float-4">
            <Image
              src="https://picsum.photos/seed/float4/400/300"
              alt=""
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
            <Sparkles size={16} />
            <span>Powered by AI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 font-syne">
            <span className="text-white mb-2 block">Create. Imagine.</span>
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent block">
              Generate.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Explore thousands of stunning AI-generated artworks from Stable Diffusion, Midjourney, and DALL-E. Curated by style, mood, and AI model.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link href="/photos">
              <GradientButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                Explore Gallery
              </GradientButton>
            </Link>
            <GhostButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Learn More
            </GhostButton>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#080b10] to-transparent" />
      </section>

      {/* Top Generations Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20" aria-labelledby="top-generations">
        <SectionHeader
          title="🔥 Top Generations"
          subtitle="Handpicked favorites from the community."
          className="mb-8 sm:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" role="list">
          {topImages.map((image) => (
            <article key={image.id} role="listitem">
              <ImageCard image={image} />
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <Link href="/photos">
            <GradientButton className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
              View All Photos →
            </GradientButton>
          </Link>
        </div>
      </section>

      {/* Why PixGen Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20" aria-labelledby="why-pixgen">
        <SectionHeader
          title="Why PixGen?"
          subtitle="The ultimate platform for AI art enthusiasts."
          className="mb-8 sm:mb-12 text-center items-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12" role="list">
          <article className="group p-6 sm:p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20" role="listitem">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-syne">
              Lightning Fast
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Browse thousands of AI-generated images with blazing-fast load
              times and smooth interactions.
            </p>
          </article>

          <article className="group p-6 sm:p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20" role="listitem">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <Palette className="text-white" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-syne">
              Diverse Styles
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              From cyberpunk to fantasy, abstract to photorealistic - discover
              art across every imaginable style.
            </p>
          </article>

          <article className="group p-6 sm:p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20" role="listitem">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-syne">
              Top Models
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Images generated by the latest AI models including Stable
              Diffusion XL, Midjourney, and DALL-E 3.
            </p>
          </article>
        </div>
      </section>
    </div>
    </>
  );
}
