"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Eye, Heart, Users, Zap, Shield } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import GradientButton from "@/components/GradientButton";

export default function AboutClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const values = [
    {
      icon: Heart,
      title: "Passion for Art",
      description:
        "We believe AI is a powerful tool for creative expression, not a replacement for human creativity.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Building a supportive community where artists and enthusiasts can share, learn, and grow together.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Constantly pushing boundaries with the latest AI models and cutting-edge technology.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Committed to ethical AI use, content moderation, and protecting our community.",
    },
  ];

  const stats = [
    { value: "10K+", label: "AI Images" },
    { value: "5K+", label: "Active Users" },
    { value: "50+", label: "AI Models" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <motion.div
      className="w-full min-h-screen py-12 sm:py-16 lg:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div className="text-center mb-16 sm:mb-20" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles size={16} />
            <span>About PixGen</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-syne">
            Democratizing{" "}
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              AI Art
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            PixGen is on a mission to make AI-generated art accessible to everyone.
            We're building the ultimate platform for exploring, creating, and sharing
            stunning AI artwork.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 sm:mb-20"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#0f1318] rounded-2xl border border-white/10 text-center hover:border-violet-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-syne">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 sm:mb-20">
          <motion.div
            className="p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-syne">
              Our Mission
            </h2>
            <p className="text-slate-400 leading-relaxed">
              To empower creators worldwide with cutting-edge AI technology, making
              professional-quality art generation accessible to everyone. We believe
              that AI should augment human creativity, not replace it.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-6">
              <Eye className="text-white" size={28} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-syne">
              Our Vision
            </h2>
            <p className="text-slate-400 leading-relaxed">
              To become the world's leading platform for AI art, fostering a global
              community of creators who push the boundaries of what's possible with
              artificial intelligence and human imagination.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div variants={itemVariants}>
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
            className="mb-12 text-center items-center"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-16 sm:mb-20">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-[#0f1318] rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="text-violet-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-syne">
                        {value.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 sm:mb-20"
          variants={itemVariants}
        >
          <SectionHeader
            title="Our Story"
            subtitle="How PixGen came to be"
            className="mb-8 text-center items-center"
          />
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              PixGen was born from a simple observation: AI image generation was
              becoming incredibly powerful, but the tools were scattered, complex,
              and often inaccessible to everyday creators.
            </p>
            <p>
              In 2024, our founder Maruf Billah set out to change that. With a
              background in software engineering and a passion for digital art, he
              envisioned a platform that would make AI art generation as simple as
              browsing a photo gallery.
            </p>
            <p>
              Today, PixGen serves thousands of creators worldwide, from hobbyists
              exploring AI for the first time to professional artists using our
              platform for commercial projects. We've built integrations with the
              leading AI models including Stable Diffusion, Midjourney, and DALL-E,
              giving our users access to the best technology available.
            </p>
            <p>
              But we're just getting started. Our roadmap includes custom model
              training, collaborative features, and tools that will push the
              boundaries of what's possible with AI-generated art.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center p-8 sm:p-12 rounded-2xl bg-linear-to-r from-violet-900/20 to-cyan-900/20 border border-violet-500/30"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-syne">
            Join Our Community
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Be part of the AI art revolution. Start creating stunning artwork today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <GradientButton className="px-8 py-3 text-lg">
                Get Started Free
              </GradientButton>
            </Link>
            <Link href="/photos">
              <motion.button
                className="px-8 py-3 text-lg rounded-lg border border-white/20 text-white hover:border-violet-500/50 hover:bg-violet-600/10 transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Gallery
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
