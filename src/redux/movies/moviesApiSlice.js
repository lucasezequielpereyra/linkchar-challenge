import { apiSlice } from '../api/apiSlice'

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => '/movie/upcoming?language=es-Es&page=1'
    }),
    getGenres: builder.query({
      query: () => '/genre/movie/list?language=es'
    }),
    getNewsMovies: builder.query({
      query: () => `/movie/upcoming?language=es-ES&page=1`
    }),
    getPopularMovies: builder.query({
      query: () =>
        `/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&primary_release_year=2021&sort_by=popularity.desc`
    })
  })
})

export const { useGetMoviesQuery } = moviesApiSlice
export const { useGetGenresQuery } = moviesApiSlice
export const { useGetNewsMoviesQuery } = moviesApiSlice
export const { useGetPopularMoviesQuery } = moviesApiSlice
