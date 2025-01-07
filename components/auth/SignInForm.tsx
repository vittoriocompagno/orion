'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth logic will be implemented later
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-mono mb-8 text-center">ACCEDI_</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block font-mono text-sm text-gray-700">
            EMAIL
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 font-mono bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="la-tua-email@esempio.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-mono text-sm text-gray-700">
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 font-mono bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 font-mono text-gray-700">
            <input
              type="checkbox"
              className="w-4 h-4 border border-gray-700"
            />
            RICORDAMI
          </label>
          <Link href="/auth/recovery" className="font-mono text-accent hover:underline">
            PASSWORD DIMENTICATA?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full font-mono px-8 py-4 text-xl bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform"
        >
          ACCEDI →
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 font-mono bg-[#f5f5f5] text-gray-700">
              OPPURE
            </span>
          </div>
        </div>

        <button
          type="button"
          className="w-full font-mono px-8 py-4 text-xl bg-white text-gray-700 border border-gray-700 hover:translate-y-[-2px] transition-transform"
        >
          CONTINUA CON GOOGLE
        </button>

        <p className="text-center font-mono text-sm text-gray-700 mt-8">
          NON HAI UN ACCOUNT?{' '}
          <Link href="/auth/signup" className="text-accent hover:underline">
            REGISTRATI
          </Link>
        </p>
      </form>
    </div>
  );
} 