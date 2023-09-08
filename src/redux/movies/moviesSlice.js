import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], genres: [], news: [], popular: [], byGenre: [] },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload
    },
    getGenres: (state, action) => {
      state.genres = action.payload.genres
    },
    getNewsMovies: (state, action) => {
      state.news = action.payload
    },
    getPopularMovies: (state, action) => {
      state.popular = action.payload
    },
    getMoviesByGenre: (state, action) => {
      state.byGenre = action.payload
    }
  }
})

export const { getMovies, getGenres, getNewsMovies, getPopularMovies, getMoviesByGenre } =
  moviesSlice.actions

export default moviesSlice.reducer

export const selectCurrentMovies = state => state.movies.movies
export const selectCurrentGenres = state => state.movies.genres
export const selectCurrentNewsMovies = state => state.movies.news
export const selectCurrentPopularMovies = state => state.movies.popular
export const selectCurrentMoviesByGenre = state => state.movies.byGenre
