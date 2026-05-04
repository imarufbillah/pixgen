export default function PhotoDetailSkeleton() {
  return (
    <article className="w-full min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Image Skeleton */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1318] skeleton" />

          {/* Right Column - Details Skeleton */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Category Badge Skeleton */}
            <div className="h-8 bg-white/10 rounded-full w-24 skeleton" />

            {/* Title Skeleton */}
            <div className="space-y-3">
              <div className="h-10 sm:h-12 bg-white/10 rounded w-full skeleton" />
              <div className="h-10 sm:h-12 bg-white/10 rounded w-3/4 skeleton" />
            </div>

            {/* Prompt Section Skeleton */}
            <div className="flex flex-col gap-3">
              <div className="h-4 bg-white/10 rounded w-20 skeleton" />
              <div className="p-3 sm:p-4 bg-[#0f1318] border border-white/10 rounded-lg">
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded w-full skeleton" />
                  <div className="h-4 bg-white/10 rounded w-full skeleton" />
                  <div className="h-4 bg-white/10 rounded w-2/3 skeleton" />
                </div>
              </div>
            </div>

            {/* Meta Grid Skeleton */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#0f1318] rounded-lg border border-white/5">
                  <div className="w-5 h-5 bg-white/10 rounded skeleton" />
                  <div className="flex-1">
                    <div className="h-3 bg-white/10 rounded w-12 mb-1 skeleton" />
                    <div className="h-4 bg-white/10 rounded w-20 skeleton" />
                  </div>
                </div>
              ))}
            </div>

            {/* Tags Skeleton */}
            <div className="flex flex-col gap-3">
              <div className="h-4 bg-white/10 rounded w-16 skeleton" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-7 bg-white/10 rounded-full w-20 skeleton" />
                ))}
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
              <div className="flex-1 h-12 bg-white/10 rounded-full skeleton" />
              <div className="flex-1 h-12 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 rounded-full skeleton" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
