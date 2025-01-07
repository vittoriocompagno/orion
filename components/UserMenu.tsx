'use client';

import { createClient } from '@/app/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface UserMenuProps {
  user: User;
  onClose?: () => void;
}

export default function UserMenu({ user, onClose }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // Get first letter of email as avatar
  const initial = user.email?.[0].toUpperCase() || 'U';

  async function handleSignOut() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      router.push('/');
      if (onClose) onClose();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  }

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center hover:translate-y-[-2px] transition-transform"
      >
        {initial}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-gray-900 shadow-brutal">
          <div className="p-2">
            <div className="font-mono text-sm truncate mb-2 px-3 py-2">
              {user.email}
            </div>
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="w-full flex items-center gap-2 px-3 py-2 font-mono text-sm text-gray-700 hover:text-black hover:bg-gray-100 transition-colors rounded-sm"
            >
              <LogOut size={16} />
              {loading ? 'USCITA...' : 'ESCI'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 