import Link from 'next/link'

export default function VerifyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <Link 
            href="/" 
            className="font-mono text-2xl text-gray-700 hover:text-black transition-colors"
          >
            ORION_
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="font-mono text-xl text-black">
            CONTROLLA LA TUA EMAIL
          </h1>
          
          <p className="font-mono text-sm text-gray-700">
            Ti abbiamo inviato un link di conferma.
            <br />
            Clicca sul link per completare la registrazione.
          </p>

          <div className="pt-4">
            <Link
              href="/auth/login"
              className="font-mono text-sm text-black hover:underline"
            >
              TORNA AL LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 