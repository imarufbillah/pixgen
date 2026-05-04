export default function PricingSkeleton() {
  return (
    <div className="w-full min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-8">
            <div className="h-10 bg-white/10 rounded w-64 mx-auto mb-4 skeleton" />
            <div className="h-6 bg-white/10 rounded w-96 max-w-full mx-auto skeleton" />
          </div>
          <div className="h-5 bg-white/10 rounded w-150 max-w-full mx-auto skeleton" />
        </div>

        {/* Pricing Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0f1318] flex flex-col"
            >
              {/* Icon skeleton */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 skeleton" />

              {/* Title skeleton */}
              <div className="h-8 bg-white/10 rounded w-32 mx-auto mb-2 skeleton" />

              {/* Description skeleton */}
              <div className="h-4 bg-white/10 rounded w-full mx-auto mb-4 skeleton" />

              {/* Price skeleton */}
              <div className="mb-4">
                <div className="h-12 bg-white/10 rounded w-40 mx-auto mb-2 skeleton" />
              </div>

              {/* Features skeleton */}
              <div className="mb-8 grow">
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-white/10 rounded-full mt-0.5 skeleton" />
                      <div className="h-4 bg-white/10 rounded flex-1 skeleton" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Button skeleton */}
              <div className="h-12 bg-white/10 rounded-full skeleton" />
            </div>
          ))}
        </div>

        {/* FAQ Section Skeleton */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="h-10 bg-white/10 rounded w-96 max-w-full mx-auto mb-12 skeleton" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((col) => (
              <div key={col} className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div className="h-6 bg-white/10 rounded w-48 mb-2 skeleton" />
                    <div className="space-y-2">
                      <div className="h-4 bg-white/10 rounded w-full skeleton" />
                      <div className="h-4 bg-white/10 rounded w-3/4 skeleton" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
