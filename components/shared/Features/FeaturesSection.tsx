'use client'

import { Database, LineChart, MessageSquareText, LucideIcon } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

interface Feature {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const features = [
  {
    number: '01',
    title: 'CENTRALIZE',
    description: "All your Google reviews in a single dashboard. Soon also Yelp and TripAdvisor.",
    icon: Database
  },
  {
    number: '02',
    title: 'ANALYZE',
    description: 'Automatic sentiment analysis. Understand your customers mood in real time.',
    icon: LineChart
  },
  {
    number: '03',
    title: 'RESPOND',
    description: 'Smart automatic responses based on sentiment. Save precious time.',
    icon: MessageSquareText
  },
] as const;

export function FeaturesSection() {
  return (
    <Section 
      variant="default"
      gridSize="small"
      withGradient={true}
      gradientPosition="right"
      className="relative"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <Heading as="h2" size="7xl" className="mb-4">
          FEATURES_
        </Heading>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans text-xl mb-12 text-gray-600"
        >
          Everything you need to manage your reviews
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ number, title, description, icon: Icon }, index) => (
            <Card 
              key={number}
              delay={0.2 * (index + 1)}
              className="p-8"
              hover={true}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xl text-black/50">{number}_</span>
                <Icon size={24} className="text-black" />
              </div>
              
              <h3 className="font-mono text-2xl mb-4">{title}</h3>
              <p className="font-sans text-gray-600">{description}</p>
            </Card>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-black/[0.02] to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-black/[0.02] to-transparent rounded-full blur-3xl -z-10" />
      </div>
    </Section>
  );
} 