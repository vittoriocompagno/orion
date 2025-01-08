import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';

export function HomeNav() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f5f5f5]/80 backdrop-blur-md z-50 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
    className="font-mono text-2xl text-gray-900 hover:text-black relative group"
  >
    ORION_
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
  </Link>
  
  <div className="space-x-2">
    <LoginLink
      className="px-4 py-2 font-mono text-sm text-gray-700 hover:text-black transition-colors"
    >
      ACCEDI
    </LoginLink>
    <RegisterLink
      
      className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-white hover:text-black border border-black transition-colors rounded-sm"
    >
          PROVA GRATIS
        </RegisterLink>
      </div>
    </div>
  </header>
);
}