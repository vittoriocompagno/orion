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

export default function HomePage() {
  const features = [
    {
      title: 'RECENSIONI UNIFICATE',
      description: 'Tutte le tue recensioni Google in un\'unica dashboard. Monitora, gestisci e rispondi facilmente.',
      icon: ChatBubbleBottomCenterTextIcon,
      delay: 0.4,
    },
    {
      title: 'ANALISI DEL SENTIMENT',
      description: 'Analisi automatica del tono delle recensioni. Comprendi meglio il feedback dei tuoi clienti.',
      icon: ChartBarIcon,
      delay: 0.5,
    },
    {
      title: 'RISPOSTE AUTOMATICHE',
      description: 'Rispondi automaticamente alle recensioni in base al loro sentiment. Risparmia tempo mantenendo un engagement costante.',
      icon: BoltIcon,
      delay: 0.6,
    }
  ]

  const steps = [
    {
      title: 'Connetti il tuo account Google',
      description: 'Collega il tuo profilo Google Business per iniziare a monitorare le recensioni.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Analisi Automatica',
      description: 'L\'AI analizza il sentiment delle recensioni e le categorizza automaticamente.',
      icon: SparklesIcon,
    },
    {
      title: 'Rispondi Velocemente',
      description: 'Utilizza le risposte automatiche o personalizza i template suggeriti.',
      icon: ClockIcon,
    }
  ]

  const testimonials = [
    {
      quote: "Orion ha trasformato completamente il modo in cui gestiamo le recensioni dei clienti. Il risparmio di tempo è incredibile.",
      author: "Marco Bianchi",
      role: "Proprietario, Ristorante Da Marco",
      rating: 5
    },
    {
      quote: "L'analisi del sentiment ci aiuta a capire meglio i nostri clienti. Le risposte automatiche sono sempre appropriate.",
      author: "Laura Rossi",
      role: "Marketing Manager, Hotel Belvedere",
      rating: 5
    },
    {
      quote: "Un tool indispensabile per chi gestisce più sedi. Ora abbiamo una visione completa della nostra reputazione online.",
      author: "Giuseppe Verdi",
      role: "CEO, Catena Retail",
      rating: 5
    }
  ]

  const benefits = [
    {
      title: 'RISPARMIO DI TEMPO',
      description: 'Automatizza la gestione delle recensioni e risparmia fino al 95% del tempo.',
      icon: ClockIcon,
    },
    {
      title: 'MIGLIORE ENGAGEMENT',
      description: 'Aumenta il coinvolgimento dei clienti con risposte rapide e pertinenti.',
      icon: ArrowTrendingUpIcon,
    },
    {
      title: 'ANALISI DETTAGLIATE',
      description: 'Ottieni insights approfonditi sul sentiment dei tuoi clienti.',
      icon: ChartPieIcon,
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#f5f5f5]/80 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="font-mono text-2xl text-gray-900 hover:text-black relative group"
          >
            ORION_
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </Link>
          
          <div className="space-x-2">
            <Link
              href="/auth/login"
              className="px-4 py-2 font-mono text-sm text-gray-700 hover:text-black transition-colors"
            >
              ACCEDI
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-white hover:text-black border border-black transition-colors rounded-sm"
            >
              PROVA GRATIS
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-mono text-5xl font-bold leading-tight mb-6">
              GESTISCI LE TUE RECENSIONI
              <br />
              <span className="text-gray-500">CON L'AIUTO DELL'AI</span>
            </h1>
            <p className="font-mono text-lg text-gray-700 mb-8">
              Orion unifica le tue recensioni Google, analizza il sentiment e automatizza le risposte.
              Risparmia tempo e migliora la tua reputazione online.
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-mono text-sm hover:bg-white hover:text-black border border-black transition-colors group rounded-sm"
            >
              INIZIA ORA
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-black/5 pt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-black/5">
              <ClockIcon className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="font-mono text-4xl font-bold mb-2">95%</div>
                <div className="font-mono text-sm text-gray-700">Risparmio di tempo nella gestione delle recensioni</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-black/5">
              <UserGroupIcon className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="font-mono text-4xl font-bold mb-2">24/7</div>
                <div className="font-mono text-sm text-gray-700">Monitoraggio e risposte automatiche</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-black/5">
              <ArrowTrendingUpIcon className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="font-mono text-4xl font-bold mb-2">+45%</div>
                <div className="font-mono text-sm text-gray-700">Aumento medio dell'engagement</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl font-bold mb-4">
              COME FUNZIONA
            </h2>
            <p className="font-mono text-gray-700 max-w-2xl mx-auto">
              Inizia a gestire le tue recensioni in modo efficiente in soli tre semplici passaggi
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-black/5">
                  <step.icon className="w-12 h-12 mb-6 text-black" />
                  <h3 className="font-mono text-lg font-bold mb-4">{step.title}</h3>
                  <p className="font-mono text-sm text-gray-700">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-px bg-black/5 -translate-y-1/2 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="font-mono text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            CARATTERISTICHE
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-black/5 group hover:border-black transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay }}
              >
                <feature.icon className="w-8 h-8 mb-6 text-black" />
                <h3 className="font-mono text-lg font-bold mb-4">{feature.title}</h3>
                <p className="font-mono text-sm text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl font-bold mb-4">
              PERCHÉ SCEGLIERE ORION
            </h2>
            <p className="font-mono text-gray-400 max-w-2xl mx-auto">
              Scopri i vantaggi di una gestione intelligente delle recensioni
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="p-6 backdrop-blur-sm bg-black/30 rounded-sm border border-white/10 group hover:border-white/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <benefit.icon className="w-8 h-8 mb-6 text-white" />
                <h3 className="font-mono text-lg font-bold mb-4">{benefit.title}</h3>
                <p className="font-mono text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl font-bold mb-4">
              COSA DICONO I NOSTRI CLIENTI
            </h2>
            <p className="font-mono text-gray-700 max-w-2xl mx-auto">
              Scopri come Orion ha aiutato altre aziende a migliorare la loro presenza online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-sm border border-black/5 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-black fill-current" />
                  ))}
                </div>
                <p className="font-mono text-sm text-gray-700 mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-mono text-sm font-bold">
                    {testimonial.author}
                  </div>
                  <div className="font-mono text-xs text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800" />
        
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-mono text-3xl font-bold mb-6">
              PRONTO A MIGLIORARE LA TUA PRESENZA ONLINE?
            </h2>
            <p className="font-mono text-gray-400 mb-8 max-w-2xl mx-auto">
              Unisciti alle aziende che già utilizzano Orion per gestire la loro reputazione online in modo efficiente.
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-mono text-sm hover:bg-black hover:text-white border border-white transition-colors group rounded-sm"
            >
              INIZIA LA PROVA GRATUITA
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-mono text-sm font-bold mb-4">PRODOTTO</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="font-mono text-sm text-gray-700 hover:text-black">
                    Caratteristiche
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="font-mono text-sm text-gray-700 hover:text-black">
                    Prezzi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold mb-4">RISORSE</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="font-mono text-sm text-gray-700 hover:text-black">
                    Documentazione
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="font-mono text-sm text-gray-700 hover:text-black">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold mb-4">LEGALE</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="font-mono text-sm text-gray-700 hover:text-black">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="font-mono text-sm text-gray-700 hover:text-black">
                    Termini
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold mb-4">SOCIAL</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-mono text-sm text-gray-700 hover:text-black">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="font-mono text-sm text-gray-700 hover:text-black">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-black/5">
            <p className="font-mono text-sm text-gray-700">
              © 2024 Orion. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
