'use client';

import { Sidebar, Header } from '@/components/shared';


const mockStats = {
  averageRating: 4.8,
  totalReviews: 128,
  positiveSentiment: 92,
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header 
          stats={mockStats}
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