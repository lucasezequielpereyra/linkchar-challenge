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
    })
  })
})

export const { useGetMoviesQuery } = moviesApiSlice
export const { useGetGenresQuery } = moviesApiSlice
export const { useGetNewsMoviesQuery } = moviesApiSlice
