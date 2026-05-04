"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  Download,
  Cpu,
  Maximize2,
  Calendar,
  Copy,
  Check,
  Share2,
} from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import MetaItem from "@/components/MetaItem";
import { toast } from "sonner";

export default function PhotoDetailClient({ image, allImages }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // ESC - Go back
      if (e.key === "Escape") {
        router.back();
      }

      // Arrow keys - Navigate between images
      if (allImages && allImages.length > 0) {
        const currentIndex = allImages.findIndex((img) => img.id === image.id);

        if (e.key === "ArrowLeft" && currentIndex > 0) {
          // Previous image
          router.push(`/photos/${allImages[currentIndex - 1].id}`);
        } else if (
          e.key === "ArrowRight" &&
          currentIndex < allImages.length - 1
        ) {
          // Next image
          router.push(`/photos/${allImages[currentIndex + 1].id}`);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [image.id, allImages, router]);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(image.prompt);
      setCopied(true);
      toast.success("Prompt copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy prompt");
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this amazing AI-generated art: ${image.title}`;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title,
          text: `Check out this amazing AI-generated art: ${image.title}`,
          url: window.location.href,
        });
        toast.success("Shared successfully!");
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error("Failed to share");
        }
      }
    } else {
      toast.info("Share via social media buttons below");
    }
  };
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
              <div className="flex items-center justify-between">
                <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-violet-500 rounded-full" />
                  Prompt
                </h2>
                <motion.button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600/30 border border-violet-500/30 text-xs font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
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
              className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4"
              variants={fadeInVariants}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <GhostButton className="flex-1">
                  <Heart size={18} />
                  <span>Like</span>
                </GhostButton>
                <GradientButton className="flex-1">
                  <Download size={18} />
                  <span>Download</span>
                </GradientButton>
              </div>

              {/* Share Section */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Share2 size={14} className="text-cyan-400" />
                  Share
                </h3>
                <div className="flex gap-2">
                  <motion.button
                    onClick={handleNativeShare}
                    className="flex-1 px-4 py-2.5 rounded-lg bg-[#0f1318] border border-white/10 hover:border-violet-500/50 text-slate-300 hover:text-white transition-all text-sm font-medium flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 size={16} />
                    <span>Share</span>
                  </motion.button>
                  <motion.button
                    onClick={() => handleShare("twitter")}
                    className="px-4 py-2.5 rounded-lg bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 hover:bg-[#1DA1F2]/30 text-[#1DA1F2] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Share on Twitter"
                  >
                    <FaTwitter size={18} />
                  </motion.button>
                  <motion.button
                    onClick={() => handleShare("facebook")}
                    className="px-4 py-2.5 rounded-lg bg-[#1877F2]/20 border border-[#1877F2]/30 hover:bg-[#1877F2]/30 text-[#1877F2] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Share on Facebook"
                  >
                    <FaFacebook size={18} />
                  </motion.button>
                  <motion.button
                    onClick={() => handleShare("linkedin")}
                    className="px-4 py-2.5 rounded-lg bg-[#0A66C2]/20 border border-[#0A66C2]/30 hover:bg-[#0A66C2]/30 text-[#0A66C2] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Share on LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
