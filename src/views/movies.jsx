'use client'
import {
  useGetMoviesQuery,
  useGetPopularMoviesQuery,
  useGetMoviesByGenreQuery
} from '@/redux/movies/moviesApiSlice'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { getMovies, getPopularMovies, getMoviesByGenre } from '@/redux/movies/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  selectCurrentFavGenres,
  selectCurrentFavMovies,
  removeFavMovie
} from '@/redux/user/userSlice'
import MoviesComponent from '@/components/movies'

const Movies = () => {
  const dispatch = useDispatch()

  const { data, status } = useGetMoviesQuery()
  const { data: popularData, status: popularStatus } = useGetPopularMoviesQuery()

  const [loading, setLoading] = useState(true)
  const [loadingPopular, setLoadingPopular] = useState(true)
  const [loadingMoviesByGenre, setLoadingMoviesByGenre] = useState(true)
  const [session, setSession] = useState(null)

  // supabase
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkUser = async () => {
      const session = await supabase.auth.getSession()
      const userSession = session?.data?.session
      if (userSession) {
        setSession(userSession)
      }
    }

    checkUser()
  }, [])

  // url for normalizing images
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'

  // get data movies
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

  // get data popular movies
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

  // get data movies by genre
  const favGenres = useSelector(selectCurrentFavGenres)
  const genresId = favGenres.map(genre => genre.id)

  // parse array to string
  const genresIdString = genresId.join('%2C')

  const { data: moviesByGenreData, status: moviesByGenreStatus } =
    useGetMoviesByGenreQuery(genresIdString)

  // get data movies by genre
  useEffect(() => {
    if (moviesByGenreStatus === 'fulfilled') {
      dispatch(
        getMoviesByGenre(
          moviesByGenreData?.results.map(movie => ({
            ...movie,
            backdrop_path: `${baseImageUrl}/${movie.backdrop_path}`,
            poster_path: `${baseImageUrl}/${movie.poster_path}`
          }))
        )
      )
      setLoadingMoviesByGenre(false)
    }
  }, [moviesByGenreStatus])

  // get fav movies from redux
  const favMoviesRedux = useSelector(selectCurrentFavMovies)

  // handle delete movie from fav movies
  const handleDeleteMovie = async movie => {
    // filter movie from fav movies
    const favMovies = favMoviesRedux.filter(favMovie => favMovie.id !== movie.id)
    // save movie to supabase
    await supabase.from('users').update({ favMovies: favMovies }).eq('id', session?.user?.id)

    // save movie to redux
    dispatch(removeFavMovie(movie))
  }

  return (
    <>
      {loading || loadingPopular || loadingMoviesByGenre ? (
        <div className="loading text-white">Loading...</div>
      ) : (
        <MoviesComponent random={getRandom()} handleDeleteMovie={handleDeleteMovie} />
      )}
    </>
  )
}

export default Movies
