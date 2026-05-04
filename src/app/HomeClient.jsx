"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Zap, Palette, TrendingUp } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import SectionHeader from "@/components/SectionHeader";
import ImageCard from "@/components/ImageCard";

export default function HomeClient({ topImages }) {
  const handleLearnMore = () => {
    const whySection = document.getElementById("why-pixgen");
    if (whySection) {
      whySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingImageVariants = {
    animate: (custom) => ({
      y: [0, -20, 0],
      rotate: [0, custom * 2, 0],
      transition: {
        duration: 3 + custom * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture"
        aria-label="Hero section"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-radial from-violet-900/20 via-[#080b10] to-cyan-900/20" />

        {/* Floating Images */}
        <div
          className="absolute inset-0 overflow-hidden opacity-20"
          aria-hidden="true"
        >
          <motion.div
            className="absolute top-20 left-10 w-64 h-48 rounded-2xl overflow-hidden blur-sm"
            variants={floatingImageVariants}
            animate="animate"
            custom={1}
          >
            <Image
              src="https://picsum.photos/seed/float1/400/300"
              alt=""
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 w-72 h-56 rounded-2xl overflow-hidden blur-sm"
            variants={floatingImageVariants}
            animate="animate"
            custom={2}
          >
            <Image
              src="https://picsum.photos/seed/float2/400/300"
              alt=""
              fill
              sizes="288px"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4 w-56 h-44 rounded-2xl overflow-hidden blur-sm"
            variants={floatingImageVariants}
            animate="animate"
            custom={3}
          >
            <Image
              src="https://picsum.photos/seed/float3/400/300"
              alt=""
              fill
              sizes="224px"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-1/3 w-64 h-52 rounded-2xl overflow-hidden blur-sm"
            variants={floatingImageVariants}
            animate="animate"
            custom={4}
          >
            <Image
              src="https://picsum.photos/seed/float4/400/300"
              alt=""
              fill
              sizes="256px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={badgeVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles size={16} className="animate-pulse" />
              <span>Powered by AI</span>
            </motion.div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 font-syne">
            <motion.span
              className="text-white mb-2 block"
              variants={titleVariants}
            >
              Create. Imagine.
            </motion.span>
            <motion.span
              className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent block animate-gradient"
              variants={titleVariants}
              transition={{ delay: 0.2 }}
            >
              Generate.
            </motion.span>
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            variants={itemVariants}
          >
            Explore thousands of stunning AI-generated artworks from Stable
            Diffusion, Midjourney, and DALL-E. Curated by style, mood, and AI
            model.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
            variants={itemVariants}
          >
            <Link href="/photos">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <GradientButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                  Explore Gallery
                </GradientButton>
              </motion.div>
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <GhostButton
                onClick={handleLearnMore}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                Learn More
              </GhostButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#080b10] to-transparent" />
      </section>

      {/* Top Generations Section */}
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        aria-labelledby="top-generations"
      >
        <SectionHeader
          title="🔥 Top Generations"
          subtitle="Handpicked favorites from the community."
          className="mb-8 sm:mb-12"
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          role="list"
        >
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
      <section
        id="why-pixgen"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        aria-labelledby="why-pixgen"
      >
        <SectionHeader
          title="Why PixGen?"
          subtitle="The ultimate platform for AI art enthusiasts."
          className="mb-8 sm:mb-12 text-center items-center"
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
          role="list"
        >
          <article
            className="group p-6 sm:p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/20 hover:transform hover:scale-105 cursor-default"
            role="listitem"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              aria-hidden="true"
            >
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-syne group-hover:text-violet-400 transition-colors duration-300">
              Lightning Fast
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              Browse thousands of AI-generated images with blazing-fast load
              times and smooth interactions.
            </p>
          </article>

          <article
            className="group p-6 sm:p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/20 hover:transform hover:scale-105 cursor-default"
            role="listitem"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              aria-hidden="true"
            >
              <Palette className="text-white" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-syne group-hover:text-violet-400 transition-colors duration-300">
              Diverse Styles
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              From cyberpunk to fantasy, abstract to photorealistic - discover
              art across every imaginable style.
            </p>
          </article>

          <article
            className="group p-6 sm:p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/20 hover:transform hover:scale-105 cursor-default"
            role="listitem"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              aria-hidden="true"
            >
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-syne group-hover:text-violet-400 transition-colors duration-300">
              Top Models
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              Images generated by the latest AI models including Stable
              Diffusion XL, Midjourney, and DALL-E 3.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
