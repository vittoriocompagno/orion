'use client';

import { Check, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

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
  monthlyPrice === null ? "Custom" : `$${Math.round(monthlyPrice)}`;

const getPeriodLabel = (isAnnual: boolean) => 
  isAnnual ? "/month (billed annually)" : "/month";

const getAnnualSavings = (monthlyPrice: number) => {
  const savings = monthlyPrice * 12 * 0.20; // 20% annual discount
  return `Save $${Math.round(savings)}/year`;
};

export function PricingCard({ plan, isAnnual }: PricingCardProps) {
  return (
    <Card 
      variant={plan.isPopular ? 'dark' : 'default'}
      className={`p-8 ${plan.isPopular ? 'transform scale-105' : ''}`}
      hover={true}
    >
      {plan.isPopular && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm px-4 py-1.5 mb-4 inline-block bg-white text-black rounded-full"
        >
          POPULAR
        </motion.div>
      )}
      
      <h3 className="font-mono text-2xl mb-4">{plan.name}</h3>
      
      <div className="text-4xl font-mono mb-2">
        {formatPrice(plan.monthlyPrice)}
        <span className={`text-xl ${plan.isPopular ? 'text-gray-400' : 'text-gray-600'}`}>
          {plan.monthlyPrice && getPeriodLabel(isAnnual)}
        </span>
      </div>
      
      {isAnnual && plan.monthlyPrice && (
        <div className="font-mono text-sm text-black/50 dark:text-white/50 mb-6">
          {getAnnualSavings(plan.monthlyPrice)}
        </div>
      )}
      
      <ul className={`font-sans space-y-4 mb-8 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
        {plan.features.map((feature, i) => (
          <motion.li 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2"
          >
            <Check size={18} className={plan.isPopular ? 'text-white' : 'text-black'} />
            {feature}
          </motion.li>
        ))}
      </ul>
      
      <button className={`w-full font-mono px-6 py-3 flex items-center justify-center gap-2 rounded-full transition-colors group relative overflow-hidden ${
        plan.isPopular 
          ? 'bg-white text-black hover:bg-black hover:text-white border border-white' 
          : 'bg-black text-white hover:bg-white hover:text-black border border-black'
      }`}>
        <span className="relative z-10">{plan.ctaText}</span>
        <ChevronRight size={18} className="relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </Card>
  );
}