import { 
  Share2, 
  BarChart3, 
  Code2, 
  Users, 
  Bot, 
  FileSpreadsheet 
} from 'lucide-react';

const plannedFeatures = [
  {
    title: "Integrazione con TripAdvisor e Yelp",
    icon: Share2
  },
  {
    title: "Analytics avanzate con grafici personalizzabili",
    icon: BarChart3
  },
  {
    title: "API pubblica per integrazioni custom",
    icon: Code2
  },
  {
    title: "Dashboard multi-utente con ruoli",
    icon: Users
  },
  {
    title: "Risposte AI con personalità configurabile",
    icon: Bot
  },
  {
    title: "Export dati in formato CSV/Excel",
    icon: FileSpreadsheet
  },
];

export default function RoadmapSection() {
  return (
    <section className="px-4 py-20 bg-surface border-b-4 border-gray-900">
      <div className="section-container">
        <h2 className="text-5xl md:text-7xl font-mono font-bold mb-4">ROADMAP_</h2>
        <p className="text-xl mb-12 font-sans text-gray-700">Le novità in arrivo nei prossimi mesi</p>
        <div className="grid md:grid-cols-2 gap-8">
          {plannedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="border-2 p-6 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white border-gray-900">
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl text-accent">0{index + 1}</span>
                    <Icon size={20} className="text-accent" />
                  </div>
                  <p className="font-sans text-gray-700">{feature.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 