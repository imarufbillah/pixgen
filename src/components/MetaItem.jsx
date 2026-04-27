export default function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#0f1318] rounded-lg border border-white/5">
      <div className="text-violet-400 flex-shrink-0">
        <Icon size={18} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-slate-500">{label}</span>
        <span className="text-xs sm:text-sm font-medium text-white truncate">{value}</span>
      </div>
    </div>
  );
}
