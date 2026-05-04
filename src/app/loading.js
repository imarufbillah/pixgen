export default function Loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Animated logo */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-[#080b10]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-violet-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </div>
        
        {/* Loading text */}
        <h2 className="text-xl font-bold text-white mb-2 font-syne">Loading PixGen</h2>
        <p className="text-slate-400 text-sm">Preparing your AI art experience...</p>
      </div>
    </div>
  );
}
