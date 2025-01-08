'use client';

import { ChevronRight, X, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { UserMenu } from './UserMenu';

// Move interfaces and constants outside component
interface User {
  id: string;
  email: string | null;
  given_name: string | null;
  family_name: string | null;
  picture: string | null;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

const MENU_ITEMS = [
  { href: '#features', label: 'FEATURES' },
  { href: '#roadmap', label: 'ROADMAP' },
  { href: '#pricing', label: 'PREZZI' },
] as const;

// Separate helper function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (!href?.startsWith('#')) return;
  
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};

// Separate components for better organization
const MenuItem = ({ href, label, icon: Icon }: { href: string, label: string, icon?: React.ComponentType<any> }) => (
  <a
    href={href}
    onClick={href.startsWith('#') ? scrollToSection : undefined}
    className="flex items-center justify-between text-2xl font-mono p-4 border-2 border-gray-900 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform"
  >
    <div className="flex items-center gap-2">
      {Icon && <Icon size={24} />}
      {label}
    </div>
    <ChevronRight size={24} />
  </a>
);

export default function MobileMenu({ isOpen, onClose, user }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <header className="h-[72px] border-b-4 border-gray-900">
        <div className="section-container h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="font-mono text-2xl font-bold">
              ORION_
            </Link>
            <button 
              onClick={onClose}
              className="font-mono hover:text-accent transition-colors duration-100"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col h-[calc(100vh-72px)]">
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-6">
            {MENU_ITEMS.map(item => (
              <li key={item.href}>
                <MenuItem {...item} />
              </li>
            ))}
            {user && (
              <li>
                <MenuItem 
                  href="/dashboard" 
                  label="DASHBOARD" 
                  icon={LayoutDashboard} 
                />
              </li>
            )}
          </ul>

          <div className="mt-8">
            {user ? (
              <div className="flex justify-center">
                <UserMenu user={user} />
              </div>
            ) : (
              <LoginLink 
                className="block w-full font-mono px-6 py-4 text-xl shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 bg-black-gradient text-white border-gray-900 text-center"
              >
                ACCEDI →
              </LoginLink>
            )}
          </div>
        </nav>

        <footer className="p-6 border-t-4 border-gray-900">
          <div className="font-mono text-sm text-gray-700">
            ORION_ © {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
} 