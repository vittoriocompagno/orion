import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Rate limiting setup
const rateLimit = {
  requests: Number(process.env.RATE_LIMIT_REQUESTS) || 100,
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000,
  hits: new Map<string, number[]>()
}

// Helper function to check rate limit
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userHits = rateLimit.hits.get(ip) || []
  const recentHits = userHits.filter((hit: number) => now - hit < rateLimit.windowMs)
  
  if (recentHits.length >= rateLimit.requests) {
    return false
  }
  
  recentHits.push(now)
  rateLimit.hits.set(ip, recentHits)
  return true
}

export async function GET(request: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const forwardedFor= headersList.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }

    // Get search query from URL
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      )
    }

    // Call Google Places API Text Search
    const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${process.env.GOOGLE_PLACES_API_KEY}`
    const searchResponse = await fetch(textSearchUrl)
    const searchData = await searchResponse.json()

    if (!searchResponse.ok) {
      throw new Error('Failed to fetch from Google Places API')
    }

    // Process each place to get details including reviews
    const places = await Promise.all(
      searchData.results.slice(0, 5).map(async (place: any) => {
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,rating,user_ratings_total,reviews,formatted_address&key=${process.env.GOOGLE_PLACES_API_KEY}`
        const detailsResponse = await fetch(detailsUrl)
        const detailsData = await detailsResponse.json()

        if (!detailsResponse.ok) {
          throw new Error('Failed to fetch place details')
        }

        return {
          place_id: place.place_id,
          name: place.name,
          rating: place.rating,
          user_ratings_total: place.user_ratings_total,
          formatted_address: place.formatted_address,
          reviews: detailsData.result.reviews || []
        }
      })
    )

    return NextResponse.json({ places })
  } catch (error) {
    console.error('Places API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch places' },
      { status: 500 }
    )
  }
} 