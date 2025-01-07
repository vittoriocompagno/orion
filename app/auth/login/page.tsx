'use client'

import { createClient } from '@/app/utils/supabase/client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/dashboard'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push(redirect)
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
              className="w-full px-4 py-2 border border-gray-700 bg-white font-mono text-sm focus:outline-none focus:border-black transition-colors"
            />
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
            {loading ? 'CARICAMENTO...' : 'ACCEDI'}
          </button>

          <div className="text-center font-mono text-sm text-gray-700">
            Non hai un account?{' '}
            <Link href="/auth/signup" className="text-black hover:underline">
              REGISTRATI
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
} 