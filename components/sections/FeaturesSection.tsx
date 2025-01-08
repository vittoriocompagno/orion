import { Database, LineChart, MessageSquareText, LucideIcon } from 'lucide-react';

interface Feature {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const features = [
  {
    number: '01',
    title: 'CENTRALIZZA',
    description: "Tutte le tue recensioni Google in un'unica dashboard. Presto anche Yelp e TripAdvisor.",
    icon: Database
  },
  {
    number: '02',
    title: 'ANALIZZA',
    description: 'Analisi del sentiment automatica. Comprendi il mood dei tuoi clienti in tempo reale.',
    icon: LineChart
  },
  {
    number: '03',
    title: 'RISPONDI',
    description: 'Risposte automatiche intelligenti basate sul sentiment. Risparmia tempo prezioso.',
    icon: MessageSquareText
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="px-4 py-20 bg-white border-b border-gray-900" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="features-heading" className="font-mono text-5xl md:text-7xl font-bold mb-4">
          FEATURES_
        </h2>
        
        <p className="font-sans text-xl mb-12 text-gray-700">
          Tutto ciò di cui hai bisogno per gestire le tue recensioni
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ number, title, description, icon: Icon }) => (
            <div 
              key={number}
              className="group border-2 border-gray-900 p-8 bg-surface 
                         hover:translate-x-1 hover:-translate-y-1 
                         transition-transform duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xl text-accent">{number}_</span>
                <Icon size={24} className="text-accent" />
              </div>
              
              <h3 className="font-mono text-2xl mb-4">{title}</h3>
              <p className="font-sans text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 