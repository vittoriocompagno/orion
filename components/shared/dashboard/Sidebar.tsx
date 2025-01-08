'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MAIN_NAVIGATION, SOURCE_NAVIGATION } from '@/app/config/navigation';
import { useState } from 'react';
import { LogOut } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    try {
      setLoading(true);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="w-64 border-r border-black/5 flex flex-col bg-white/80 backdrop-blur-xl">
      {/* Logo */}
      <div className="p-6 border-b border-black/5">
        <Link 
          href="/" 
          className="font-mono text-2xl text-gray-600 hover:text-black transition-colors relative group"
        >
          ORION_
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-50 transition-all group-hover:w-full" />
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {MAIN_NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block font-mono text-sm px-4 py-2 rounded-full transition-all ${
                item.href === pathname
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'text-gray-600 hover:text-black hover:bg-black/[0.02]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sources Section */}
        <div className="mt-8">
          <div className="font-mono text-xs text-gray-600 px-4 mb-2">SORGENTI</div>
          <div className="space-y-1">
            {SOURCE_NAVIGATION.map((source) => (
              <Link
                key={source.href}
                href={source.available ? source.href : '#'}
                className={`block font-mono text-sm px-4 py-2 rounded-full transition-all ${
                  !source.available 
                    ? 'text-gray-400 cursor-not-allowed'
                    : source.href === pathname
                      ? 'bg-black text-white hover:bg-black/90'
                      : 'text-gray-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{source.name}</span>
                  {!source.available && (
                    <span className="text-xs border border-black/5 px-2 py-0.5 rounded-full">
                      PRESTO
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-black/5">
        <button 
          onClick={handleSignOut}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 font-mono text-sm text-gray-600 hover:text-black hover:bg-black/[0.02] transition-all rounded-full disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <LogOut size={16} className="group-hover:scale-110 transition-transform" />
          {loading ? 'USCITA...' : 'ESCI'}
        </button>
      </div>
    </aside>
  );
} 