'use client'
import { useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useDispatch } from 'react-redux'
import { getFavGenres, getFavMovies } from '@/redux/user/userSlice'
import propTypes from 'prop-types'

const Protected = ({ children }) => {
  const supabase = createClientComponentClient()
  const dispatch = useDispatch()

  // every time the component mounts, check if user auth already exists in supabase
  useEffect(() => {
    const checkUser = async () => {
      const session = await supabase.auth.getSession()
      const userSession = session?.data?.session
      if (userSession) {
        try {
          const { data: users } = await supabase.from('users').select('*')
          const user = users?.find(user => user.id === userSession.user.id)
          if (user) {
            // save user data to redux
            dispatch(getFavGenres(user.favGenres))
            dispatch(getFavMovies(user.favMovies))
          } else {
            await supabase
              .from('users')
              .insert({ id: userSession.user.id, favGenres: [], favMovies: [] })
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    checkUser()
  }, [supabase.auth])

  return <>{children}</>
}

export default Protected

Protected.propTypes = {
  children: propTypes.node.isRequired
}
