'use client';

import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const ANNUAL_DISCOUNT = 0.20; // 20% discount for annual plans

const plans = [
  {
    name: "BASE",
    monthlyPrice: 29,
    features: [
      "100 recensioni/mese",
      "Analisi base del sentiment",
      "Risposte automatiche"
    ],
    isPopular: false,
    ctaText: "SCEGLI BASE"
  },
  {
    name: "PRO",
    monthlyPrice: 79,
    features: [
      "500 recensioni/mese",
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

  const formatPrice = (monthlyPrice: number | null) => {
    if (monthlyPrice === null) return "Custom";
    const price = isAnnual 
      ? monthlyPrice * (1 - ANNUAL_DISCOUNT)
      : monthlyPrice;
    return `€${Math.round(price)}`;
  };

  const getPeriodLabel = () => {
    return isAnnual ? "/mese (fatturato annualmente)" : "/mese";
  };

  const getAnnualSavings = (monthlyPrice: number) => {
    const savings = monthlyPrice * 12 * ANNUAL_DISCOUNT;
    return `Risparmi €${Math.round(savings)}/anno`;
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
            <div 
              key={index} 
              className={`border-2 p-8 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform ${
                plan.isPopular 
                  ? 'transform scale-105 bg-black-gradient text-white' 
                  : 'bg-white'
              } border-gray-900`}
            >
              {plan.isPopular && (
                <div className="font-mono text-sm px-3 py-1 mb-4 inline-block shadow-brutal-white bg-white text-accent">
                  POPOLARE
                </div>
              )}
              <h3 className="font-mono text-2xl mb-4">{plan.name}</h3>
              <div className="text-4xl font-mono mb-2">
                {formatPrice(plan.monthlyPrice)}
                <span className={`text-xl ${plan.isPopular ? 'opacity-75' : 'text-gray-700'}`}>
                  {plan.monthlyPrice && getPeriodLabel()}
                </span>
              </div>
              {isAnnual && plan.monthlyPrice && (
                <div className="font-mono text-sm text-accent mb-6">
                  {getAnnualSavings(plan.monthlyPrice)}
                </div>
              )}
              <ul className={`font-sans space-y-4 mb-8 ${plan.isPopular ? '' : 'text-gray-700'}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={18} className={plan.isPopular ? 'text-white' : 'text-accent'} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full font-mono px-6 py-3 flex items-center justify-center gap-2 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 ${
                plan.isPopular 
                  ? 'bg-white text-accent border-white shadow-brutal-white' 
                  : 'bg-white text-gray-900 border-gray-900'
              }`}>
                {plan.ctaText}
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div 
            className={`border-2 p-8 shadow-brutal transition-all duration-300 ${
              plans[currentIndex].isPopular 
                ? 'bg-black-gradient text-white' 
                : 'bg-white'
            } border-gray-900`}
          >
            {plans[currentIndex].isPopular && (
              <div className="font-mono text-sm px-3 py-1 mb-4 inline-block shadow-brutal-white bg-white text-accent">
                POPOLARE
              </div>
            )}
            <h3 className="font-mono text-2xl mb-4">{plans[currentIndex].name}</h3>
            <div className="text-4xl font-mono mb-2">
              {formatPrice(plans[currentIndex].monthlyPrice)}
              <span className={`text-xl ${plans[currentIndex].isPopular ? 'opacity-75' : 'text-gray-700'}`}>
                {plans[currentIndex].monthlyPrice && getPeriodLabel()}
              </span>
            </div>
            {isAnnual && plans[currentIndex].monthlyPrice && (
              <div className="font-mono text-sm text-accent mb-6">
                {getAnnualSavings(plans[currentIndex].monthlyPrice)}
              </div>
            )}
            <ul className={`font-sans space-y-4 mb-8 ${plans[currentIndex].isPopular ? '' : 'text-gray-700'}`}>
              {plans[currentIndex].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={18} className={plans[currentIndex].isPopular ? 'text-white' : 'text-accent'} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full font-mono px-6 py-3 flex items-center justify-center gap-2 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 ${
              plans[currentIndex].isPopular 
                ? 'bg-white text-accent border-white shadow-brutal-white' 
                : 'bg-white text-gray-900 border-gray-900'
            }`}>
              {plans[currentIndex].ctaText}
              <ChevronRight size={18} />
            </button>
          </div>

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