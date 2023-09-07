import Nav from '@/views/nav'
import Sidebar from '@/components/sidebar'
import Movies from '@/views/movies'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export default async function Page() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  return (
    <main>
      <Nav />
      <div className="w-full h-full flex flex-col xl:flex-row">
        <Sidebar />
        <Movies />
      </div>
    </main>
  )
}
