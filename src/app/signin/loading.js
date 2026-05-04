export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/10 via-[#080b10] to-cyan-900/10" />

      {/* Sign In Card Skeleton */}
      <div className="relative z-10 w-full max-w-md mx-4 sm:mx-auto">
        <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-violet-500/10">
          {/* Logo skeleton */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <div className="w-7 h-7 bg-white/10 rounded skeleton" />
            <div className="h-8 bg-white/10 rounded w-32 skeleton" />
          </div>

          {/* Title skeleton */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="h-8 bg-white/10 rounded w-48 mx-auto mb-2 skeleton" />
            <div className="h-5 bg-white/10 rounded w-64 mx-auto skeleton" />
          </div>

          {/* Form skeleton */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Email field */}
            <div>
              <div className="h-4 bg-white/10 rounded w-16 mb-2 skeleton" />
              <div className="h-12 bg-white/10 rounded-lg skeleton" />
            </div>

            {/* Password field */}
            <div>
              <div className="h-4 bg-white/10 rounded w-20 mb-2 skeleton" />
              <div className="h-12 bg-white/10 rounded-lg skeleton" />
            </div>

            {/* Remember me & forgot password */}
            <div className="flex items-center justify-between">
              <div className="h-4 bg-white/10 rounded w-24 skeleton" />
              <div className="h-4 bg-white/10 rounded w-32 skeleton" />
            </div>

            {/* Submit button */}
            <div className="h-12 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 rounded-full mt-2 skeleton" />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5 sm:my-6">
            <div className="flex-1 h-px bg-white/10" />
            <div className="h-4 bg-white/10 rounded w-32 skeleton" />
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google button */}
          <div className="h-12 bg-white/10 rounded-lg skeleton" />

          {/* Sign up link */}
          <div className="h-4 bg-white/10 rounded w-48 mx-auto mt-5 sm:mt-6 skeleton" />
        </div>
      </div>
    </div>
  );
}
