'use client'

import { createClient } from '@/app/utils/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      const supabase = createClient()
      
      // Sign up the user
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
          data: {
            first_name: firstName,
            last_name: lastName,
            company_name: companyName,
          }
        },
      })

      if (signUpError) throw signUpError
      router.push('/auth/verify-email')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link 
            href="/" 
            className="font-mono text-2xl text-gray-700 hover:text-black transition-colors"
          >
            ORION_
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block font-mono text-sm text-gray-700 mb-2">
                NOME
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-700 bg-white font-mono text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block font-mono text-sm text-gray-700 mb-2">
                COGNOME
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-700 bg-white font-mono text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="companyName" className="block font-mono text-sm text-gray-700 mb-2">
              NOME AZIENDA
            </label>
            <input
              id="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-700 bg-white font-mono text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-sm text-gray-700 mb-2">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-700 bg-white font-mono text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-mono text-sm text-gray-700 mb-2">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-2 border border-gray-700 bg-white font-mono text-sm focus:outline-none focus:border-black transition-colors"
            />
            <p className="mt-1 font-mono text-xs text-gray-700">
              Minimo 6 caratteri
            </p>
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-2 font-mono text-sm text-gray-700">
              <input
                type="checkbox"
                name="terms"
                className="mt-1 w-4 h-4 border border-gray-700"
                required
              />
              <span>
                ACCETTO I{' '}
                <Link href="/terms" className="text-black hover:underline">
                  TERMINI DI SERVIZIO
                </Link>
                {' '}E LA{' '}
                <Link href="/privacy" className="text-black hover:underline">
                  PRIVACY POLICY
                </Link>
              </span>
            </label>
          </div>

          {error && (
            <div className="font-mono text-sm text-red-500">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-black text-white font-mono text-sm border border-gray-700 hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? 'CARICAMENTO...' : 'REGISTRATI'}
          </button>

          <div className="text-center font-mono text-sm text-gray-700">
            Hai già un account?{' '}
            <Link href="/auth/login" className="text-black hover:underline">
              ACCEDI
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
} 