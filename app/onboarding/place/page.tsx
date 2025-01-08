'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function PlaceSelectionStep() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedPlace, setSelectedPlace] = useState<any>(null)

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Implement Google Places API search
    // For now, we'll just mock the results
    setSearchResults([
      { 
        id: 'mock-1',
        name: 'Il Tuo Business',
        address: 'Via Roma 123, Milano',
        rating: 4.5,
      }
    ])
  }

  async function handleSubmit(formData: FormData) {
    try {
      setError(null)
      setLoading(true)

      // Simplified to just navigate to next step
      // Remove all Supabase interactions
      router.push('/onboarding/preferences')
    } catch (error) {
      setError('Si è verificato un errore durante il salvataggio.')
      console.error('Onboarding error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <h1 className="font-mono text-2xl font-bold mb-2">
          Trova la tua attività su Google
        </h1>
        <p className="font-mono text-sm text-gray-700">
          Cerca e seleziona la tua attività su Google Business.
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cerca la tua attività..."
            className="flex-1 px-4 py-2 border border-gray-700 bg-white font-mono text-sm focus:outline-none focus:border-black transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white font-mono text-sm border border-gray-700 hover:translate-y-[-2px] transition-transform"
          >
            CERCA
          </button>
        </div>
      </form>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {searchResults.map((place) => (
              <label
                key={place.id}
                className={`block p-4 border bg-white cursor-pointer transition-colors ${
                  selectedPlace?.id === place.id
                    ? 'border-black'
                    : 'border-gray-700 hover:border-black'
                }`}
              >
                <input
                  type="radio"
                  name="placeId"
                  value={place.id}
                  className="hidden"
                  onChange={() => setSelectedPlace(place)}
                  required
                />
                <div className="font-mono">
                  <div className="text-sm font-bold mb-1">{place.name}</div>
                  <div className="text-xs text-gray-700">{place.address}</div>
                  <div className="text-xs text-gray-700 mt-1">
                    Rating: {place.rating} ⭐️
                  </div>
                </div>
              </label>
            ))}
          </div>

          {error && (
            <div className="font-mono text-sm text-red-500">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading || !selectedPlace}
              className="px-8 py-2 bg-black text-white font-mono text-sm border border-gray-700 hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {loading ? 'SALVATAGGIO...' : 'CONTINUA'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
} 