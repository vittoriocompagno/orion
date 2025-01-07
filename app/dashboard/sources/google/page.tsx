export default function GoogleSourcePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-mono text-2xl mb-2">GOOGLE BUSINESS PROFILE_</h1>
            <p className="font-mono text-sm text-gray-700">
              Configura l'integrazione con Google Business Profile.
            </p>
          </div>
          <div className="px-4 py-2 border border-green-500 rounded-sm">
            <div className="font-mono text-sm text-green-500">CONNESSO</div>
          </div>
        </div>
      </div>

      {/* Configuration */}
      <div className="space-y-6">
        <div className="border border-gray-700 p-6">
          <h2 className="font-mono text-xl mb-6">CONFIGURAZIONE</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block font-mono text-sm text-gray-700">
                GOOGLE PLACE ID
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value="ChIJ2eUgeAK6j4ARbn5u_wAGqWA"
                  readOnly
                  className="flex-1 px-4 py-3 font-mono text-sm bg-gray-50 border border-gray-700"
                />
                <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
                  MODIFICA
                </button>
              </div>
              <p className="font-mono text-xs text-gray-700">
                ID univoco della tua attività su Google Business Profile.
              </p>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-sm text-gray-700">
                SINCRONIZZAZIONE
              </label>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked readOnly className="w-4 h-4 border border-gray-700" />
                <span className="font-mono text-sm">Sincronizza automaticamente ogni ora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border border-gray-700 p-6">
          <h2 className="font-mono text-xl mb-6">STATISTICHE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-mono text-sm text-gray-700 mb-1">
                ULTIMA SINCRONIZZAZIONE
              </div>
              <div className="font-mono text-lg">2 MINUTI FA</div>
            </div>
            <div>
              <div className="font-mono text-sm text-gray-700 mb-1">
                RECENSIONI SINCRONIZZATE
              </div>
              <div className="font-mono text-lg">128</div>
            </div>
            <div>
              <div className="font-mono text-sm text-gray-700 mb-1">
                MEDIA VALUTAZIONI
              </div>
              <div className="font-mono text-lg">4.8</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="border border-gray-700 p-6">
          <h2 className="font-mono text-xl mb-6">AZIONI</h2>
          
          <div className="space-y-4">
            <button className="w-full font-mono text-sm px-4 py-3 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
              SINCRONIZZA ORA
            </button>
            <button className="w-full font-mono text-sm px-4 py-3 text-red-500 border border-red-500 hover:translate-y-[-2px] transition-transform">
              DISCONNETTI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 