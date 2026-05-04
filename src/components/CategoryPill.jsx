export default function CategoryPill({
  children,
  active = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden group ${
        active
          ? "bg-linear-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30 scale-105"
          : "bg-[#0f1318] text-slate-400 hover:text-white hover:border-violet-500/30 hover:scale-105 active:scale-95"
      } ${className}`}
      {...props}
    >
      {!active && (
        <span className="absolute inset-0 bg-linear-to-r from-violet-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center gap-1.5">
        {active && (
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        )}
        {children}
      </span>
    </button>
  );
}
