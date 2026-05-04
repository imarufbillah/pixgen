export default function GradientButton({ children, className = "", disabled, ...props }) {
  return (
    <button
      className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 active:scale-95 text-sm sm:text-base overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-linear-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
