'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function OnboardingPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      
      // For now, just redirect to the next step
      router.push('/onboarding/business')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const formFields = [
    {
      id: 'firstName',
      label: 'NOME',
      value: firstName,
      onChange: setFirstName,
      type: 'text',
      required: true,
      placeholder: 'Mario',
    },
    {
      id: 'lastName',
      label: 'COGNOME',
      value: lastName,
      onChange: setLastName,
      type: 'text',
      required: true,
      placeholder: 'Rossi',
    },
    {
      id: 'companyName',
      label: 'NOME AZIENDA',
      value: companyName,
      onChange: setCompanyName,
      type: 'text',
      required: true,
      placeholder: 'Azienda Srl',
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f5f5f5] flex"
    >
      {/* Left Panel - Onboarding Form */}
      <div className="w-full md:w-[580px] p-8 flex flex-col justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 relative"
        >
          <Link 
            href="/" 
            className="font-mono text-2xl text-gray-900 hover:text-black relative group inline-flex items-center gap-2"
          >
            ORION_
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </Link>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-4">
            {formFields.map((field) => (
              <div key={field.id}>
                <label 
                  htmlFor={field.id}
                  className="block font-mono text-sm text-gray-700 mb-2"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-white font-mono text-sm border border-gray-200 rounded-sm focus:border-black focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>

          {error && (
            <motion.div 
              className="font-mono text-sm text-red-600 bg-red-50 border border-red-100 rounded-sm p-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-black text-white font-mono text-sm hover:bg-white hover:text-black border border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white rounded-sm group"
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? 'CARICAMENTO...' : 'CONTINUA'}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.form>
      </div>

      {/* Right Panel - Features Preview */}
      <div className="hidden md:block flex-1 bg-black p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800" />
        
        <div className="h-full flex flex-col justify-center max-w-lg mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-12 text-white"
          >
            <div className="relative backdrop-blur-sm bg-black/30 p-6 rounded-sm border border-white/10">
              <h2 className="font-mono text-2xl font-bold mb-4">
                PERSONALIZZA LA TUA ESPERIENZA
              </h2>
              <p className="font-mono text-gray-400">
                Configura il tuo profilo per ottenere un'esperienza personalizzata 
                e iniziare a gestire le tue recensioni in modo efficiente.
              </p>
            </div>

            <div className="relative backdrop-blur-sm bg-black/30 p-6 rounded-sm border border-white/10">
              <h2 className="font-mono text-2xl font-bold mb-4">
                ACCESSO IMMEDIATO
              </h2>
              <p className="font-mono text-gray-400">
                Una volta completato il profilo, avrai accesso immediato a tutte le 
                funzionalità di Orion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 