'use client';

import { LogOut } from 'lucide-react';
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  user: {
    email: string | null;
    given_name: string | null;
    family_name: string | null;
    picture: string | null;
  } | null;
}

export function UserMenu({ user }: UserMenuProps) {
  const initial = user?.email?.[0].toUpperCase() || 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="w-10 h-10 rounded-none bg-black text-white font-mono font-bold 
                     flex items-center justify-center hover:-translate-y-0.5 
                     transition-transform focus:outline-none focus:ring-2 
                     focus:ring-black focus:ring-offset-2"
          aria-label="Menu utente"
        >
          {initial}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        className="w-48 rounded-none border-2 border-black font-mono shadow-brutal"
        align="end"
      >
        {user?.email && (
          <div className="px-3 py-2 text-sm truncate border-b-2 border-black">
            {user.email}
          </div>
        )}
        
        <DropdownMenuItem asChild>
          <LogoutLink className="w-full flex items-center gap-2 cursor-pointer">
            <LogOut size={16} />
            ESCI
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 