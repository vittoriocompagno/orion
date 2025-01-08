interface Stats {
  averageRating: number;
  totalReviews: number;
  positiveSentiment: number;
}

interface HeaderProps {
  stats: Stats;
  hasNotifications?: boolean;
}

export function Header({ 
  stats, 
  hasNotifications = false 
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50">
      <div className="h-16 bg-white/80 backdrop-blur-xl border-b border-black/5 px-6 flex items-center justify-between">
        <div className="font-mono text-sm text-gray-600">
          <span className="text-black font-bold">{stats.averageRating}</span> Media recensioni
          <span className="mx-4 text-black/20">•</span>
          <span className="text-black font-bold">{stats.totalReviews}</span> Recensioni totali
          <span className="mx-4 text-black/20">•</span>
          <span className="text-green-500 font-bold">{stats.positiveSentiment}%</span> Sentiment positivo
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="font-mono text-sm text-gray-600 hover:text-black transition-colors relative group"
          >
            NOTIFICHE
            {hasNotifications && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full" />
            )}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-50 transition-all group-hover:w-full" />
          </button>
        </div>
      </div>
    </header>
  );
} 