export default function GhostButton({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const variantStyles = {
    default: "border-violet-600 text-white hover:bg-violet-600/10",
    danger: "border-red-500 text-red-500 hover:bg-red-500/10",
  };

  return (
    <button
      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 ${variantStyles[variant]} font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
