import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-gray-700 p-6">
          <div className="font-mono text-sm text-gray-700 mb-2">RECENSIONI TOTALI</div>
          <div className="font-mono text-4xl">128</div>
        </div>
        <div className="border border-gray-700 p-6">
          <div className="font-mono text-sm text-gray-700 mb-2">MEDIA VALUTAZIONI</div>
          <div className="font-mono text-4xl">4.5</div>
        </div>
        <div className="border border-gray-700 p-6">
          <div className="font-mono text-sm text-gray-700 mb-2">RISPOSTE AUTOMATICHE</div>
          <div className="font-mono text-4xl">85%</div>
        </div>
        <div className="border border-gray-700 p-6">
          <div className="font-mono text-sm text-gray-700 mb-2">SENTIMENT POSITIVO</div>
          <div className="font-mono text-4xl">92%</div>
        </div>
      </div>

      {/* Recent Reviews */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-mono text-xl">RECENSIONI RECENTI_</h2>
          <Link href="/dashboard/reviews" className="font-mono text-sm text-accent hover:underline">
            VEDI TUTTE →
          </Link>
        </div>

        <div className="space-y-4">
          {/* Review Card */}
          <div className="border border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="font-mono text-sm text-gray-700 mb-1">Mario R.</div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <span className="font-mono">5.0</span>
                </div>
              </div>
              <div className="font-mono text-sm text-gray-700">2 ORE FA</div>
            </div>
            <p className="font-mono text-sm mb-4">
              "Servizio eccellente, personale molto professionale. Tornerò sicuramente!"
            </p>
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs text-gray-700">
                RISPOSTA AUTOMATICA INVIATA
              </div>
              <button className="font-mono text-sm text-accent hover:underline">
                MODIFICA RISPOSTA
              </button>
            </div>
          </div>

          {/* Review Card */}
          <div className="border border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="font-mono text-sm text-gray-700 mb-1">Laura B.</div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">●</span>
                  <span className="font-mono">3.0</span>
                </div>
              </div>
              <div className="font-mono text-sm text-gray-700">5 ORE FA</div>
            </div>
            <p className="font-mono text-sm mb-4">
              "Buono ma migliorabile. I tempi di attesa sono un po' lunghi."
            </p>
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
      </div>

      {/* Sentiment Analysis */}
      <div>
        <h2 className="font-mono text-xl mb-6">ANALISI SENTIMENT_</h2>
        <div className="border border-gray-700 p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-sm">
              <span>POSITIVO</span>
              <span>75%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 border border-gray-700">
              <div className="w-3/4 h-full bg-green-500" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-sm">
              <span>NEUTRO</span>
              <span>20%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 border border-gray-700">
              <div className="w-1/5 h-full bg-yellow-500" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-sm">
              <span>NEGATIVO</span>
              <span>5%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 border border-gray-700">
              <div className="w-[5%] h-full bg-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 