export default function InputField({
  label,
  type = "text",
  placeholder,
  className = "",
  error,
  disabled,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-300 transition-colors duration-200">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 bg-[#0f1318] border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
            error 
              ? 'border-red-500 focus:ring-red-500/50' 
              : 'border-white/10 focus:ring-violet-600 hover:border-white/20'
          } ${className}`}
          {...props}
        />
        {error && (
          <div className="absolute -bottom-1 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        )}
      </div>
      {error && (
        <p className="text-red-400 text-xs ml-1 animate-fade-in flex items-center gap-1">
          <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
          {error}
        </p>
      )}
    </div>
  );
}
