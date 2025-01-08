'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const BUSINESS_TYPES = [
  { id: 'restaurant', label: 'RISTORANTE' },
  { id: 'hotel', label: 'HOTEL' },
  { id: 'retail', label: 'NEGOZIO' },
  { id: 'service', label: 'SERVIZI' },
  { id: 'other', label: 'ALTRO' }
]

export default function BusinessType() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simply navigate to the next page
      router.push('/onboarding/place')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-mono mb-8">TIPO DI ATTIVITÀ_</h1>
      <p className="text-gray-600 mb-8">
        Seleziona il tipo di attività che meglio descrive la tua azienda.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {BUSINESS_TYPES.map((type) => (
            <label
              key={type.id}
              className={`block w-full p-4 border cursor-pointer transition-all ${
                selectedType === type.id
                  ? 'border-black bg-black text-white'
                  : 'border-gray-700 hover:border-black'
              }`}
            >
              <input
                type="radio"
                name="businessType"
                value={type.id}
                checked={selectedType === type.id}
                onChange={(e) => setSelectedType(e.target.value)}
                className="sr-only"
              />
              <span className="font-mono text-lg">{type.label}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || !selectedType}
          className="w-full font-mono px-8 py-4 text-xl bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {loading ? 'SALVATAGGIO...' : 'CONTINUA →'}
        </button>
      </form>
    </div>
  )
} 