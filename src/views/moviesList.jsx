'use client'
import { useState, useEffect, useRef } from 'react'
import SearchMovie from '@/components/searchMovie'
import SearchMovieCards from '@/components/searchMovieCards'

const MoviesList = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const searchRef = useRef(null)

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
      <SearchMovieCards movies={movies} />
    </div>
  )
}

export default MoviesList
