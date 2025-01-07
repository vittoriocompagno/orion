'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function PersonalInfo() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    companyName: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
          company_name: formData.companyName,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)

      if (updateError) throw updateError

      router.push('/onboarding/business')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-mono mb-8">INFORMAZIONI PERSONALI_</h1>
      <p className="text-gray-600 mb-8">
        Per offrirti un'esperienza personalizzata, abbiamo bisogno di alcune informazioni su di te e la tua azienda.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-mono text-sm text-gray-700">
              NOME
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 font-mono bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block font-mono text-sm text-gray-700">
              COGNOME
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 font-mono bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block font-mono text-sm text-gray-700">
            NUMERO DI TELEFONO
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 font-mono bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block font-mono text-sm text-gray-700">
            NOME AZIENDA
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 font-mono bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
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
          {loading ? 'SALVATAGGIO...' : 'CONTINUA →'}
        </button>
      </form>
    </div>
  )
} 