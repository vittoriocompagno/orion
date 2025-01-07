'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function MarketingPreferences() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [preferences, setPreferences] = useState({
    email: true,
    sms: true,
    product_updates: true
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('No user found')

      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          marketing_preferences: preferences,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)

      if (updateError) throw updateError

      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-mono mb-8">PREFERENZE DI MARKETING_</h1>
      <p className="text-gray-600 mb-8">
        Personalizza come vuoi ricevere aggiornamenti e comunicazioni da noi.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="flex items-start gap-3 p-4 border border-gray-700 cursor-pointer hover:border-black transition-colors">
            <input
              type="checkbox"
              checked={preferences.email}
              onChange={(e) => setPreferences(prev => ({ ...prev, email: e.target.checked }))}
              className="mt-1 w-4 h-4 border-gray-700 rounded focus:ring-black"
            />
            <div>
              <span className="block font-mono text-lg">EMAIL MARKETING</span>
              <span className="block text-sm text-gray-600">
                Ricevi offerte speciali e aggiornamenti via email
              </span>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 border border-gray-700 cursor-pointer hover:border-black transition-colors">
            <input
              type="checkbox"
              checked={preferences.sms}
              onChange={(e) => setPreferences(prev => ({ ...prev, sms: e.target.checked }))}
              className="mt-1 w-4 h-4 border-gray-700 rounded focus:ring-black"
            />
            <div>
              <span className="block font-mono text-lg">SMS MARKETING</span>
              <span className="block text-sm text-gray-600">
                Ricevi notifiche e promemoria via SMS
              </span>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 border border-gray-700 cursor-pointer hover:border-black transition-colors">
            <input
              type="checkbox"
              checked={preferences.product_updates}
              onChange={(e) => setPreferences(prev => ({ ...prev, product_updates: e.target.checked }))}
              className="mt-1 w-4 h-4 border-gray-700 rounded focus:ring-black"
            />
            <div>
              <span className="block font-mono text-lg">AGGIORNAMENTI PRODOTTO</span>
              <span className="block text-sm text-gray-600">
                Ricevi aggiornamenti sulle nuove funzionalità e miglioramenti
              </span>
            </div>
          </label>
        </div>

        {error && (
          <div className="text-red-600 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full font-mono px-8 py-4 text-xl bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {loading ? 'SALVATAGGIO...' : 'COMPLETA REGISTRAZIONE →'}
        </button>
      </form>
    </div>
  )
} 