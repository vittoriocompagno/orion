export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-84px)] flex items-center border-b border-gray-700 overflow-hidden">

      {/* Main Content */}
      <div className="section-container relative py-12 md:py-20">
        <div className="inline-block font-mono px-4 py-2 mb-8 shadow-brutal bg-black text-white">
        <span className="mr-2 opacity-50 text-green-400">●</span>
          VERSIONE BETA
        </div>
        
        <div className="relative">
          <h1 className="text-5xl md:text-8xl font-mono mb-8 animate-fade-in leading-tight">
            RECENSIONI SOTTO <br />
            <span className="text-accent">CONTROLLO_</span>
          </h1>
        </div>
        
        <div className="relative">
          <p className="text-xl md:text-2xl font-sans mb-12 max-w-2xl animate-slide-up text-gray-600">
            Centralizza, analizza e rispondi alle recensioni dei tuoi clienti in modo automatico. 
            Una piattaforma brutalmente efficiente.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6 mb-20">
          <button className="font-mono px-8 py-4 text-xl shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform border bg-black text-white border-gray-700">
            PROVA ORION →
          </button>
          <button className="font-mono px-8 py-4 text-xl shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform border bg-white text-gray-700 border-gray-700">
            SCOPRI DI PIÙ ↓
          </button>
        </div>

      </div>
      

    </section>
  );
} 