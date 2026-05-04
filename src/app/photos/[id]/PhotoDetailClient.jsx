"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Download, Cpu, Maximize2, Calendar } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import MetaItem from "@/components/MetaItem";

export default function PhotoDetailClient({ image }) {
  // Animation variants with smoother settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      className="w-full min-h-screen py-8 sm:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Image */}
          <motion.figure
            className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10 group"
            variants={imageVariants}
          >
            <Image
              src={image.imageUrl}
              alt={`${image.title} - ${image.category} AI art generated with ${image.model}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.figure>

          {/* Right Column - Details */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Category Badge */}
            <motion.div variants={slideInRightVariants}>
              <motion.span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-violet-600/20 text-cyan-400 border border-violet-500/30 cursor-default"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                {image.category}
              </motion.span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-syne"
              variants={slideInRightVariants}
            >
              {image.title}
            </motion.h1>

            {/* Prompt Section */}
            <motion.div
              className="flex flex-col gap-3"
              variants={fadeInVariants}
            >
              <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-violet-500 rounded-full" />
                Prompt
              </h2>
              <motion.div
                className="p-3 sm:p-4 bg-[#0f1318] border border-white/10 rounded-lg group cursor-default"
                whileHover={{
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed group-hover:text-white transition-colors duration-300">
                  {image.prompt}
                </p>
              </motion.div>
            </motion.div>

            {/* Meta Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              variants={fadeInVariants}
            >
              <MetaItem icon={Cpu} label="Model" value={image.model} />
              <MetaItem
                icon={Maximize2}
                label="Resolution"
                value={image.resolution}
              />
              <MetaItem
                icon={Heart}
                label="Likes"
                value={image.likes.toLocaleString()}
              />
              <MetaItem
                icon={Download}
                label="Downloads"
                value={image.downloads.toLocaleString()}
              />
              <MetaItem
                icon={Calendar}
                label="Created"
                value={new Date(image.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              />
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex flex-col gap-3"
              variants={fadeInVariants}
            >
              <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-cyan-500 rounded-full" />
                Tags
              </h2>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={tagContainerVariants}
              >
                {image.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20 text-slate-300 cursor-pointer"
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(139, 92, 246, 0.5)",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    #{tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4"
              variants={fadeInVariants}
            >
              <GhostButton className="flex-1">
                <Heart size={18} />
                <span>Like</span>
              </GhostButton>
              <GradientButton className="flex-1">
                <Download size={18} />
                <span>Download</span>
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
