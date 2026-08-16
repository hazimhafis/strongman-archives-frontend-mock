export function DirectoryHeroMark() {
  return (
    <div className="relative size-[112px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-primary/15 shadow-inner">
      <svg viewBox="0 0 112 112" className="size-full" aria-hidden>
        <defs>
          <linearGradient id="trophy-glow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path
          d="M36 78c0-10 8-16 20-16s20 6 20 16"
          fill="none"
          stroke="url(#trophy-glow)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M48 46h16c2 0 4 2 4 5v6c0 6-4 11-12 11s-12-5-12-11v-6c0-3 2-5 4-5Z"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
        />
        <path d="M52 68h8v6h-8z" fill="#3b82f6" opacity="0.9" />
        <path d="M46 74h20v3H46z" fill="#93c5fd" opacity="0.8" />
        <circle cx="28" cy="58" r="9" fill="none" stroke="#e8edf5" strokeWidth="1.8" />
        <path d="M22 70c0-6 3-10 6-10s6 4 6 10" fill="none" stroke="#e8edf5" strokeWidth="1.8" />
        <circle cx="84" cy="58" r="9" fill="none" stroke="#e8edf5" strokeWidth="1.8" />
        <path d="M78 70c0-6 3-10 6-10s6 4 6 10" fill="none" stroke="#e8edf5" strokeWidth="1.8" />
        <circle cx="56" cy="52" r="10" fill="none" stroke="#f8fafc" strokeWidth="2" />
        <path d="M46 78c2-8 6-12 10-12s8 4 10 12" fill="none" stroke="#f8fafc" strokeWidth="2" />
      </svg>
    </div>
  )
}
