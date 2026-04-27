import Image from "next/image";
import Link from "next/link";
import { Sparkles, Zap, Palette, TrendingUp } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import SectionHeader from "@/components/SectionHeader";
import ImageCard from "@/components/ImageCard";
import { images } from "@/data/images";

export default function Home() {
  const topImages = images.slice(0, 6);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-[#080b10] to-cyan-900/20" />
        
        {/* Floating Images */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-64 h-48 rounded-2xl overflow-hidden blur-sm float-1">
            <Image
              src="https://picsum.photos/seed/float1/400/300"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-40 right-20 w-72 h-56 rounded-2xl overflow-hidden blur-sm float-2">
            <Image
              src="https://picsum.photos/seed/float2/400/300"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-32 left-1/4 w-56 h-44 rounded-2xl overflow-hidden blur-sm float-3">
            <Image
              src="https://picsum.photos/seed/float3/400/300"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-20 right-1/3 w-64 h-52 rounded-2xl overflow-hidden blur-sm float-4">
            <Image
              src="https://picsum.photos/seed/float4/400/300"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles size={16} />
            <span>Powered by AI</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-syne)]">
            <div className="text-white mb-2">Create. Imagine.</div>
            <div className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Generate.
            </div>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Explore thousands of stunning AI-generated artworks, curated by style, mood, and model.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/photos">
              <GradientButton className="px-8 py-4 text-lg">
                Explore Gallery
              </GradientButton>
            </Link>
            <GhostButton className="px-8 py-4 text-lg">
              Learn More
            </GhostButton>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080b10] to-transparent" />
      </section>

      {/* Top Generations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          title="🔥 Top Generations"
          subtitle="Handpicked favorites from the community."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/photos">
            <GradientButton className="px-8 py-4">
              View All Photos →
            </GradientButton>
          </Link>
        </div>
      </section>

      {/* Why PixGen Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          title="Why PixGen?"
          subtitle="The ultimate platform for AI art enthusiasts."
          className="mb-12 text-center items-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="group p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-syne)]">
              Lightning Fast
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Browse thousands of AI-generated images with blazing-fast load times and smooth interactions.
            </p>
          </div>

          <div className="group p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Palette className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-syne)]">
              Diverse Styles
            </h3>
            <p className="text-slate-400 leading-relaxed">
              From cyberpunk to fantasy, abstract to photorealistic - discover art across every imaginable style.
            </p>
          </div>

          <div className="group p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-syne)]">
              Top Models
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Images generated by the latest AI models including Stable Diffusion XL, Midjourney, and DALL-E 3.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
