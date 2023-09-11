'use client'
import { useState, useEffect, useRef } from 'react'
import SearchMovie from '@/components/searchMovie'
import SearchMovieCards from '@/components/searchMovieCards'
import { getFavMovies, newFavMovie } from '@/redux/user/userSlice'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentFavMovies } from '@/redux/user/userSlice'

const MoviesList = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [session, setSession] = useState(null)

  const searchRef = useRef(null)

  const supabase = createClientComponentClient()
  const dispatch = useDispatch()

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

  // get fav movies from redux
  const favMoviesRedux = useSelector(selectCurrentFavMovies)
  const [newFavMovies, setNewFavMovies] = useState([])

  useEffect(() => {
    setNewFavMovies(favMoviesRedux)
  }, [favMoviesRedux])

  // effect for update fav movies db when favMovies change
  useEffect(() => {
    if (session) {
      const updateFavMovies = async () => {
        try {
          await supabase
            .from('users')
            .update({ favMovies: newFavMovies })
            .eq('id', session?.user?.id)
        } catch (error) {
          console.error(error)
        }
      }
      updateFavMovies()
    }
  }, [newFavMovies])

  // set fav movies to local state
  const handleAddToWatchList = async movie => {
    dispatch(newFavMovie(movie))
  }

  const handleDeleteFavMovie = async movie => {
    const newsFav = newFavMovies.filter(favMovie => favMovie.id !== movie.id)
    dispatch(getFavMovies(newsFav))
  }

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  // handle search movie on enter key
  useEffect(() => {
    const handleClickEscKey = e => {
      if (e.key === 'Enter') {
        handleSearchMovie()
      }
    }

    document.addEventListener('keydown', handleClickEscKey)
    return () => {
      document.removeEventListener('keydown', handleClickEscKey)
    }
  }, [search])

  const handleSearch = e => {
    // normalize search query
    const searchQuery = e.target.value.replace(/\s/g, '%20')
    setSearch(searchQuery)
  }

  const handleSearchMovie = async () => {
    if (search === '') {
      return
    }

    // fetching data
    const response = await fetch(
      `https://api.themoviedb.org/3//search/movie?query=${search}&include_adult=false&language=es-ES&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
      }
    )
    const data = await response.json()

    setSearch('')

    // normalize data
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500'
    return setMovies(
      data.results.map(movie => ({
        ...movie,
        backdrop_path: `${baseImageUrl}/${movie.backdrop_path}`,
        poster_path: `${baseImageUrl}/${movie.poster_path}`
      }))
    )
  }

  return (
    <div>
      <SearchMovie
        handleSearch={handleSearch}
        search={search}
        searchRef={searchRef}
        handleSearchMovie={handleSearchMovie}
        movies={movies}
      />
      <SearchMovieCards
        movies={movies}
        handleAddToWatchList={handleAddToWatchList}
        handleDeleteFavMovie={handleDeleteFavMovie}
      />
    </div>
  )
}

export default MoviesList
