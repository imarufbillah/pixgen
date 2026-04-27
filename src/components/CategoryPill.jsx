export default function CategoryPill({
  children,
  active = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
        active
          ? "bg-linear-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30"
          : "bg-[#0f1318] border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
