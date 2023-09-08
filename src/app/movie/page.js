import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import Nav from '@/views/nav'
import MoviesList from '@/views/moviesList'

export const metadata = {
  title: 'Linkchar | Movies'
}

export default async function Page() {
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
          <MoviesList />
        </>
      )}
    </>
  )
}
