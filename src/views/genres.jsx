'use client'
import { useGetGenresQuery } from '@/redux/movies/moviesApiSlice'
import { getGenres } from '@/redux/movies/moviesSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import GenresComponent from '@/components/genres'

const Genres = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const { data, isSuccess, status } = useGetGenresQuery()

  useEffect(() => {
    if (status === 'pending') {
      setLoading(true)
    }
    if (isSuccess) {
      dispatch(getGenres(data))
      setLoading(false)
    }
  }, [isSuccess])

  return <>{loading ? <div className="loading text-white">Loading...</div> : <GenresComponent />}</>
}

export default Genres
