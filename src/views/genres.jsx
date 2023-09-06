'use client'
import { useGetGenresQuery } from '@/redux/movies/moviesApiSlice'
import { getGenres } from '@/redux/movies/moviesSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import GenresComponent from '@/components/genres'

const Genres = () => {
  const dispatch = useDispatch()

  const { data, isSuccess } = useGetGenresQuery()

  useEffect(() => {
    if (isSuccess) {
      dispatch(getGenres(data))
    }
  }, [isSuccess])

  return <GenresComponent />
}

export default Genres
