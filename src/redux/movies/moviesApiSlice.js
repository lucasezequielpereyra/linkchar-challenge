import { apiSlice } from '../api/apiSlice'

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => '/movie/upcoming?language=es-Es&page=1'
    })
  })
})

const genresApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getGenres: builder.query({
      query: () => '/genre/movie/list?language=es'
    })
  })
})

const newsMoviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNewsMovies: builder.query({
      query: () => `/movie/upcoming?language=es-ES&page=1`
    })
  })
})

const popularMoviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPopularMovies: builder.query({
      query: () =>
        `/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&primary_release_year=2021&sort_by=popularity.desc`
    })
  })
})

const moviesByGenreApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMoviesByGenre: builder.query({
      query: genres =>
        `/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=${genres}`
    })
  })
})

export const { useGetMoviesQuery } = moviesApiSlice
export const { useGetGenresQuery } = genresApiSlice
export const { useGetNewsMoviesQuery } = newsMoviesApiSlice
export const { useGetPopularMoviesQuery } = popularMoviesApiSlice
export const { useGetMoviesByGenreQuery } = moviesByGenreApiSlice
