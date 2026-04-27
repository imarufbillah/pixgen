import Image from "next/image";
import { Heart, Download, Cpu, Maximize2, Calendar } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import MetaItem from "@/components/MetaItem";
import { images } from "@/data/images";

export default function PhotoDetails({ params }) {
  // In a real app, this would fetch based on params.id
  // For design purposes, we'll use the first image
  const image = images[0];

  return (
    <div className="w-full min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Image */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10">
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Category Badge */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-violet-600/20 text-cyan-400 border border-violet-500/30">
                {image.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-syne">
              {image.title}
            </h1>

            {/* Prompt Section */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Prompt
              </h2>
              <div className="p-3 sm:p-4 bg-[#0f1318] border border-white/10 rounded-lg">
                <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                  {image.prompt}
                </p>
              </div>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20 text-slate-300 hover:border-violet-500/50 hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
              <GhostButton className="flex-1 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Heart size={18} />
                Like
              </GhostButton>
              <GradientButton className="flex-1 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download size={18} />
                Download
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
