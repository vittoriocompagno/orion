import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';

export function HomeNav() {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="px-4 py-3 bg-white/70 backdrop-blur-lg rounded-full border border-black/5 shadow-lg shadow-black/[0.03]">
        <div className="flex items-center gap-6 md:gap-8">
          <Link 
            href="/" 
            className="px-4 font-mono text-lg text-gray-900 hover:text-black relative group whitespace-nowrap"
          >
            ORION_
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </Link>
          
          <nav className="flex items-center gap-6 md:gap-8 px-4">
            <Link 
              href="#features" 
              className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap"
            >
              FEATURES
            </Link>
            <Link 
              href="#how-it-works" 
              className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap"
            >
              HOW IT WORKS
            </Link>
            <Link 
              href="#pricing" 
              className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap"
            >
              PRICING
            </Link>
          </nav>

          <div className="flex items-center gap-4 pl-4 border-l border-black/5">
            <LoginLink
              className="px-4 py-2 font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap"
            >
              LOGIN
            </LoginLink>
            <RegisterLink
              className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-white hover:text-black border border-black transition-colors rounded-full group relative overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10">TRY FREE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </RegisterLink>
          </div>
        </div>
      </div>
    </header>
  );
}