'use client'
import { useEffect } from 'react'
import { useGetNewsMoviesQuery } from '@/redux/movies/moviesApiSlice'
import { getNewsMovies } from '@/redux/movies/moviesSlice'
import { useDispatch } from 'react-redux'
import TrailersComponent from '@/components/trailers'

const Trailers = () => {
  const dispatch = useDispatch()

  const { data, isSuccess } = useGetNewsMoviesQuery()

  // url for normalize images
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        getNewsMovies(
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
    let n1 = Math.floor(Math.random() * (19 - 0)) + 0
    let n2 = Math.floor(Math.random() * (19 - 0)) + 0

    // check not equal
    while (n1 === n2) {
      n2 = Math.floor(Math.random() * (19 - 0)) + 0
    }

    return [n1, n2]
  }

  return <TrailersComponent random={getRandom()} />
}

export default Trailers
