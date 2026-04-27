import Image from "next/image";
import Link from "next/link";
import { Heart, Download } from "lucide-react";

export default function ImageCard({ image }) {
  return (
    <Link href={`/photos/${image.id}`}>
      <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#0f1318] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
        <Image
          src={image.imageUrl}
          alt={image.title}
          fill
          className="object-cover"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex-1">
                <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2 font-[family-name:var(--font-syne)] line-clamp-1">
                  {image.title}
                </h3>
                <span className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-violet-600/30 text-cyan-300 backdrop-blur-sm">
                  {image.category}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1">
                  <Heart size={14} className="text-violet-400" />
                  <span>{image.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download size={14} className="text-cyan-400" />
                  <span>{image.downloads.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
