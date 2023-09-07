'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useDispatch } from 'react-redux'
import { getFavGenres, getFavMovies } from '@/redux/user/userSlice'
import propTypes from 'prop-types'
import Public from './public'

const Protected = ({ children }) => {
  const supabase = createClientComponentClient()
  const [session, setSession] = useState(null)
  const dispatch = useDispatch()

  // every time the component mounts, check for a session
  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession()
      setSession(session.data.session)
    }

    getSession()
  }, [supabase.auth])

  // every time the component mounts, check if user auth already exists in supabase
  useEffect(() => {
    const checkUser = async () => {
      const session = await supabase.auth.getSession()
      const userSession = session?.data?.session
      if (userSession) {
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
      }
    }

    checkUser()
  }, [supabase.auth])

  // if there is a session, render the children
  const defineSession = () => {
    if (session) {
      return <>{children}</>
    } else {
      return <Public />
    }
  }

  return <>{defineSession()}</>
}

export default Protected

Protected.propTypes = {
  children: propTypes.node.isRequired
}
