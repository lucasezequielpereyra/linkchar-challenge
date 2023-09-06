'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import propTypes from 'prop-types'
import Public from './public'

const Protected = ({ children }) => {
  const supabase = createClientComponentClient()
  const [session, setSession] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession()
      setSession(session.data.session)
    }

    getSession()
  }, [supabase.auth])

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
