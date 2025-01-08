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
    <aside className="w-64 border-r border-gray-700 flex flex-col bg-white">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <Link 
          href="/" 
          className="font-mono text-2xl text-gray-700 hover:text-black transition-colors"
        >
          ORION_
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {MAIN_NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block font-mono text-sm px-4 py-2 rounded-sm transition-colors ${
                item.href === pathname
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sources Section */}
        <div className="mt-8">
          <div className="font-mono text-xs text-gray-700 px-4 mb-2">SORGENTI</div>
          <div className="space-y-1">
            {SOURCE_NAVIGATION.map((source) => (
              <Link
                key={source.href}
                href={source.available ? source.href : '#'}
                className={`block font-mono text-sm px-4 py-2 rounded-sm transition-colors ${
                  !source.available 
                    ? 'text-gray-400 cursor-not-allowed'
                    : source.href === pathname
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{source.name}</span>
                  {!source.available && (
                    <span className="text-xs border border-gray-400 px-1 rounded-sm">
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
      <div className="p-4 border-t border-gray-700">
        <button 
          onClick={handleSignOut}
          disabled={loading}
          className="w-full flex items-center gap-2 px-4 py-2 font-mono text-sm text-gray-700 hover:text-black hover:bg-gray-100 transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <LogOut size={16} />
          {loading ? 'USCITA...' : 'ESCI'}
        </button>
      </div>
    </aside>
  );
} 