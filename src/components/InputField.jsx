export default function InputField({
  label,
  type = "text",
  placeholder,
  className = "",
  error,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-300">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-[#0f1318] border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
          error 
            ? 'border-red-500 focus:ring-red-500/50' 
            : 'border-white/10 focus:ring-violet-600'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-xs ml-1">{error}</p>
      )}
    </div>
  );
}
