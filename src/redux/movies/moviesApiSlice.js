import { apiSlice } from '../api/apiSlice'

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () =>
        '/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc'
    }),
    getGenres: builder.query({
      query: () => '/genre/movie/list?language=es'
    })
  })
})

export const { useGetMoviesQuery } = moviesApiSlice
export const { useGetGenresQuery } = moviesApiSlice
