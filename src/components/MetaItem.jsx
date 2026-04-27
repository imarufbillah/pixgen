export default function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-[#0f1318] rounded-lg border border-white/5">
      <div className="text-violet-400">
        <Icon size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-slate-500">{label}</span>
        <span className="text-sm font-medium text-white">{value}</span>
      </div>
    </div>
  );
}
