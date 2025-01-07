import { Database, LineChart, MessageSquareText } from 'lucide-react';

const features = [
  { 
    number: "01", 
    title: "CENTRALIZZA", 
    description: "Tutte le tue recensioni Google in un'unica dashboard. Presto anche Yelp e TripAdvisor.",
    icon: Database
  },
  { 
    number: "02", 
    title: "ANALIZZA", 
    description: "Analisi del sentiment automatica. Comprendi il mood dei tuoi clienti in tempo reale.",
    icon: LineChart
  },
  { 
    number: "03", 
    title: "RISPONDI", 
    description: "Risposte automatiche intelligenti basate sul sentiment. Risparmia tempo prezioso.",
    icon: MessageSquareText
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-4 py-20 bg-white border-b-4 border-gray-900">
      <div className="section-container">
        <h2 className="text-5xl md:text-7xl font-mono font-bold mb-4">FEATURES_</h2>
        <p className="text-xl mb-12 font-sans text-gray-700">Tutto ciò di cui hai bisogno per gestire le tue recensioni</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="border-2 p-8 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-surface border-gray-900">
                <div className="flex items-center gap-4 mb-4">
                  <div className="font-mono text-xl text-accent">{feature.number}_</div>
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-mono text-2xl mb-4">{feature.title}</h3>
                <p className="font-sans text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 