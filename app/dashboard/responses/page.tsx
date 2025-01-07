export default function ResponsesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-gray-700">
        <h1 className="font-mono text-2xl mb-2">RISPOSTE AUTOMATICHE_</h1>
        <p className="font-mono text-sm text-gray-700">
          Configura le risposte automatiche per diversi tipi di recensioni.
        </p>
      </div>

      {/* Response Templates */}
      <div className="space-y-6">
        {/* Positive Reviews Template */}
        <div className="border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-green-500">●</span>
              <h2 className="font-mono text-xl">RECENSIONI POSITIVE</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                RIPRISTINA DEFAULT
              </button>
              <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
                SALVA
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">
                TEMPLATE RISPOSTA
              </label>
              <textarea 
                className="w-full h-32 px-4 py-3 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Grazie per il tuo feedback positivo! Siamo felici che tu sia soddisfatto del nostro servizio."
              ></textarea>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 border border-gray-700" />
              <label className="font-mono text-sm text-gray-700">
                INVIA AUTOMATICAMENTE
              </label>
            </div>
          </div>
        </div>

        {/* Neutral Reviews Template */}
        <div className="border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">●</span>
              <h2 className="font-mono text-xl">RECENSIONI NEUTRE</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                RIPRISTINA DEFAULT
              </button>
              <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
                SALVA
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">
                TEMPLATE RISPOSTA
              </label>
              <textarea 
                className="w-full h-32 px-4 py-3 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Grazie per il tuo feedback. Apprezziamo i tuoi suggerimenti e lavoreremo per migliorare il nostro servizio."
              ></textarea>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 border border-gray-700" />
              <label className="font-mono text-sm text-gray-700">
                INVIA AUTOMATICAMENTE
              </label>
            </div>
          </div>
        </div>

        {/* Negative Reviews Template */}
        <div className="border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-red-500">●</span>
              <h2 className="font-mono text-xl">RECENSIONI NEGATIVE</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                RIPRISTINA DEFAULT
              </button>
              <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
                SALVA
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">
                TEMPLATE RISPOSTA
              </label>
              <textarea 
                className="w-full h-32 px-4 py-3 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Ci dispiace per la tua esperienza negativa. Vorremmo saperne di più per migliorare il nostro servizio."
              ></textarea>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 border border-gray-700" />
              <label className="font-mono text-sm text-gray-700">
                INVIA AUTOMATICAMENTE
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Variables Help */}
      <div className="border border-gray-700 p-6">
        <h3 className="font-mono text-lg mb-4">VARIABILI DISPONIBILI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="font-mono text-sm">
            <code className="text-accent">{'{{nome_cliente}}'}</code>
            <span className="text-gray-700 ml-2">Nome del recensore</span>
          </div>
          <div className="font-mono text-sm">
            <code className="text-accent">{'{{voto}}'}</code>
            <span className="text-gray-700 ml-2">Valutazione (1-5)</span>
          </div>
          <div className="font-mono text-sm">
            <code className="text-accent">{'{{data}}'}</code>
            <span className="text-gray-700 ml-2">Data della recensione</span>
          </div>
          <div className="font-mono text-sm">
            <code className="text-accent">{'{{azienda}}'}</code>
            <span className="text-gray-700 ml-2">Nome della tua azienda</span>
          </div>
        </div>
      </div>
    </div>
  );
} 