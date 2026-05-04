export default function NavbarSkeleton() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080b10]/80 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white/10 rounded skeleton" />
            <div className="h-6 bg-white/10 rounded w-24 skeleton" />
          </div>

          {/* Desktop Navigation Skeleton */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-white/10 rounded w-20 skeleton" />
            ))}
          </div>

          {/* Desktop Auth Buttons Skeleton */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="h-4 bg-white/10 rounded w-16 skeleton" />
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 skeleton" />
            </div>
            <div className="h-9 bg-white/10 rounded-full w-20 skeleton" />
          </div>

          {/* Mobile Menu Button Skeleton */}
          <div className="md:hidden">
            <div className="w-6 h-6 bg-white/10 rounded skeleton" />
          </div>
        </div>
      </div>
    </nav>
  );
}
