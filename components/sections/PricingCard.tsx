'use client';

import { Check, ChevronRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

const formatPrice = (monthlyPrice: number | null) => 
  monthlyPrice === null ? "Custom" : `€${Math.round(monthlyPrice)}`;

const getPeriodLabel = (isAnnual: boolean) => 
  isAnnual ? "/mese (fatturato annualmente)" : "/mese";

const getAnnualSavings = (monthlyPrice: number) => {
  const savings = monthlyPrice * 12 * 0.20; // 20% annual discount
  return `Risparmi €${Math.round(savings)}/anno`;
};

export function PricingCard({ plan, isAnnual }: PricingCardProps) {
  return (
    <div 
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
          {plan.monthlyPrice && getPeriodLabel(isAnnual)}
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
  );
}