'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import {PricingCard} from '@/components/sections/PricingCard';

interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

const ANNUAL_DISCOUNT = 0.20;

const plans: PricingPlan[] = [
  {
    name: "BASE",
    monthlyPrice: 9,
    features: [
      "50 recensioni/mese",
      "Analisi base del sentiment",
      "Risposte automatiche"
    ],
    isPopular: false,
    ctaText: "SCEGLI BASE"
  },
  {
    name: "PRO",
    monthlyPrice: 29,
    features: [
      "200 recensioni/mese",
      "Analisi avanzata del sentiment",
      "Risposte personalizzate AI",
      "Dashboard analytics"
    ],
    isPopular: true,
    ctaText: "SCEGLI PRO"
  },
  {
    name: "ENTERPRISE",
    monthlyPrice: null,
    features: [
      "Recensioni illimitate",
      "Analisi sentiment custom",
      "API dedicata",
      "Account manager"
    ],
    isPopular: false,
    ctaText: "CONTATTACI"
  }
];

export default function PricingSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with PRO plan
  const [isAnnual, setIsAnnual] = useState(false);

  const nextPlan = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const prevPlan = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section className="px-6 md:px-4 py-24 md:py-20 bg-surface border-b-4 border-gray-900">
      <div className="section-container">
        <h2 className="text-5xl md:text-7xl font-mono font-bold mb-4">PREZZI_</h2>
        <p className="text-xl mb-8 font-sans text-gray-700">Scegli il piano più adatto alle tue esigenze</p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`font-mono px-4 py-2 transition-colors duration-200 ${
              !isAnnual ? 'text-accent border-b-2 border-accent' : 'text-gray-700'
            }`}
          >
            Mensile
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`font-mono px-4 py-2 transition-colors duration-200 ${
              isAnnual ? 'text-accent border-b-2 border-accent' : 'text-gray-700'
            }`}
          >
            Annuale (-20%)
          </button>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <PricingCard plan={plans[currentIndex]} isAnnual={isAnnual} />

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevPlan}
              className="p-3 border-2 border-gray-900 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {plans.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextPlan}
              className="p-3 border-2 border-gray-900 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="font-mono px-8 py-4 text-xl shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 bg-black text-white border-gray-900">
            INIZIA ORA
          </button>
        </div>
      </div>
    </section>
  );
} 