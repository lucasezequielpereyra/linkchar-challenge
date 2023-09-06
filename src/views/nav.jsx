import NavComponent from '@/components/nav'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const Nav = async () => {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()

  return <NavComponent dataUser={session?.user} />
}

export default Nav
