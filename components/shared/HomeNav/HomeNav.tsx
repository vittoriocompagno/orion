import { LoginLink, RegisterLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HomeNav() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isLoading) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:py-8">
      <div className="px-4 sm:px-6 py-3 bg-white/70 backdrop-blur-xl rounded-full border border-black/5 shadow-lg shadow-black/[0.03] max-w-5xl mx-auto">
        <div className="flex items-center justify-between sm:justify-start sm:gap-8">
          <Link 
            href="/" 
            className="px-2 sm:px-4 font-mono text-lg text-gray-900 hover:text-black relative group whitespace-nowrap"
          >
            ORION_
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors active:scale-95 touch-manipulation"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8 px-4">
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

          {/* Desktop Auth Section */}
          <div className="hidden sm:flex items-center gap-4 pl-4 border-l border-black/5 ml-auto">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link 
                  href="/dashboard"
                  className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap flex items-center gap-2"
                >
                  <LayoutDashboard size={18} />
                  DASHBOARD
                </Link>
                {user?.picture ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-black/5 focus:ring-offset-2 active:scale-95 transition-transform touch-manipulation">
                        <Image
                          src={user.picture}
                          alt={user.given_name || 'User avatar'}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="mt-2 bg-white/50 backdrop-blur-xl rounded-[32px] border border-black/5 shadow-lg shadow-black/[0.03] overflow-hidden"
                      align="end"
                      sideOffset={8}
                    >
                      {user?.email && (
                        <div className="px-6 py-4 text-sm truncate border-b border-black/10 font-mono">
                          {user.email}
                        </div>
                      )}
                      <DropdownMenuItem asChild>
                        <LogoutLink 
                          className="w-full flex items-center gap-2 cursor-pointer px-6 py-4 text-sm text-gray-600 hover:bg-black/[0.02] transition-colors font-mono active:scale-95 touch-manipulation"
                        >
                          <LogOut size={16} />
                          ESCI
                        </LogoutLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : null}
              </div>
            ) : (
              <>
                <LoginLink
                  className="px-4 py-2 font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap active:scale-95 touch-manipulation"
                >
                  LOGIN
                </LoginLink>
                <RegisterLink
                  className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 border border-black/5 transition-colors rounded-full whitespace-nowrap active:scale-95 touch-manipulation"
                >
                  TRY FREE
                </RegisterLink>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-x-4 top-[calc(4rem+1rem)] sm:hidden
            bg-white/70 backdrop-blur-xl rounded-[32px] border border-black/5 shadow-lg shadow-black/[0.03]
            transition-all duration-200 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}>
            <nav className="flex flex-col p-4">
              <Link 
                href="#features" 
                className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap px-4 py-3 rounded-full hover:bg-black/[0.02] active:scale-95 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                FEATURES
              </Link>
              <Link 
                href="#how-it-works" 
                className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap px-4 py-3 rounded-full hover:bg-black/[0.02] active:scale-95 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                HOW IT WORKS
              </Link>
              <Link 
                href="#pricing" 
                className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap px-4 py-3 rounded-full hover:bg-black/[0.02] active:scale-95 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                PRICING
              </Link>

              <div className="h-px bg-black/5 my-2" />

              {isAuthenticated ? (
                <>
                  <Link 
                    href="/dashboard"
                    className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap px-4 py-3 rounded-full hover:bg-black/[0.02] active:scale-95 touch-manipulation flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LayoutDashboard size={18} />
                    DASHBOARD
                  </Link>
                  <LogoutLink 
                    className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap px-4 py-3 rounded-full hover:bg-black/[0.02] active:scale-95 touch-manipulation flex items-center gap-2"
                  >
                    <LogOut size={18} />
                    ESCI
                  </LogoutLink>
                </>
              ) : (
                <>
                  <LoginLink
                    className="font-mono text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap px-4 py-3 rounded-full hover:bg-black/[0.02] active:scale-95 touch-manipulation"
                  >
                    LOGIN
                  </LoginLink>
                  <RegisterLink
                    className="font-mono text-sm bg-black text-white hover:bg-black/90 border border-black/5 transition-colors rounded-full whitespace-nowrap px-4 py-3 mt-2 active:scale-95 touch-manipulation flex items-center justify-center"
                  >
                    TRY FREE
                  </RegisterLink>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}