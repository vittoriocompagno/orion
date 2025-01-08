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

// CORS headers configuration
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET(request: Request) {
  try {
    // Validate API key exists
    if (!process.env.GOOGLE_PLACES_API_KEY) {
      console.error('Google Places API key is not configured')
      return NextResponse.json(
        { error: 'API configuration error' },
        { 
          status: 500,
          headers: corsHeaders
        }
      )
    }

    // Get client IP for rate limiting
    const headersList = await headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { 
          status: 429,
          headers: corsHeaders
        }
      )
    }

    // Get search query from URL
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { 
          status: 400,
          headers: corsHeaders
        }
      )
    }

    // Call Google Places API Text Search
    const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${process.env.GOOGLE_PLACES_API_KEY}`
    const searchResponse = await fetch(textSearchUrl)
    const searchData = await searchResponse.json()

    if (!searchResponse.ok) {
      console.error('Google Places API Error:', {
        status: searchResponse.status,
        statusText: searchResponse.statusText,
        data: searchData
      })
      throw new Error(`Failed to fetch from Google Places API: ${searchData.error_message || searchResponse.statusText}`)
    }

    // Process each place to get details including reviews
    const places = await Promise.all(
      searchData.results.slice(0, 5).map(async (place: any) => {
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,rating,user_ratings_total,reviews,formatted_address&key=${process.env.GOOGLE_PLACES_API_KEY}`
        const detailsResponse = await fetch(detailsUrl)
        const detailsData = await detailsResponse.json()

        if (!detailsResponse.ok) {
          console.error('Google Places Details API Error:', {
            status: detailsResponse.status,
            statusText: detailsResponse.statusText,
            data: detailsData
          })
          throw new Error(`Failed to fetch place details: ${detailsData.error_message || detailsResponse.statusText}`)
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

    return NextResponse.json(
      { places },
      { headers: corsHeaders }
    )
  } catch (error) {
    console.error('Places API Error:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch places' },
      { 
        status: 500,
        headers: corsHeaders
      }
    )
  }
} 