'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PricingCard } from '@/components/shared/Pricing/PricingCard';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { motion } from 'framer-motion';

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
      "50 reviews/month",
      "Basic sentiment analysis",
      "Auto responses"
    ],
    isPopular: false,
    ctaText: "CHOOSE BASE"
  },
  {
    name: "PRO",
    monthlyPrice: 29,
    features: [
      "200 reviews/month",
      "Advanced sentiment analysis",
      "AI personalized responses",
      "Analytics dashboard"
    ],
    isPopular: true,
    ctaText: "CHOOSE PRO"
  },
  {
    name: "ENTERPRISE",
    monthlyPrice: null,
    features: [
      "Unlimited reviews",
      "Custom sentiment analysis",
      "Dedicated API",
      "Account manager"
    ],
    isPopular: false,
    ctaText: "CONTACT US"
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
    <Section 
      variant="dark" 
      gridSize="small"
      withGradient={true}
      gradientPosition="center"
      className="relative"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto">
        <Heading as="h2" size="7xl" variant="dark" className="mb-4">
          PRICING_
        </Heading>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl mb-8 font-sans text-gray-400"
        >
          Choose the plan that best fits your needs
        </motion.p>

        {/* Billing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <button 
            onClick={() => setIsAnnual(false)}
            className={`font-mono px-4 py-2 transition-colors duration-200 ${
              !isAnnual ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`font-mono px-4 py-2 transition-colors duration-200 ${
              isAnnual ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Annual (-20%)
          </button>
        </motion.div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <PricingCard plan={plan} isAnnual={isAnnual} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={plans[currentIndex].name}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <PricingCard plan={plans[currentIndex]} isAnnual={isAnnual} />
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevPlan}
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <div className="flex gap-2">
              {plans.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextPlan}
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button className="font-mono px-8 py-4 text-xl bg-white text-black rounded-full hover:bg-black hover:text-white border border-white transition-colors group relative overflow-hidden">
            <span className="relative z-10">START NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-white/[0.03] to-transparent rounded-full blur-3xl -z-10" />
      </div>
    </Section>
  );
} 