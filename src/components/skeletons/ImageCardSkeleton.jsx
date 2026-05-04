export default function ImageCardSkeleton() {
  return (
    <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-white/10 bg-[#0f1318]">
      {/* Image skeleton */}
      <div className="absolute inset-0 skeleton" />

      {/* Content overlay skeleton */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-linear-to-t from-black/80 to-transparent">
        {/* Title skeleton */}
        <div className="h-5 sm:h-6 bg-white/10 rounded mb-2 w-3/4 skeleton" />

        {/* Category badge skeleton */}
        <div className="h-6 bg-white/10 rounded-full w-20 mb-3 skeleton" />

        {/* Stats skeleton */}
        <div className="flex items-center gap-4 mb-3">
          <div className="h-4 bg-white/10 rounded w-12 skeleton" />
          <div className="h-4 bg-white/10 rounded w-12 skeleton" />
        </div>

        {/* Button skeleton */}
        <div className="h-8 bg-white/10 rounded-lg skeleton" />
      </div>
    </div>
  );
}
