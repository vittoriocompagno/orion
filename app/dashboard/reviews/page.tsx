export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-700">
        <h1 className="font-mono text-2xl">RECENSIONI_</h1>
        
        <div className="flex flex-wrap items-center gap-4">
          <select className="px-4 py-2 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent">
            <option value="all">TUTTE LE RECENSIONI</option>
            <option value="positive">POSITIVE</option>
            <option value="neutral">NEUTRE</option>
            <option value="negative">NEGATIVE</option>
          </select>
          
          <select className="px-4 py-2 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent">
            <option value="recent">PIÙ RECENTI</option>
            <option value="oldest">MENO RECENTI</option>
            <option value="rating-high">VOTO: ALTO → BASSO</option>
            <option value="rating-low">VOTO: BASSO → ALTO</option>
          </select>

          <button className="px-4 py-2 font-mono text-sm bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
            ESPORTA CSV
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {/* Review Item */}
        <div className="border border-gray-700 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span className="font-mono">5.0</span>
              </div>
              <div className="font-mono text-sm text-gray-700">
                Mario R. • Google
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-mono text-sm text-gray-700">15 GEN 2024</div>
              <button className="font-mono text-sm text-accent hover:underline">
                VEDI SU GOOGLE →
              </button>
            </div>
          </div>
          
          <p className="font-mono text-sm mb-6">
            "Servizio eccellente, personale molto professionale. Tornerò sicuramente! La qualità è sempre al top e i prezzi sono competitivi."
          </p>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs text-gray-700">
                RISPOSTA AUTOMATICA INVIATA • 15 GEN 2024
              </div>
              <button className="font-mono text-sm text-accent hover:underline">
                MODIFICA RISPOSTA
              </button>
            </div>
            <p className="font-mono text-sm text-gray-700 mt-2">
              "Grazie mille per il tuo feedback positivo, Mario! Siamo felici che tu sia soddisfatto del nostro servizio."
            </p>
          </div>
        </div>

        {/* Review Item */}
        <div className="border border-gray-700 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">●</span>
                <span className="font-mono">3.0</span>
              </div>
              <div className="font-mono text-sm text-gray-700">
                Laura B. • Google
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-mono text-sm text-gray-700">14 GEN 2024</div>
              <button className="font-mono text-sm text-accent hover:underline">
                VEDI SU GOOGLE →
              </button>
            </div>
          </div>
          
          <p className="font-mono text-sm mb-6">
            "Buono ma migliorabile. I tempi di attesa sono un po' lunghi e il personale sembrava molto occupato."
          </p>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs text-gray-700">
                IN ATTESA DI RISPOSTA
              </div>
              <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
                RISPONDI
              </button>
            </div>
          </div>
        </div>

        {/* Review Item */}
        <div className="border border-gray-700 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                <span className="font-mono">2.0</span>
              </div>
              <div className="font-mono text-sm text-gray-700">
                Marco V. • Google
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-mono text-sm text-gray-700">13 GEN 2024</div>
              <button className="font-mono text-sm text-accent hover:underline">
                VEDI SU GOOGLE →
              </button>
            </div>
          </div>
          
          <p className="font-mono text-sm mb-6">
            "Esperienza deludente. Il servizio non era all'altezza delle aspettative."
          </p>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs text-gray-700">
                BOZZA SALVATA
              </div>
              <div className="flex items-center gap-2">
                <button className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                  ELIMINA BOZZA
                </button>
                <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
                  MODIFICA BOZZA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-700">
        <button className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
          ← PRECEDENTE
        </button>
        <div className="font-mono text-sm">
          PAGINA 1 DI 12
        </div>
        <button className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
          SUCCESSIVA →
        </button>
      </div>
    </div>
  );
} 