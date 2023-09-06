import { apiSlice } from '../api/apiSlice'

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => '/movie/changes?page=1'
    })
  })
})

export const { useGetMoviesQuery } = moviesApiSlice
