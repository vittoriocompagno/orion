'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

const steps = [
  { path: '/onboarding', label: 'AZIENDA' },
  { path: '/onboarding/business', label: 'ATTIVITÀ' },
  { path: '/onboarding/place', label: 'GOOGLE BUSINESS' },
  { path: '/onboarding/preferences', label: 'PREFERENZE' },
]

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClientComponentClient()
  const currentStepIndex = steps.findIndex(step => step.path === pathname)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.replace('/auth/login')
      }
    }

    checkAuth()
  }, [router, supabase.auth])

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            href="/" 
            className="font-mono text-2xl text-gray-700 hover:text-black transition-colors"
          >
            ORION_
          </Link>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div 
                key={step.path}
                className={`font-mono text-xs ${
                  index <= currentStepIndex ? 'text-black' : 'text-gray-400'
                }`}
              >
                {step.label}
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-200">
            <div 
              className="h-full bg-black transition-all duration-300"
              style={{ 
                width: `${((currentStepIndex + 1) / steps.length) * 100}%` 
              }}
            />
          </div>
        </div>

        {children}
      </div>
    </div>
  )
} 