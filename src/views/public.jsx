'use client'
import FormLogin from '@/components/formLogin'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const Public = () => {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  return (
    <div className="h-screen w-screen">
      <FormLogin handleSignIn={handleSignIn} />
    </div>
  )
}

export default Public
