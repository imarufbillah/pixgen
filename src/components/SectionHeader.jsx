export default function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-violet-600 to-cyan-500 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-syne)]">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-slate-400 text-lg ml-7">
          {subtitle}
        </p>
      )}
    </div>
  );
}
