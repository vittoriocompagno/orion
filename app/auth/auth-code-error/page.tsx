import Link from 'next/link'

export default function AuthCodeErrorPage() {
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
            ERRORE DI AUTENTICAZIONE
          </h1>
          
          <p className="font-mono text-sm text-gray-700">
            Si è verificato un errore durante l'autenticazione. Il codice di autenticazione potrebbe essere scaduto o non valido.
          </p>

          <div className="space-y-4">
            <Link
              href="/auth/login"
              className="block w-full px-4 py-2 bg-black text-white font-mono text-sm text-center border border-gray-700 hover:translate-y-[-2px] transition-transform"
            >
              TORNA AL LOGIN
            </Link>

            <Link
              href="/"
              className="block w-full px-4 py-2 bg-white text-black font-mono text-sm text-center border border-gray-700 hover:translate-y-[-2px] transition-transform"
            >
              TORNA ALLA HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 