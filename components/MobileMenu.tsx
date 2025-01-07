'use client';

import { ChevronRight, X, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import UserMenu from './UserMenu';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

const menuItems = [
  { href: '#features', label: 'FEATURES' },
  { href: '#roadmap', label: 'ROADMAP' },
  { href: '#pricing', label: 'PREZZI' },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (href?.startsWith('#')) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default function MobileMenu({ isOpen, onClose, user }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <div className="h-[72px] border-b-4 border-gray-900">
        <div className="section-container h-full">
          <div className="flex justify-between items-center h-full">
            <a href="/" className="font-mono text-2xl font-bold">
              ORION_
            </a>
            <button 
              onClick={onClose}
              className="font-mono hover:text-accent transition-colors duration-100"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col h-[calc(100vh-72px)]">
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={scrollToSection}
                  className="flex items-center justify-between text-2xl font-mono p-4 border-2 border-gray-900 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  {item.label}
                  <ChevronRight size={24} />
                </a>
              </li>
            ))}
            {user && (
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center justify-between text-2xl font-mono p-4 border-2 border-gray-900 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center gap-2">
                    <LayoutDashboard size={24} />
                    DASHBOARD
                  </div>
                  <ChevronRight size={24} />
                </Link>
              </li>
            )}
          </ul>

          <div className="mt-8">
            {user ? (
              <div className="flex justify-center">
                <UserMenu user={user} onClose={onClose} />
              </div>
            ) : (
              <Link 
                href="/auth/login"
                className="block w-full font-mono px-6 py-4 text-xl shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 bg-black-gradient text-white border-gray-900 text-center"
              >
                ACCEDI →
              </Link>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t-4 border-gray-900">
          <div className="font-mono text-sm text-gray-700">
            ORION_ © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
} 