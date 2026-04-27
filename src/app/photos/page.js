"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import CategoryPill from "@/components/CategoryPill";
import ImageCard from "@/components/ImageCard";
import { images, categories } from "@/data/images";

export default function AllPhotos() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="w-full min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <SectionHeader
            title="All Photos"
            subtitle="Discover AI-generated art across every style and category"
          />
        </div>

        {/* Filter Bar */}
        <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-3 min-w-max sm:min-w-0">
            {categories.map((category) => (
              <CategoryPill
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryPill>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}
