'use client';

import { Sidebar, Header } from '@/components/shared';

const mockStats = {
  averageRating: 4.8,
  totalReviews: 128,
  positiveSentiment: 92,
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 to-rose-50/50 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header 
          stats={mockStats}
          hasNotifications={true}
        />

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 