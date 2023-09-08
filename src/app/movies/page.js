import Nav from '@/views/nav'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

const Page = async () => {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  return (
    <>
      {session && (
        <>
          <Nav />
        </>
      )}
    </>
  )
}

export default Page
