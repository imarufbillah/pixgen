export default function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="group flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#0f1318] rounded-lg border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 cursor-default">
      <div className="text-violet-400 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <Icon size={18} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
          {label}
        </span>
        <span className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-violet-400 transition-colors duration-300">
          {value}
        </span>
      </div>
    </div>
  );
}
