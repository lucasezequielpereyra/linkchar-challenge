'use client'
import { useGetMoviesQuery } from '@/redux/movies/moviesApiSlice'
import { getMovies } from '@/redux/movies/moviesSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import MoviesComponent from '@/components/movies'

const Movies = () => {
  const dispatch = useDispatch()

  const { data, isSuccess, status } = useGetMoviesQuery()
  const [loading, setLoading] = useState(false)

  // url for normalizing images
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    if (status === 'pending') {
      setLoading(true)
    }
    if (isSuccess) {
      dispatch(
        getMovies(
          data?.results.map(movie => ({
            ...movie,
            backdrop_path: `${baseImageUrl}/${movie.backdrop_path}`,
            poster_path: `${baseImageUrl}/${movie.poster_path}`
          }))
        )
      )
    }
    setLoading(false)
  }, [isSuccess])

  const getRandom = () => {
    return Math.floor(Math.random() * (19 - 0)) + 0
  }

  return (
    <>
      {loading ? (
        <div className="loading text-white">Loading...</div>
      ) : (
        <MoviesComponent random={getRandom()} />
      )}
    </>
  )
}

export default Movies
