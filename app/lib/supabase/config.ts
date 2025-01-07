export const SUPABASE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  tables: {
    profiles: 'profiles',
    business_profiles: 'business_profiles',
  },
  auth: {
    redirects: {
      login: '/dashboard',
      signup: '/onboarding',
      callback: '/auth/callback',
    },
    protected: [],
  },
} as const 