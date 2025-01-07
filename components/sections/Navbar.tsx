'use client';

import { useState, useEffect } from 'react';
import { Menu, LogIn, ChevronRight, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';
import UserMenu from '../UserMenu';
import { createClient } from '@/app/utils/supabase/client';
import { User } from '@supabase/supabase-js';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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

  return (
    <>
      <nav className={`h-[72px] bg-white transition-all duration-100 ${
        isScrolled ? 'shadow-brutal' : ''
      }`}>
        <div className="section-container h-full">
          <div className="flex justify-between items-center h-full">
            <a href="/" className="font-mono text-2xl font-bold hover:text-accent transition-colors duration-100">
              ORION_
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" onClick={scrollToSection} className="font-mono hover:text-accent transition-colors duration-100">FEATURES</a>
              <a href="#roadmap" onClick={scrollToSection} className="font-mono hover:text-accent transition-colors duration-100">ROADMAP</a>
              <a href="#pricing" onClick={scrollToSection} className="font-mono hover:text-accent transition-colors duration-100">PREZZI</a>
              {user ? (
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
                <Link 
                  href="/auth/login"
                  className="font-mono px-4 py-2 shadow-brutal hover:translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all duration-100 border-2 bg-black-gradient text-white border-gray-900 flex items-center gap-2"
                >
                  <LogIn size={18} />
                  ACCEDI
                  <ChevronRight size={18} />
                </Link>
              )}
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden font-mono hover:text-accent transition-colors duration-100"
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