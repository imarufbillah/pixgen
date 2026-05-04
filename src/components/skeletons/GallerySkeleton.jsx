import ImageCardSkeleton from './ImageCardSkeleton';

export default function GallerySkeleton({ count = 6 }) {
  return (
    <div className="w-full min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Skeleton */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-violet-600 to-cyan-500 rounded-full" />
              <div className="h-8 sm:h-10 bg-white/10 rounded w-48 skeleton" />
            </div>
            <div className="h-5 bg-white/10 rounded w-96 max-w-full ml-5 sm:ml-7 skeleton" />
          </div>
        </header>

        {/* Filter Bar Skeleton */}
        <nav className="mb-8 sm:mb-12 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-5 bg-white/10 rounded skeleton" />
            <div className="h-4 bg-white/10 rounded w-32 skeleton" />
          </div>
          <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="h-8 bg-white/10 rounded-full w-24 skeleton" />
            ))}
          </div>
        </nav>

        {/* Photo Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: count }).map((_, index) => (
            <article key={index} role="listitem">
              <ImageCardSkeleton />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
