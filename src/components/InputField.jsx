export default function InputField({
  label,
  type = "text",
  placeholder,
  className = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-slate-300">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[#0f1318] border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-300"
        {...props}
      />
    </div>
  );
}
