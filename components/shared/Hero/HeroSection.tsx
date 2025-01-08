'use client'

import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <Section 
      className="min-h-[calc(100vh-84px)] flex items-center" 
      variant="default"
      gridSize="large"
      withGradient={true}
      gradientPosition="center"
    >
      <div className="relative py-12 md:py-20">
        {/* Beta Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block font-mono px-4 py-2 mb-8 bg-black text-white rounded-full"
        >
          <span className="mr-2 opacity-50 text-green-400">●</span>
          BETA VERSION
        </motion.div>
        
        {/* Main Heading */}
        <div className="relative mb-8">
          <Heading as="h1" size="7xl" delay={0.4}>
            REVIEWS UNDER <br />
            <span className="text-accent">CONTROL_</span>
          </Heading>
        </div>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-sans mb-12 max-w-2xl text-gray-600"
        >
          Centralize, analyze and automatically respond to your customer reviews.
          A brutally efficient platform.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-6 mb-20"
        >
          <button className="font-mono px-8 py-4 text-xl bg-black text-white border border-black rounded-full hover:bg-white hover:text-black transition-colors group relative overflow-hidden">
            <span className="relative z-10">TRY ORION →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="font-mono px-8 py-4 text-xl bg-white text-gray-900 border border-black/10 rounded-full hover:border-black transition-colors">
            LEARN MORE ↓
          </button>
        </motion.div>

        {/* Decorative Code Snippet */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-0 right-0 -z-10 hidden lg:block"
        >
          <pre className="font-mono text-sm text-gray-400 opacity-20">
            <code>{`{
  "platform": "google",
  "rating": 5,
  "sentiment": "positive",
  "autoReply": true,
  "response": {
    "template": "thank_you",
    "language": "en"
  }
}`}</code>
          </pre>
        </motion.div>
      </div>
    </Section>
  );
} 