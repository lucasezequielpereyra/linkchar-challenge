import { apiSlice } from '../api/apiSlice'

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => '/movie/changes?page=1'
    }),
    getGenres: builder.query({
      query: () => '/genre/movie/list?language=es'
    })
  })
})

export const { useGetMoviesQuery } = moviesApiSlice
export const { useGetGenresQuery } = moviesApiSlice
