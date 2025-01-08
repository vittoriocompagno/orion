'use client';

import { useState, useEffect } from 'react';
import { Menu, LogIn, ChevronRight, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// Import components from same directory level
import MobileMenu from '../Menu/MobileMenu';
import { UserMenu } from '../Menu/UserMenu';

// Constants
const NAV_ITEMS = [
  { href: '#features', label: 'FEATURES' },
  { href: '#roadmap', label: 'ROADMAP' },
  { href: '#pricing', label: 'PREZZI' },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) return null;

  return (
    <>
      <nav className={`h-[72px] bg-white transition-all duration-100 ${
        isScrolled ? 'shadow-brutal' : ''
      }`}>
        <div className="section-container h-full">
          <div className="flex justify-between items-center h-full">
            <Link 
              href="/" 
              className="font-mono text-2xl font-bold hover:text-accent transition-colors duration-100"
            >
              ORION_
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={scrollToSection}
                  className="font-mono hover:text-accent transition-colors duration-100"
                >
                  {label}
                </a>
              ))}

              {isAuthenticated ? (
                <>
                  <Link 
                    href="/dashboard"
                    className="font-mono hover:text-accent transition-colors duration-100 flex items-center gap-2"
                  >
                    <LayoutDashboard size={18} />
                    DASHBOARD
                  </Link>
                  <UserMenu user={user} />
                </>
              ) : (
                <LoginLink className="font-mono px-4 py-2 shadow-brutal hover:translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all duration-100 border-2 bg-black-gradient text-white border-gray-900 flex items-center gap-2">
                  <LogIn size={18} />
                  ACCEDI
                  <ChevronRight size={18} />
                </LoginLink>
              )}
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden font-mono hover:text-accent transition-colors duration-100"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
      />
    </>
  );
} 