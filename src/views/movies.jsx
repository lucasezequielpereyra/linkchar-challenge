'use client'
import { useGetMoviesQuery, useGetPopularMoviesQuery } from '@/redux/movies/moviesApiSlice'
import { getMovies, getPopularMovies } from '@/redux/movies/moviesSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import MoviesComponent from '@/components/movies'

const Movies = () => {
  const dispatch = useDispatch()

  const { data, status } = useGetMoviesQuery()
  const { data: popularData, status: popularStatus } = useGetPopularMoviesQuery()

  const [loading, setLoading] = useState(true)
  const [loadingPopular, setLoadingPopular] = useState(true)

  // url for normalizing images
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    if (status === 'fulfilled') {
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
  }, [status])

  useEffect(() => {
    if (popularStatus === 'fulfilled') {
      dispatch(
        getPopularMovies(
          popularData?.results.map(movie => ({
            ...movie,
            backdrop_path: `${baseImageUrl}/${movie.backdrop_path}`,
            poster_path: `${baseImageUrl}/${movie.poster_path}`
          }))
        )
      )
    }
    setLoadingPopular(false)
  }, [popularStatus])

  const getRandom = () => {
    return Math.floor(Math.random() * (19 - 0)) + 0
  }

  return (
    <>
      {loading || loadingPopular ? (
        <div className="loading text-white">Loading...</div>
      ) : (
        <MoviesComponent random={getRandom()} />
      )}
    </>
  )
}

export default Movies
