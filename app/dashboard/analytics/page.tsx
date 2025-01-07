export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-gray-700">
        <h1 className="font-mono text-2xl mb-2">ANALYTICS_</h1>
        <p className="font-mono text-sm text-gray-700">
          Statistiche dettagliate e trend delle tue recensioni.
        </p>
      </div>

      {/* Time Range Selector */}
      <div className="flex items-center gap-4">
        <select className="px-4 py-2 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="7d">ULTIMI 7 GIORNI</option>
          <option value="30d">ULTIMI 30 GIORNI</option>
          <option value="90d">ULTIMI 3 MESI</option>
          <option value="1y">ULTIMO ANNO</option>
        </select>
        
        <button className="px-4 py-2 font-mono text-sm bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
          ESPORTA REPORT
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Rating Trend */}
        <div className="border border-gray-700 p-6 col-span-full">
          <h3 className="font-mono text-lg mb-4">TREND VALUTAZIONI</h3>
          <div className="h-64 border-b border-l border-gray-700">
            {/* Placeholder for chart */}
            <div className="w-full h-full bg-gray-50"></div>
          </div>
        </div>

        {/* Response Time */}
        <div className="border border-gray-700 p-6">
          <h3 className="font-mono text-lg mb-4">TEMPO DI RISPOSTA</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between font-mono text-sm mb-2">
                <span>MEDIA</span>
                <span>4.2 ORE</span>
              </div>
              <div className="w-full h-2 bg-gray-100 border border-gray-700">
                <div className="w-1/2 h-full bg-accent" />
              </div>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                <div>
                  <div className="text-gray-700">PIÙ VELOCE</div>
                  <div>5 MINUTI</div>
                </div>
                <div>
                  <div className="text-gray-700">PIÙ LENTO</div>
                  <div>24 ORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sentiment Distribution */}
        <div className="border border-gray-700 p-6">
          <h3 className="font-mono text-lg mb-4">DISTRIBUZIONE SENTIMENT</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 border border-gray-700 rounded-full">
                {/* Placeholder for pie chart */}
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500"></span>
                  <span>POSITIVO (65%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500"></span>
                  <span>NEUTRO (25%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500"></span>
                  <span>NEGATIVO (10%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="border border-gray-700 p-6">
          <h3 className="font-mono text-lg mb-4">PAROLE CHIAVE</h3>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 border border-gray-700 font-mono text-sm">
              qualità (45)
            </div>
            <div className="px-3 py-1 border border-gray-700 font-mono text-sm">
              servizio (38)
            </div>
            <div className="px-3 py-1 border border-gray-700 font-mono text-sm">
              personale (32)
            </div>
            <div className="px-3 py-1 border border-gray-700 font-mono text-sm">
              professionale (28)
            </div>
            <div className="px-3 py-1 border border-gray-700 font-mono text-sm">
              prezzi (25)
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="border border-gray-700 p-6">
        <h3 className="font-mono text-lg mb-4">CONFRONTO PERIODI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="font-mono text-sm text-gray-700 mb-2">
              QUESTO MESE
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-sm">
                <span>RECENSIONI</span>
                <span>45 (+12%)</span>
              </div>
              <div className="flex justify-between font-mono text-sm">
                <span>MEDIA VOTO</span>
                <span>4.5 (+0.3)</span>
              </div>
              <div className="flex justify-between font-mono text-sm">
                <span>TEMPO RISPOSTA</span>
                <span>4.2h (-15%)</span>
              </div>
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-6">
            <div className="font-mono text-sm text-gray-700 mb-2">
              MESE SCORSO
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-sm">
                <span>RECENSIONI</span>
                <span>40</span>
              </div>
              <div className="flex justify-between font-mono text-sm">
                <span>MEDIA VOTO</span>
                <span>4.2</span>
              </div>
              <div className="flex justify-between font-mono text-sm">
                <span>TEMPO RISPOSTA</span>
                <span>4.9h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 