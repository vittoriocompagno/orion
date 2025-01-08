'use client'

import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { motion } from 'framer-motion'

export function Footer() {
  const footerLinks = {
    prodotto: [
      { label: 'CARATTERISTICHE', href: '/features' },
      { label: 'PREZZI', href: '/pricing' },
      { label: 'DOCUMENTAZIONE', href: '/docs' },
      { label: 'API', href: '/api' },
    ],
    risorse: [
      { label: 'BLOG', href: '/blog' },
      { label: 'GUIDE', href: '/guides' },
      { label: 'ESEMPI', href: '/examples' },
      { label: 'ROADMAP', href: '/roadmap' },
    ],
    legale: [
      { label: 'PRIVACY', href: '/privacy' },
      { label: 'TERMINI', href: '/terms' },
      { label: 'COOKIE', href: '/cookies' },
      { label: 'SICUREZZA', href: '/security' },
    ],
    social: [
      { label: 'TWITTER', href: 'https://twitter.com' },
      { label: 'LINKEDIN', href: 'https://linkedin.com' },
      { label: 'GITHUB', href: 'https://github.com' },
      { label: 'DISCORD', href: 'https://discord.com' },
    ],
  }

  return (
    <Section
      variant="default"
      gridSize="small"
      withGradient={false}
      className="border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-mono text-sm font-bold mb-6 text-black">
                {category.toUpperCase()}
              </h4>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <Link
                      href={link.href}
                      className="font-mono text-sm text-gray-600 hover:text-black transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t border-black/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm text-gray-600">
              © 2024 Orion. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-mono text-sm text-gray-600 hover:text-black transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-mono text-sm text-gray-600 hover:text-black transition-colors"
              >
                Termini
              </Link>
              <Link
                href="/cookies"
                className="font-mono text-sm text-gray-600 hover:text-black transition-colors"
              >
                Cookie
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
} 