'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'



export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        router.replace('/dashboard')
      }
    }

    checkAuth()
  }, [router, supabase.auth])

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Logo/Home Link */}
      <div className="h-20 flex items-center justify-center border-b border-gray-700">
        <Link 
          href="/" 
          className="font-mono text-2xl text-gray-700 hover:text-black transition-colors"
        >
          ORION_
        </Link>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  )
} 