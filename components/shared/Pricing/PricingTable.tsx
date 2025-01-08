'use client'

import { Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { motion } from 'framer-motion'

interface PricingFeature {
  name: string
  base: boolean
  pro: boolean
  enterprise: boolean
}

const features: PricingFeature[] = [
  {
    name: '50 recensioni/mese',
    base: true,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Analisi base del sentiment',
    base: true,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Risposte automatiche',
    base: true,
    pro: true,
    enterprise: true,
  },
  {
    name: '200 recensioni/mese',
    base: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Analisi avanzata del sentiment',
    base: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Risposte personalizzate AI',
    base: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Dashboard analytics',
    base: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Recensioni illimitate',
    base: false,
    pro: false,
    enterprise: true,
  },
  {
    name: 'Analisi sentiment custom',
    base: false,
    pro: false,
    enterprise: true,
  },
  {
    name: 'API dedicata',
    base: false,
    pro: false,
    enterprise: true,
  },
  {
    name: 'Account manager',
    base: false,
    pro: false,
    enterprise: true,
  },
]

export function PricingTable() {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="grid grid-cols-4 divide-x divide-black/5">
        {/* Features Column */}
        <div className="p-8">
          <div className="h-[72px]" /> {/* Header spacing */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="font-mono text-sm"
              >
                {feature.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Base Plan */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="font-mono text-2xl font-bold mb-2">BASE</h3>
            <div className="font-mono text-4xl font-bold mb-2">€9<span className="text-xl font-normal text-gray-500">/mese</span></div>
            <button className="w-full font-mono px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition-colors group relative overflow-hidden">
              <span className="relative z-10">SCEGLI BASE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-center"
              >
                {feature.base && <Check className="w-5 h-5 text-green-500" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pro Plan */}
        <div className="p-8 bg-black text-white relative">
          <div className="absolute top-4 right-4 font-mono text-xs px-2 py-1 bg-white text-black rounded-full">
            POPOLARE
          </div>
          <div className="mb-8">
            <h3 className="font-mono text-2xl font-bold mb-2">PRO</h3>
            <div className="font-mono text-4xl font-bold mb-2">€29<span className="text-xl font-normal text-gray-400">/mese</span></div>
            <button className="w-full font-mono px-6 py-3 bg-white text-black rounded-full hover:bg-black hover:text-white border border-white transition-colors group relative overflow-hidden">
              <span className="relative z-10">SCEGLI PRO</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-center"
              >
                {feature.pro && <Check className="w-5 h-5 text-green-500" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="font-mono text-2xl font-bold mb-2">ENTERPRISE</h3>
            <div className="font-mono text-4xl font-bold mb-2">Custom</div>
            <button className="w-full font-mono px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition-colors group relative overflow-hidden">
              <span className="relative z-10">CONTATTACI</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-center"
              >
                {feature.enterprise && <Check className="w-5 h-5 text-green-500" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
} 