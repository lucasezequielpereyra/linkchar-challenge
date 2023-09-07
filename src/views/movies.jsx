'use client'
import { useGetMoviesQuery } from '@/redux/movies/moviesApiSlice'
import { getMovies } from '@/redux/movies/moviesSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import MoviesComponent from '@/components/movies'

const Movies = () => {
  const dispatch = useDispatch()

  const { data, isSuccess } = useGetMoviesQuery()

  // url for normalizing images
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
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
  }, [isSuccess])

  const getRandom = () => {
    return Math.floor(Math.random() * (19 - 0)) + 0
  }

  return <MoviesComponent random={getRandom()} />
}

export default Movies
