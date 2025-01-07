interface Stats {
  averageRating: number;
  totalReviews: number;
  positiveSentiment: number;
}

interface HeaderProps {
  stats: Stats;
  onNewResponse: () => void;
  onNotificationsClick: () => void;
  hasNotifications?: boolean;
}

export function Header({ 
  stats, 
  onNewResponse, 
  onNotificationsClick,
  hasNotifications = false 
}: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-700 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="font-mono text-sm text-gray-700">
        <span className="text-black">{stats.averageRating}</span> Media recensioni
        <span className="mx-4">•</span>
        <span className="text-black">{stats.totalReviews}</span> Recensioni totali
        <span className="mx-4">•</span>
        <span className="text-green-500">{stats.positiveSentiment}%</span> Sentiment positivo
      </div>
      <div className="flex items-center gap-4">
        <button 
          className="font-mono text-sm text-gray-700 hover:text-black transition-colors relative"
          onClick={onNotificationsClick}
        >
          NOTIFICHE
          {hasNotifications && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
          )}
        </button>
        <button 
          className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform"
          onClick={onNewResponse}
        >
          NUOVA RISPOSTA
        </button>
      </div>
    </header>
  );
} 