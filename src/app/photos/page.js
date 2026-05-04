"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CategoryPill from "@/components/CategoryPill";
import ImageCard from "@/components/ImageCard";
import { images, categories } from "@/data/images";

export default function AllPhotos() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  // Get count for current category
  const imageCount = filteredImages.length;

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <div className="w-full min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-8 sm:mb-12 animate-fade-in">
          <SectionHeader
            title="All Photos"
            subtitle={`Discover AI-generated art across every style and category • ${imageCount} ${imageCount === 1 ? "image" : "images"} ${activeCategory !== "All" ? `in ${activeCategory}` : "total"}`}
          />
        </header>

        {/* Filter Bar */}
        <nav
          className="mb-8 sm:mb-12 overflow-hidden pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 animate-fade-in"
          aria-label="Category filters"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Filter size={18} className="text-violet-400" />
            <span className="text-sm text-slate-400 font-medium">
              Filter by category:
            </span>
          </div>
          <div
            className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap"
            role="group"
          >
            {categories.map((category, index) => (
              <div
                key={category}
                className="animate-fade-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <CategoryPill
                  active={activeCategory === category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </CategoryPill>
              </div>
            ))}
          </div>
        </nav>

        {/* Photo Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-300 ${
            isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"
          }`}
          role="list"
        >
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <article
                key={image.id}
                role="listitem"
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ImageCard image={image} />
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12 animate-fade-in-scale">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center border border-violet-500/30">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-syne">
                  No images found
                </h3>
                <p className="text-slate-400 text-base mb-4">
                  No images found in the &quot;{activeCategory}&quot; category.
                </p>
                <p className="text-slate-500 text-sm mb-6">
                  Try selecting a different category or view all images.
                </p>
                <button
                  onClick={() => handleCategoryChange("All")}
                  className="px-6 py-3 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600/30 hover:text-violet-300 transition-all duration-300 border border-violet-500/30 hover:scale-105 active:scale-95 font-medium"
                >
                  View All Images →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
