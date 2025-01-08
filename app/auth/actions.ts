'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signup(email: string, password: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const cookie = await cookieStore.get(name)
          return cookie?.value
        },
        async set(name: string, value: string, options: CookieOptions) {
          try {
            await cookieStore.set(name, value, {
              path: options.path,
              domain: options.domain,
              maxAge: options.maxAge,
              secure: options.secure,
              sameSite: options.sameSite as 'lax' | 'strict' | 'none',
            })
          } catch {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        async remove(name: string, options: CookieOptions) {
          try {
            await cookieStore.delete(name)
          } catch {
            // The `remove` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return { data: null, error }
  }

  // After signup, we need to sign in the user
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (signInError) {
    return { data: null, error: signInError }
  }

  // Create initial profile
  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: data.user?.id,
      email: email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

  if (profileError) {
    console.error('Error creating profile:', profileError)
    return { data: null, error: profileError }
  }

  return redirect('/onboarding')
}

export async function login(email: string, password: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.delete({ name, ...options })
        },
      },
    }
  )

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { data: null, error }
  }

  // Check if user has completed onboarding by checking profiles table
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('first_name')
    .eq('id', data.user.id)
    .single()

  if (profileError) {
    console.error('Error fetching profile:', profileError)
    return { data: null, error: profileError }
  }

  // If no first_name in profile, redirect to onboarding
  if (!profile?.first_name) {
    return redirect('/onboarding')
  }

  return redirect('/dashboard')
}

export async function signOut() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.delete({ name, ...options })
        },
      },
    }
  )

  const { error } = await supabase.auth.signOut()
  if (error) {
    return { error }
  }

  redirect('/')
} 