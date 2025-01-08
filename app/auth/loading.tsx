import Link from 'next/link'

export default function AuthLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link 
            href="/" 
            className="font-mono text-2xl text-gray-700 hover:text-black transition-colors"
          >
            ORION_
          </Link>
        </div>

        <div className="space-y-6 animate-pulse">
          <div className="h-8 bg-gray-200 w-3/4" />
          
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 w-full" />
            <div className="h-4 bg-gray-200 w-5/6" />
          </div>

          <div className="space-y-4">
            <div className="h-10 bg-gray-200 w-full" />
            <div className="h-10 bg-gray-200 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
} 