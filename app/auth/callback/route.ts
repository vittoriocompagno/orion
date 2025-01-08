import { createClient } from '@/app/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      const { data: { user } } = await supabase.auth.getUser()
      
      // Check if user has completed onboarding
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', user?.id)
        .single()

      if (profile?.onboarding_completed) {
        return NextResponse.redirect(requestUrl.origin + '/dashboard')
      } else {
        return NextResponse.redirect(requestUrl.origin + '/onboarding')
      }
    }
  }

  return NextResponse.redirect(requestUrl.origin + '/auth/auth-code-error')
} 