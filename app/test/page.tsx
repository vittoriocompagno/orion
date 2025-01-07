'use client'

import { createClient } from '@/app/utils/supabase/client'
import { useState } from 'react'

export default function TestPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)

  const supabase = createClient()

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error
      
      console.log('Sign up successful:', data)
      setUser(data.user)
    } catch (error: any) {
      setError(error.message)
      console.error('Sign up error:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      
      console.log('Sign in successful:', data)
      setUser(data.user)
    } catch (error: any) {
      setError(error.message)
      console.error('Sign in error:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSignOut() {
    try {
      setLoading(true)
      setError(null)
      
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      setUser(null)
    } catch (error: any) {
      setError(error.message)
      console.error('Sign out error:', error)
    } finally {
      setLoading(false)
    }
  }

  async function checkSession() {
    try {
      setLoading(true)
      setError(null)
      
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) throw error
      
      setUser(user)
      console.log('Current user:', user)
    } catch (error: any) {
      setError(error.message)
      console.error('Session check error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="font-mono text-2xl font-bold mb-8">Test Auth</h1>

      {/* Auth Form */}
      <form className="space-y-4 mb-8">
        <div>
          <label className="block font-mono text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 font-mono text-sm"
          />
        </div>

        <div>
          <label className="block font-mono text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 font-mono text-sm"
          />
        </div>

        {error && (
          <div className="font-mono text-sm text-red-500">
            {error}
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="px-4 py-2 bg-black text-white font-mono text-sm"
          >
            Sign Up
          </button>
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="px-4 py-2 bg-black text-white font-mono text-sm"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Session Info */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <button
            onClick={handleSignOut}
            disabled={loading}
            className="px-4 py-2 border border-gray-700 font-mono text-sm"
          >
            Sign Out
          </button>
          <button
            onClick={checkSession}
            disabled={loading}
            className="px-4 py-2 border border-gray-700 font-mono text-sm"
          >
            Check Session
          </button>
        </div>

        {user && (
          <pre className="p-4 bg-gray-100 font-mono text-sm overflow-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        )}
      </div>
    </div>
  )
} 