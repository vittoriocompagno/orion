'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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

        <div className="space-y-6">
          <h1 className="font-mono text-2xl font-bold">
            QUALCOSA È ANDATO STORTO
          </h1>
          
          <p className="font-mono text-sm text-gray-700">
            Si è verificato un errore durante l'elaborazione della tua richiesta.
          </p>

          <div className="space-y-4">
            <button
              onClick={reset}
              className="block w-full px-4 py-2 bg-black text-white font-mono text-sm text-center border border-gray-700 hover:translate-y-[-2px] transition-transform"
            >
              RIPROVA
            </button>

            <Link
              href="/"
              className="block w-full px-4 py-2 bg-white text-black font-mono text-sm text-center border border-gray-700 hover:translate-y-[-2px] transition-transform"
            >
              TORNA ALLA HOME
            </Link>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded">
              <p className="font-mono text-xs text-red-700 whitespace-pre-wrap">
                {error.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 