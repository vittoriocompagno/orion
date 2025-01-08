'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon, 
  ClockIcon,
  ArrowRightIcon,
  StarIcon,
  ChartPieIcon,
  BoltIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { HomeNav } from '@/components/shared'
export default function HomePage() {
  const features = [
    {
      title: 'SCANSIONE WEB',
      description: 'Monitora costantemente la tua presenza online su Google e altre piattaforme di recensioni.',
      icon: ChatBubbleBottomCenterTextIcon,
      delay: 0.4,
    },
    {
      title: 'ANALISI REPUTAZIONE',
      description: 'Valutazione approfondita del sentiment e dell\'impatto delle recensioni sulla tua reputazione.',
      icon: ChartBarIcon,
      delay: 0.5,
    },
    {
      title: 'GESTIONE PROATTIVA',
      description: 'Intervieni tempestivamente con risposte personalizzate e strategie di miglioramento.',
      icon: BoltIcon,
      delay: 0.6,
    }
  ]

  const steps = [
    {
      title: 'Scansione Completa',
      description: 'Analisi approfondita della tua presenza online su tutte le piattaforme.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Report Dettagliato',
      description: 'Valutazione del sentiment e identificazione delle aree di miglioramento.',
      icon: SparklesIcon,
    },
    {
      title: 'Azione Immediata',
      description: 'Implementazione di strategie per migliorare la tua reputazione online.',
      icon: ClockIcon,
    }
  ]

  const testimonials = [
    {
      quote: "Orion è come avere un Reputation Manager dedicato 24/7. Ha trasformato completamente la nostra presenza online.",
      author: "Marco Bianchi",
      role: "Proprietario, Ristorante Da Marco",
      rating: 5
    },
    {
      quote: "Grazie a Orion abbiamo scoperto e risolto problemi di reputazione che non sapevamo di avere.",
      author: "Laura Rossi",
      role: "Marketing Manager, Hotel Belvedere",
      rating: 5
    },
    {
      quote: "Un alleato indispensabile per chi vuole mantenere una reputazione impeccabile online.",
      author: "Giuseppe Verdi",
      role: "CEO, Catena Retail",
      rating: 5
    }
  ]

  const benefits = [
    {
      title: 'MONITORAGGIO 24/7',
      description: 'Scansione continua della tua presenza online su tutte le piattaforme.',
      icon: ClockIcon,
    },
    {
      title: 'INTERVENTO RAPIDO',
      description: 'Gestione immediata delle criticità per proteggere la tua reputazione.',
      icon: ArrowTrendingUpIcon,
    },
    {
      title: 'ANALISI STRATEGICA',
      description: 'Report dettagliati e suggerimenti per migliorare la tua immagine online.',
      icon: ChartPieIcon,
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <HomeNav />
      {/* Hero Section */}
      <motion.section 
        className="pt-40 pb-32 px-4 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Minimal background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Accent line */}
            <div className="w-24 h-1 bg-black mb-8" />
            
            <h1 className="font-mono text-6xl font-bold leading-tight mb-8 tracking-tight">
              IL TUO REPUTATION
              <br />
              <span className="inline-flex items-center gap-4">
                MANAGER
                <span className="text-gray-500 font-normal">AUTOMATIZZATO_</span>
              </span>
            </h1>
            <p className="font-mono text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl">
              Orion scansiona il web 24/7 per proteggere e migliorare la tua reputazione online.
              <span className="block mt-4 font-bold">La tua presenza digitale sotto controllo, sempre.</span>
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-mono text-sm hover:bg-white hover:text-black border-2 border-black transition-all duration-300 group rounded-sm hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transform hover:-translate-y-0.5"
              >
                INIZIA ORA
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="font-mono text-sm text-gray-500">
                14 giorni di prova gratuita
              </span>
            </div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 pt-20 border-t border-black/10 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-20" />
            
            <div className="flex items-start gap-6 p-8 bg-white backdrop-blur-sm rounded-sm border-2 border-black/10 hover:border-black/20 transition-colors group">
              <ClockIcon className="w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-mono text-5xl font-bold mb-3">24/7</div>
                <div className="font-mono text-sm text-gray-700">Monitoraggio continuo della reputazione</div>
              </div>
            </div>
            <div className="flex items-start gap-6 p-8 bg-white backdrop-blur-sm rounded-sm border-2 border-black/10 hover:border-black/20 transition-colors group">
              <UserGroupIcon className="w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-mono text-5xl font-bold mb-3">+85%</div>
                <div className="font-mono text-sm text-gray-700">Miglioramento della reputazione</div>
              </div>
            </div>
            <div className="flex items-start gap-6 p-8 bg-white backdrop-blur-sm rounded-sm border-2 border-black/10 hover:border-black/20 transition-colors group">
              <ArrowTrendingUpIcon className="w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-mono text-5xl font-bold mb-3">-45%</div>
                <div className="font-mono text-sm text-gray-700">Riduzione delle criticità</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced How it Works */}
      <section className="py-32 px-4 bg-white/90 border-y border-black/10 relative overflow-hidden">
        {/* Minimal background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-black mx-auto mb-8" />
            <h2 className="font-mono text-4xl font-bold mb-6">
              COME FUNZIONA
            </h2>
            <p className="font-mono text-lg text-gray-700 max-w-2xl mx-auto">
              Inizia a gestire le tue recensioni in modo efficiente in soli tre semplici passaggi
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-sm border-2 border-black/10 hover:border-black/20 transition-all duration-300 group hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)]">
                  <div className="w-16 h-16 flex items-center justify-center bg-black/5 rounded-sm mb-8 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-mono text-xl font-bold mb-4">{step.title}</h3>
                  <p className="font-mono text-sm text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-px bg-black/10 -translate-y-1/2 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Minimal background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div className="mb-20">
            <div className="w-16 h-1 bg-black mb-8" />
            <motion.h2 
              className="font-mono text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              CARATTERISTICHE
            </motion.h2>
            <p className="font-mono text-lg text-gray-700 max-w-2xl">
              Strumenti potenti per gestire la tua reputazione online
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="p-8 bg-white/90 backdrop-blur-sm rounded-sm border-2 border-black/10 hover:border-black/20 transition-all duration-300 group hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-black/5 rounded-sm mb-8 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-mono text-xl font-bold mb-4">{feature.title}</h3>
                <p className="font-mono text-sm text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits */}
      <section className="py-32 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-white mx-auto mb-8" />
            <h2 className="font-mono text-4xl font-bold mb-6">
              PERCHÉ SCEGLIERE ORION
            </h2>
            <p className="font-mono text-lg text-gray-400 max-w-2xl mx-auto">
              Scopri i vantaggi di una gestione intelligente della reputazione
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="p-8 backdrop-blur-sm bg-white/5 rounded-sm border-2 border-white/10 hover:border-white/30 transition-all duration-300 group hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-sm mb-8 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-mono text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="font-mono text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-32 px-4 bg-white/80 backdrop-blur-sm border-y border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-black mx-auto mb-8" />
            <h2 className="font-mono text-4xl font-bold mb-6">
              COSA DICONO I NOSTRI CLIENTI
            </h2>
            <p className="font-mono text-lg text-gray-700 max-w-2xl mx-auto">
              Scopri come Orion ha aiutato altre aziende a migliorare la loro presenza online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white/90 backdrop-blur-sm rounded-sm border-2 border-black/10 hover:border-black/20 transition-all duration-300 group hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-black fill-current" />
                  ))}
                </div>
                <p className="font-mono text-base text-gray-700 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-mono text-sm font-bold">
                    {testimonial.author}
                  </div>
                  <div className="font-mono text-xs text-gray-600 mt-1">
                    {testimonial.role}
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-black/5 rounded-sm flex items-center justify-center">
                  <BuildingOfficeIcon className="w-4 h-4 text-black" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-32 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800" />
        
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-1 bg-white mx-auto mb-8" />
            <h2 className="font-mono text-4xl font-bold mb-6">
              PRONTO A MIGLIORARE LA TUA PRESENZA ONLINE?
            </h2>
            <p className="font-mono text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Unisciti alle aziende che già utilizzano Orion per gestire la loro reputazione online in modo efficiente.
            </p>
            <div className="flex items-center justify-center gap-8">
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-mono text-sm hover:bg-black hover:text-white border-2 border-white transition-all duration-300 group rounded-sm hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.2)] transform hover:-translate-y-0.5"
              >
                INIZIA LA PROVA GRATUITA
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="font-mono text-sm text-gray-500">
                Nessuna carta di credito richiesta
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-20 px-4 border-t border-black/10 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-mono text-sm font-bold mb-6">PRODOTTO</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/features" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    Caratteristiche
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    Prezzi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold mb-6">RISORSE</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/docs" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    Documentazione
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold mb-6">LEGALE</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    Termini
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold mb-6">SOCIAL</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-black/10">
            <p className="font-mono text-sm text-gray-700">
              © 2024 Orion. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
