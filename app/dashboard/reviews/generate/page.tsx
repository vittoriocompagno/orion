import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import LinkGeneratorForm from './LinkGeneratorForm'

export default async function ReviewGeneratorPage() {
  const supabase = await createClient()
  
  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/auth/login')
  }

  return <LinkGeneratorForm user={user} />
} 