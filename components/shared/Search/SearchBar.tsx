'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Star, TrendingUp, Loader2, X } from 'lucide-react'

interface GoogleReview {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  profile_photo_url?: string
}

interface PlaceDetails {
  name: string
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
  formatted_address: string
  place_id: string
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [places, setPlaces] = useState<PlaceDetails[]>([])
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetails | null>(null)
  const [searchFocused, setSearchFocused] = useState(false)

  // Animated variants for the search container
  const containerVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      borderRadius: "9999px",
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
      borderRadius: "9999px",
      transition: { duration: 0.2 }
    }
  }

  // Fetch places when user types
  useEffect(() => {
    if (query.length >= 3) {
      setIsSearching(true)
      const searchPlaces = async () => {
        try {
          const response = await fetch(`/api/places/search?query=${encodeURIComponent(query)}`)
          const data = await response.json()
          
          if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch places')
          }
          
          setPlaces(data.places)
          setIsSearching(false)
        } catch (error) {
          console.error('Error fetching places:', error)
          setIsSearching(false)
          setPlaces([])
        }
      }

      const timer = setTimeout(searchPlaces, 500)
      return () => clearTimeout(timer)
    } else {
      setPlaces([])
      setSelectedPlace(null)
    }
  }, [query])

  const getStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="w-full max-w-3xl mx-auto relative z-50">
      <motion.div
        variants={containerVariants}
        animate={searchFocused ? "focused" : "unfocused"}
        className="relative"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          placeholder="Cerca la tua attività per vedere le recensioni..."
          className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm rounded-full border border-black font-mono text-lg placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/5 transition-all duration-200"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-2 hover:text-black text-gray-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {isSearching ? (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="w-5 h-5 text-gray-400" />
            </motion.div>
          ) : (
            <Search className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedPlace ? (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/60 backdrop-blur-xl rounded-[32px] border border-black overflow-hidden"
          >
            {/* Place Details */}
            <div className="p-6 border-b border-black/10 rounded-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-mono text-xl font-bold mb-1">{selectedPlace.name}</h3>
                  <p className="font-mono text-sm text-gray-500">{selectedPlace.formatted_address}</p>
                </div>
                <button 
                  onClick={() => setSelectedPlace(null)}
                  className="font-mono text-sm text-gray-500 hover:text-black transition-colors"
                >
                  ← Indietro
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {getStars(selectedPlace.rating)}
                </div>
                <span className="font-mono font-bold">{selectedPlace.rating}</span>
                <span className="font-mono text-sm text-gray-500">
                  ({selectedPlace.user_ratings_total} recensioni)
                </span>
              </div>
            </div>

            {/* Reviews */}
            <div className="max-h-[400px] overflow-y-auto">
              {selectedPlace.reviews.map((review, index) => (
                <motion.div
                  key={review.time}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border-b border-black/10 hover:bg-black/[0.02] transition-colors rounded-[32px]"
                >
                  <div className="flex items-start gap-4">
                    {review.profile_photo_url && (
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold">{review.author_name}</span>
                        <span className="font-mono text-sm text-gray-500">
                          {review.relative_time_description}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {getStars(review.rating)}
                      </div>
                      <p className="font-mono text-sm text-gray-600">{review.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-white/60 backdrop-blur-sm border-t border-black/10">
              <button className="w-full font-mono text-sm bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-colors flex items-center justify-center gap-2">
                <span>Monitora e gestisci le tue recensioni con Orion</span>
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            {places.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white/60 backdrop-blur-xl border border-black overflow-hidden rounded-[32px]"
              >
                {places.map((place, index) => (
                  <motion.div
                    key={place.place_id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedPlace(place)}
                    className="p-6 hover:bg-black/[0.02] transition-colors cursor-pointer rounded-[32px]"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-mono font-bold mb-1">{place.name}</h3>
                        <p className="font-mono text-sm text-gray-500">{place.formatted_address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-mono font-bold">{place.rating}</span>
                        <span className="font-mono text-sm text-gray-500">
                          ({place.user_ratings_total})
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </AnimatePresence>
    </div>
  )
} 