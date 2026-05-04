export default function ProfileSkeleton() {
  return (
    <div className="w-full min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Profile Card Skeleton */}
        <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col items-center text-center">
            {/* Avatar skeleton */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 mb-4 sm:mb-6 skeleton" />

            {/* Name skeleton */}
            <div className="h-8 sm:h-10 bg-white/10 rounded w-48 mb-2 skeleton" />

            {/* Email skeleton */}
            <div className="h-5 bg-white/10 rounded w-64 mb-4 sm:mb-6 skeleton" />

            {/* Button skeleton */}
            <div className="h-10 bg-white/10 rounded-full w-32 skeleton" />
          </div>
        </div>

        {/* Stats Section Skeleton */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#0f1318] border border-white/10 rounded-xl p-4 sm:p-6 text-center"
            >
              <div className="h-8 bg-white/10 rounded w-12 mx-auto mb-2 skeleton" />
              <div className="h-4 bg-white/10 rounded w-16 mx-auto skeleton" />
            </div>
          ))}
        </div>

        {/* Activity Section Skeleton */}
        <div>
          <div className="mb-6 sm:mb-8">
            <div className="h-8 bg-white/10 rounded w-48 mb-2 skeleton" />
            <div className="h-5 bg-white/10 rounded w-64 skeleton" />
          </div>

          <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 mx-auto mb-4 sm:mb-6 skeleton" />
            <div className="h-6 bg-white/10 rounded w-48 mx-auto mb-2 skeleton" />
            <div className="h-4 bg-white/10 rounded w-96 max-w-full mx-auto skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
}
