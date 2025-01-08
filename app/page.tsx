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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HomeNav />
      
      {/* Gradient Follower */}
      <GradientFollower />
      
      {/* Hero Section */}
      <Section 
        className="min-h-[calc(100vh-84px)] flex items-center justify-center relative overflow-hidden"
        variant="default"
        gridSize="large"
        withGradient={true}
        gradientPosition="center"
      >
        <div className="grid-pattern-overlay opacity-30" />
        
        <div className="max-w-[90rem] w-full mx-auto relative py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="font-mono text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
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
              className="mb-12"
            >
              <SearchBar />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-8"
            >
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-mono text-sm rounded-full hover:bg-white hover:text-black border border-black transition-colors group relative overflow-hidden"
              >
                <span className="relative z-10">INIZIA ORA</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <span className="font-mono text-sm text-gray-500">
                14 giorni di prova gratuita
              </span>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto px-4">
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
                hover={true}
                delay={0.8 + index * 0.1}
                className="brutalist-card p-8 aspect-[4/3] text-center"
              >
                <stat.icon className="w-10 h-10 mb-6 text-black mx-auto" />
                <div className="font-mono text-5xl font-bold mb-3">{stat.value}</div>
                <div className="font-mono text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Marquee */}
      <div className="py-6 border-y border-black/5 bg-white relative overflow-hidden">
        <div className="gradient-blur opacity-50" />
        <Marquee items={marqueeItems} speed={20} />
      </div>

      {/* Features Section */}
      <Section
        variant="default"
        gridSize="small"
        withGradient={true}
        gradientPosition="right"
        className="relative overflow-hidden py-16"
        id="features"
      >
        <div className="grid-pattern-overlay opacity-50" />
        <div className="max-w-7xl mx-auto">
          <Heading as="h2" size="7xl" className="mb-4">
            CARATTERISTICHE_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xl mb-12 text-gray-600 max-w-2xl"
          >
            Tutto ciò di cui hai bisogno per gestire le tue recensioni in modo efficiente
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ title, description, icon: Icon, delay, category }, index) => (
              <Card 
                key={title}
                delay={delay}
                className="p-8 aspect-[3/4] group relative overflow-hidden"
                hover={true}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-xs px-2 py-1 bg-black/5 rounded-full">
                    {category?.toUpperCase()}
                  </span>
                </div>

                {/* Feature Content */}
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xl text-black/50">0{index + 1}_</span>
                    <Icon className="w-6 h-6 text-black transition-transform group-hover:scale-110" />
                  </div>
                  
                  <h3 className="font-mono text-2xl mb-4 group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  
                  <p className="font-sans text-gray-600 group-hover:text-gray-900 transition-colors">
                    {description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* How it Works Section */}
      <Section
        variant="dark"
        gridSize="large"
        withGradient={true}
        gradientPosition="center"
        className="relative overflow-hidden py-16 bg-black"
        id="how-it-works"
      >
        <div className="grid-pattern-overlay-dark opacity-50" />
        <div className="max-w-7xl mx-auto">
          <Heading as="h2" size="7xl" variant="dark" className="text-center mb-4">
            COME FUNZIONA_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-lg text-gray-400 max-w-2xl mx-auto text-center mb-20"
          >
            Inizia a gestire le tue recensioni in modo efficiente in soli tre semplici passaggi
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <Card
                key={title}
                variant="dark"
                delay={0.4 + index * 0.1}
                className="p-8 aspect-square"
                hover={true}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-4xl text-white/30">0{index + 1}</span>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-mono text-2xl mb-4 text-white">{title}</h3>
                  <p className="font-sans text-gray-400">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        variant="default"
        gridSize="small"
        withGradient={true}
        gradientPosition="left"
        className="relative overflow-hidden py-16"
      >
        <div className="max-w-7xl mx-auto">
          <Heading as="h2" size="7xl" className="text-center mb-4">
            TESTIMONIANZE_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-lg text-gray-600 max-w-2xl mx-auto text-center mb-20"
          >
            Cosa dicono i nostri clienti
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, author, role, rating }, index) => (
              <Card
                key={author}
                delay={0.4 + index * 0.1}
                className="p-8 aspect-square"
                hover={true}
              >
                <div className="h-full flex flex-col">
                  <div className="flex gap-1 mb-8">
                    {Array.from({ length: rating }).map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="font-sans text-gray-600 mb-8 flex-grow">{quote}</p>
                  
                  <div>
                    <div className="font-mono text-lg font-bold">{author}</div>
                    <div className="font-mono text-sm text-gray-500">{role}</div>
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
        gridSize="large"
        withGradient={true}
        gradientPosition="right"
        className="relative overflow-hidden py-16 bg-zinc-900"
      >
        <div className="max-w-7xl mx-auto">
          <Heading as="h2" size="7xl" variant="dark" className="text-center mb-4">
            VANTAGGI_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-lg text-gray-400 max-w-2xl mx-auto text-center mb-20"
          >
            Perché scegliere Orion per la gestione della tua reputazione
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map(({ title, description, icon: Icon }, index) => (
              <Card
                key={title}
                variant="dark"
                delay={0.4 + index * 0.1}
                className="p-8 aspect-square"
                hover={true}
              >
                <div className="h-full flex flex-col">
                  <Icon className="w-10 h-10 text-white mb-8" />
                  <h3 className="font-mono text-2xl mb-4 text-white">{title}</h3>
                  <p className="font-sans text-gray-400">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section
        variant="default"
        gridSize="small"
        withGradient={true}
        gradientPosition="center"
        className="relative overflow-hidden py-16"
        id="pricing"
      >
        <div className="max-w-7xl mx-auto">
          <Heading as="h2" size="7xl" className="text-center mb-4">
            PREZZI_
          </Heading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-lg text-gray-600 max-w-2xl mx-auto text-center mb-20"
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
