export default function GhostButton({
  children,
  className = "",
  variant = "default",
  disabled,
  ...props
}) {
  const variantStyles = {
    default: "border-violet-600 text-white hover:bg-violet-600/10",
    danger: "border-red-500 text-red-500 hover:bg-red-500/10",
  };

  return (
    <button
      className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 ${variantStyles[variant]} font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base overflow-hidden active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
      disabled={disabled}
      {...props}
    >
      <div
        className={`absolute inset-0 ${variant === "danger" ? "bg-red-500/5" : "bg-violet-600/5"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </button>
  );
}
