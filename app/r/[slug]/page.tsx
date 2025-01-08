import { Star, Globe, UtensilsCrossed, CalendarCheck, Instagram } from 'lucide-react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

// Mock data for now
const mockBusinessProfile = {
  id: '1',
  name: 'Pizzeria Bella Italia',
  description: 'La vera pizza napoletana nel cuore di Milano',
  logo_url: 'https://via.placeholder.com/150',
  rating: 4.8,
  total_reviews: 128,
  google_review_url: 'https://g.page/r/example',
  website_url: 'https://example.com',
  menu_url: 'https://example.com/menu',
  booking_url: 'https://example.com/book',
  instagram_url: 'https://instagram.com/example',
  theme_primary_color: '#000000',
  theme_background_color: '#ffffff'
}

export default async function BusinessLandingPage({
  params
}: {
  params: { slug: string }
}) {
  // In production, we would fetch the actual business profile
  // const supabase = createServerComponentClient<Database>({ cookies })
  // const { data: profile } = await supabase
  //   .from('business_profiles')
  //   .select('*')
  //   .eq('slug', params.slug)
  //   .single()
  
  // if (!profile) {
  //   notFound()
  // }

  // Using mock data for now
  const profile = mockBusinessProfile

  return (
    <div 
      className="min-h-screen flex flex-col items-center p-6"
      style={{ backgroundColor: profile.theme_background_color }}
    >
      {/* Logo & Header */}
      <div className="w-full max-w-md space-y-6 text-center mb-8">
        {profile.logo_url && (
          <img
            src={profile.logo_url}
            alt={profile.name}
            className="w-24 h-24 mx-auto rounded-full border-2 border-gray-700"
          />
        )}
        <h1 className="font-mono text-2xl">{profile.name}</h1>
        <p className="font-mono text-sm text-gray-700">{profile.description}</p>
        
        {/* Rating Preview */}
        <div className="flex items-center justify-center gap-2 font-mono text-sm">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span>{profile.rating}</span>
          <span className="text-gray-700">
            ({profile.total_reviews} recensioni)
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-4">
        {profile.google_review_url && (
          <a
            href={profile.google_review_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 text-center font-mono text-white bg-black border-2 border-gray-700 hover:translate-y-[-2px] transition-transform"
            style={{ backgroundColor: profile.theme_primary_color }}
          >
            LASCIA UNA RECENSIONE SU GOOGLE
          </a>
        )}

        {profile.website_url && (
          <a
            href={profile.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 text-center font-mono border-2 border-gray-700 hover:translate-y-[-2px] transition-transform"
          >
            <span className="flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              VISITA IL NOSTRO SITO
            </span>
          </a>
        )}

        {profile.menu_url && (
          <a
            href={profile.menu_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 text-center font-mono border-2 border-gray-700 hover:translate-y-[-2px] transition-transform"
          >
            <span className="flex items-center justify-center gap-2">
              <UtensilsCrossed className="w-4 h-4" />
              MENU DIGITALE
            </span>
          </a>
        )}

        {profile.booking_url && (
          <a
            href={profile.booking_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 text-center font-mono border-2 border-gray-700 hover:translate-y-[-2px] transition-transform"
          >
            <span className="flex items-center justify-center gap-2">
              <CalendarCheck className="w-4 h-4" />
              PRENOTA UN TAVOLO
            </span>
          </a>
        )}

        {profile.instagram_url && (
          <a
            href={profile.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 text-center font-mono border-2 border-gray-700 hover:translate-y-[-2px] transition-transform"
          >
            <span className="flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" />
              SEGUICI SU INSTAGRAM
            </span>
          </a>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <a
          href="/"
          className="font-mono text-sm text-gray-700 hover:text-black transition-colors"
        >
          Powered by ORION_
        </a>
      </div>
    </div>
  )
} 