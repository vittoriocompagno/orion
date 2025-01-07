'use client';

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Sidebar } from '@/app/components/dashboard/Sidebar'
import { Header } from '@/app/components/dashboard/Header'
import { DashboardLayoutProps } from '@/app/types/dashboard'

const mockStats = {
  averageRating: 4.8,
  totalReviews: 128,
  positiveSentiment: 92,
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.replace('/auth/login')
      }
    }

    checkAuth()
  }, [router, supabase.auth])

  const handleNewResponse = () => {
    // Implement new response logic
  }

  const handleNotificationsClick = () => {
    // Implement notifications logic
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header 
          stats={mockStats}
          onNewResponse={handleNewResponse}
          onNotificationsClick={handleNotificationsClick}
          hasNotifications={true}
        />

        <main className="flex-1 p-6 overflow-auto bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 