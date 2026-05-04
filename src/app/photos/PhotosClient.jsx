"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CategoryPill from "@/components/CategoryPill";
import ImageCard from "@/components/ImageCard";

export default function PhotosClient({ images, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  // Get count for current category
  const imageCount = filteredImages.length;

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const filterBarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const categoryPillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.header
          className="mb-8 sm:mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionHeader
            title="All Photos"
            subtitle={`Discover AI-generated art across every style and category • ${imageCount} ${imageCount === 1 ? "image" : "images"} ${activeCategory !== "All" ? `in ${activeCategory}` : "total"}`}
          />
        </motion.header>

        {/* Filter Bar */}
        <motion.nav
          className="mb-8 sm:mb-12 overflow-hidden pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          aria-label="Category filters"
          variants={filterBarVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-3 mb-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Filter size={18} className="text-violet-400" />
            <span className="text-sm text-slate-400 font-medium">
              Filter by category:
            </span>
          </motion.div>
          <motion.div
            className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap"
            role="group"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div key={category} variants={categoryPillVariants}>
                <CategoryPill
                  active={activeCategory === category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </CategoryPill>
              </motion.div>
            ))}
          </motion.div>
        </motion.nav>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          role="list"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.length > 0 ? (
              filteredImages.map((image, index) => (
                <motion.article
                  key={image.id}
                  role="listitem"
                  variants={gridItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  custom={index}
                  transition={{
                    layout: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                  }}
                >
                  <ImageCard image={image} />
                </motion.article>
              ))
            ) : (
              <motion.div
                key="empty-state"
                className="col-span-full text-center py-12"
                variants={emptyStateVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="max-w-md mx-auto">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center border border-violet-500/30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <span className="text-4xl">🎨</span>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-white mb-3 font-syne"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    No images found
                  </motion.h3>
                  <motion.p
                    className="text-slate-400 text-base mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    No images found in the &quot;{activeCategory}&quot;
                    category.
                  </motion.p>
                  <motion.p
                    className="text-slate-500 text-sm mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    Try selecting a different category or view all images.
                  </motion.p>
                  <motion.button
                    onClick={() => handleCategoryChange("All")}
                    className="px-6 py-3 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600/30 hover:text-violet-300 transition-all duration-300 border border-violet-500/30 font-medium"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Images →
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
