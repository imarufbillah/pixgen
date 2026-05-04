"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Image as ImageIcon, Sparkles } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";

export default function NotFoundClient() {
  // Animation variants
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

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <motion.div
        className="max-w-2xl w-full text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Number with Floating Icon */}
        <motion.div className="relative mb-8" variants={itemVariants}>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center border border-violet-500/30 backdrop-blur-sm">
              <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 text-violet-400" />
            </div>
          </motion.div>

          <motion.h1
            className="text-[120px] sm:text-[180px] md:text-[220px] font-bold font-syne leading-none"
            variants={numberVariants}
          >
            <span className="bg-linear-to-br from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              404
            </span>
          </motion.h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-syne"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-slate-400 mb-3 max-w-md mx-auto"
          variants={itemVariants}
        >
          Oops! The page you&apos;re looking for seems to have vanished into the
          digital void.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base text-slate-500 mb-8 max-w-md mx-auto"
          variants={itemVariants}
        >
          Don&apos;t worry though, there&apos;s plenty of amazing AI-generated
          art waiting for you!
        </motion.p>

        {/* Suggestions */}
        <motion.div
          className="flex flex-col gap-3 mb-8 max-w-sm mx-auto"
          variants={itemVariants}
        >
          <div className="p-4 bg-[#0f1318] border border-white/10 rounded-lg text-left">
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-violet-400" />
              Quick Suggestions
            </h3>
            <ul className="text-xs sm:text-sm text-slate-400 space-y-1">
              <li>• Check the URL for typos</li>
              <li>• The page may have been moved or deleted</li>
              <li>• Try searching from the homepage</li>
            </ul>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Link href="/" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <GradientButton className="w-full sm:w-auto">
                <Home size={18} />
                <span>Back to Home</span>
              </GradientButton>
            </motion.div>
          </Link>

          <Link href="/photos" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <GhostButton className="w-full sm:w-auto">
                <ImageIcon size={18} />
                <span>Browse Gallery</span>
              </GhostButton>
            </motion.div>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-20 h-20 border-2 border-violet-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-16 h-16 border-2 border-cyan-500/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        />
      </motion.div>
    </div>
  );
}
