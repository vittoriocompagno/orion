'use client'

import { createClient } from '@/app/utils/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const supabase = createClient()
      
      // Sign up without email verification
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (signUpError) throw signUpError

      // Create initial profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user?.id,
          email: email,
          onboarding_completed: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

      console.log('Profile created:', profile);

      if (profileError) {
        console.error('Error creating profile:', profileError)
        throw profileError
      }

      // Sign in immediately after signup and profile creation
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      router.push('/onboarding')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const formFields = [
    {
      id: 'email',
      label: 'EMAIL',
      value: email,
      onChange: setEmail,
      type: 'email',
      required: true,
      placeholder: 'nome@azienda.com',
    },
    {
      id: 'password',
      label: 'PASSWORD',
      value: password,
      onChange: setPassword,
      type: 'password',
      required: true,
      placeholder: '••••••••',
      hint: 'Minimo 6 caratteri',
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f5f5f5] flex"
    >
      {/* Left Panel - Signup Form */}
      <div className="w-full md:w-[480px] p-8 flex flex-col justify-center relative">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 relative"
        >
          <h1 className="font-mono text-3xl font-bold mb-3">
            Crea il tuo account
          </h1>
          <p className="font-mono text-sm text-gray-600">
            Inizia a gestire le tue recensioni con Orion
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
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
                  minLength={field.id === 'password' ? 6 : undefined}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-white font-mono text-sm border border-gray-200 rounded-sm focus:border-black focus:outline-none transition-colors"
                />
                {field.hint && (
                  <p className="mt-1 font-mono text-xs text-gray-600">
                    {field.hint}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="flex items-start gap-2 font-mono text-sm text-gray-700 cursor-pointer group">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-1 w-4 h-4 border border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0 focus:ring-offset-0 transition-colors"
              />
              <span>
                ACCETTO I{' '}
                <Link href="/terms" className="text-black hover:underline underline-offset-4">
                  TERMINI DI SERVIZIO
                </Link>
                {' '}E LA{' '}
                <Link href="/privacy" className="text-black hover:underline underline-offset-4">
                  PRIVACY POLICY
                </Link>
              </span>
            </label>
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
              {loading ? 'CARICAMENTO...' : 'REGISTRATI'}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          <div className="text-center font-mono text-sm text-gray-600">
            Hai già un account?{' '}
            <Link 
              href="/auth/login" 
              className="text-black hover:underline underline-offset-4"
            >
              ACCEDI
            </Link>
          </div>
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
                RECENSIONI UNIFICATE
              </h2>
              <p className="font-mono text-gray-400">
                Tutte le tue recensioni Google in un'unica dashboard. 
                Monitora, gestisci e rispondi facilmente.
              </p>
            </div>

            <div className="relative backdrop-blur-sm bg-black/30 p-6 rounded-sm border border-white/10">
              <h2 className="font-mono text-2xl font-bold mb-4">
                ANALISI DEL SENTIMENT
              </h2>
              <p className="font-mono text-gray-400">
                Analisi automatica del tono delle recensioni. 
                Comprendi meglio il feedback dei tuoi clienti.
              </p>
            </div>

            <div className="relative backdrop-blur-sm bg-black/30 p-6 rounded-sm border border-white/10">
              <h2 className="font-mono text-2xl font-bold mb-4">
                RISPOSTE AUTOMATICHE
              </h2>
              <p className="font-mono text-gray-400">
                Rispondi automaticamente alle recensioni in base al loro sentiment. 
                Risparmia tempo mantenendo un engagement costante.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 