"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Download, Eye } from "lucide-react";
import { useState } from "react";

export default function ImageCard({ image }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/photos/${image.id}`} 
      aria-label={`View details of ${image.title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative aspect-4/3 rounded-xl overflow-hidden border border-white/10 bg-[#0f1318] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/30">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton" />
        )}
        
        <Image
          src={image.imageUrl}
          alt={`${image.title} - ${image.category} AI art`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className={`object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient overlay - always visible but subtle */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Overlay Content */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex-1">
                <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2 font-syne line-clamp-1 transform translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300">
                  {image.title}
                </h3>
                <span className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-violet-600/40 text-cyan-300 backdrop-blur-sm border border-violet-500/30 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                  {image.category}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2 sm:mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1 hover:text-violet-400 transition-colors">
                  <Heart size={14} className="text-violet-400" />
                  <span>{image.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  <Download size={14} className="text-cyan-400" />
                  <span>{image.downloads.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-linear-to-r from-violet-600 to-cyan-500 text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100 flex items-center justify-center gap-2 active:scale-95">
              <Eye size={16} />
              View Details
            </button>
          </div>
        </div>

        {/* Quick stats - visible on mobile without hover */}
        <div className="absolute top-3 right-3 flex gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-1 text-xs text-white">
            <Heart size={12} className="text-violet-400" />
            <span>{image.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
