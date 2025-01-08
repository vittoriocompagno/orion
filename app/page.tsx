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
} from '@heroicons/react/24/outline'
import { HomeNav, Footer, PricingTable } from '@/components/shared'
import { GradientFollower } from '@/components/shared/utils/GradientFollower'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Heading } from '@/components/ui/Heading'
import { Marquee } from '@/components/shared/Marquee/Marquee'
import { SearchBar } from '@/components/shared/Search/SearchBar'
import { Badge } from '@/components/ui/Badge'

// Feature definitions with consistent structure and better typing
interface Feature {
  title: string
  description: string
  icon: React.ElementType
  delay: number
  category?: 'monitoring' | 'analysis' | 'management'
}

export default function HomePage() {
  const features: Feature[] = [
    {
      title: 'SCANSIONE WEB',
      description: 'Monitora costantemente la tua presenza online su Google e altre piattaforme di recensioni.',
      icon: ChatBubbleBottomCenterTextIcon,
      delay: 0.4,
      category: 'monitoring'
    },
    {
      title: 'ANALISI REPUTAZIONE',
      description: 'Valutazione approfondita del sentiment e dell\'impatto delle recensioni sulla tua reputazione.',
      icon: ChartBarIcon,
      delay: 0.5,
      category: 'analysis'
    },
    {
      title: 'GESTIONE PROATTIVA',
      description: 'Intervieni tempestivamente con risposte personalizzate e strategie di miglioramento.',
      icon: BoltIcon,
      delay: 0.6,
      category: 'management'
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

  const marqueeItems = [
    'RECENSIONI AUTOMATIZZATE',
    'ANALISI DEL SENTIMENT',
    'RISPOSTE INTELLIGENTI',
    'MONITORAGGIO 24/7',
    'DASHBOARD INTUITIVA',
    'INTEGRAZIONE API',
    'SUPPORTO MULTILINGUA',
    'REPORT DETTAGLIATI'
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <HomeNav />
      
      {/* Gradient Follower */}
      <GradientFollower />
      
      {/* Hero Section */}
      <Section 
        className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden"
        variant="default"
        withGradient={true}
        gradientPosition="center"
      >
        <div className="w-full mx-auto relative py-12 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-4 text-center mb-10 sm:mb-16">
              <div className="space-y-2">
                <div className="font-mono text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] tracking-tight">
                  IL TUO MANAGER
                  <br />
                  DELLA REPUTAZIONE
                  <br />
                  <span className="text-gray-400">AUTOMATIZZATO_</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10 sm:mb-16"
            >
              <SearchBar />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <Link
                href="/auth/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-mono text-sm rounded-full hover:bg-black/90 border border-black/5 transition-colors active:scale-[0.98] touch-manipulation"
              >
                <span>INIZIA ORA</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Badge variant="secondary" className="w-full sm:w-auto text-center py-3">
                14 giorni di prova gratuita
              </Badge>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-24 max-w-5xl mx-auto px-4 sm:px-6">
            {[
              {
                icon: ClockIcon,
                value: '24/7',
                label: 'Monitoraggio continuo della reputazione'
              },
              {
                icon: UserGroupIcon,
                value: '+85%',
                label: 'Miglioramento della reputazione'
              },
              {
                icon: ArrowTrendingUpIcon,
                value: '-45%',
                label: 'Riduzione delle criticità'
              }
            ].map((stat, index) => (
              <Card
                key={stat.value}
                withAnimation={true}
                delay={0.8 + index * 0.1}
                className="p-6 sm:p-8 min-h-[160px] text-center group active:scale-[0.98] transition-transform touch-manipulation"
              >
                <stat.icon className="w-8 h-8 sm:w-9 sm:h-9 mb-4 sm:mb-5 text-black mx-auto transition-transform group-hover:scale-110" />
                <div className="font-mono text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors">{stat.value}</div>
                <div className="font-mono text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-2">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Marquee */}
      <div className="py-5 sm:py-6 border-y border-black/5 bg-white/80 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20" />
        <Marquee items={marqueeItems} speed={20} />
      </div>

      {/* Features Section */}
      <Section
        variant="default"
        withGradient={true}
        gradientPosition="right"
        className="relative overflow-hidden py-16 sm:py-24"
        id="features"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Heading as="h2" size="4xl" className="text-center mb-6">
            CARATTERISTICHE_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4"
          >
            Tutto ciò di cui hai bisogno per gestire le tue recensioni in modo efficiente
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {features.map(({ title, description, icon: Icon, delay, category }, index) => (
              <Card 
                key={title}
                withAnimation={true}
                delay={delay}
                className="p-6 sm:p-8 min-h-[260px] group relative overflow-hidden active:scale-[0.98] transition-transform touch-manipulation"
              >
                {/* Category Badge */}
                <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                  {category?.toUpperCase()}
                </Badge>

                {/* Feature Content */}
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <span className="font-mono text-lg sm:text-xl text-black/50">0{index + 1}_</span>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform group-hover:scale-110" />
                  </div>
                  
                  <h3 className="font-mono text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900 group-hover:text-black transition-colors line-clamp-2">
                    {title}
                  </h3>
                  
                  <p className="font-mono text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-4">
                    {description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* How it Works Section */}
      <Section
        variant="dark"
        withGradient={true}
        gradientPosition="center"
        className="relative overflow-hidden py-16 sm:py-24 bg-black"
        id="how-it-works"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Heading as="h2" size="4xl" variant="dark" className="text-center mb-6">
            COME FUNZIONA_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4"
          >
            Inizia a gestire le tue recensioni in modo efficiente in soli tre semplici passaggi
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <Card
                key={title}
                variant="dark"
                withAnimation={true}
                delay={0.4 + index * 0.1}
                className="p-6 sm:p-8 min-h-[220px] group active:scale-[0.98] transition-transform touch-manipulation"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <span className="font-mono text-3xl sm:text-4xl text-white/30">0{index + 1}</span>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform group-hover:scale-110" />
                  </div>
                  
                  <h3 className="font-mono text-lg sm:text-xl mb-3 sm:mb-4 text-white group-hover:text-white/90 transition-colors line-clamp-2">{title}</h3>
                  <p className="font-mono text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-3">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        variant="default"
        withGradient={true}
        gradientPosition="left"
        className="relative overflow-hidden py-16 sm:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Heading as="h2" size="4xl" className="text-center mb-6">
            TESTIMONIANZE_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4"
          >
            Cosa dicono i nostri clienti
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map(({ quote, author, role, rating }, index) => (
              <Card
                key={author}
                withAnimation={true}
                delay={0.4 + index * 0.1}
                className="p-6 sm:p-8 min-h-[280px] group active:scale-[0.98] transition-transform touch-manipulation"
              >
                <div className="h-full flex flex-col">
                  <div className="flex gap-1 mb-5 sm:mb-6">
                    {Array.from({ length: rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="font-mono text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6 flex-grow group-hover:text-gray-900 transition-colors line-clamp-6">{quote}</p>
                  
                  <div>
                    <div className="font-mono text-base sm:text-lg font-bold group-hover:text-gray-900 transition-colors line-clamp-1">{author}</div>
                    <div className="font-mono text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors line-clamp-1">{role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section
        variant="dark"
        withGradient={true}
        gradientPosition="right"
        className="relative overflow-hidden py-16 sm:py-24 bg-zinc-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Heading as="h2" size="4xl" variant="dark" className="text-center mb-6">
            VANTAGGI_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4"
          >
            Perché scegliere Orion per la gestione della tua reputazione
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map(({ title, description, icon: Icon }, index) => (
              <Card
                key={title}
                variant="dark"
                withAnimation={true}
                delay={0.4 + index * 0.1}
                className="p-6 sm:p-8 min-h-[220px] group active:scale-[0.98] transition-transform touch-manipulation"
              >
                <div className="h-full flex flex-col">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white mb-5 sm:mb-6 transition-transform group-hover:scale-110" />
                  <h3 className="font-mono text-lg sm:text-xl mb-3 sm:mb-4 text-white group-hover:text-white/90 transition-colors line-clamp-2">{title}</h3>
                  <p className="font-mono text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-3">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section
        variant="default"
        withGradient={true}
        gradientPosition="center"
        className="relative overflow-hidden py-16 sm:py-24"
        id="pricing"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Heading as="h2" size="4xl" className="text-center mb-6">
            PREZZI_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4"
          >
            Scegli il piano più adatto alle tue esigenze
          </motion.p>

          <PricingTable />
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
