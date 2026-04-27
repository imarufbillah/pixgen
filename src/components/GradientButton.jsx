export default function GradientButton({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 text-sm sm:text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
