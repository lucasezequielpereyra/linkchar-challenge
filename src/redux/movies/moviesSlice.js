import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], genres: [], upcoming: [] },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload
    },
    getGenres: (state, action) => {
      state.genres = action.payload.genres
    },
    getNewsMovies: (state, action) => {
      state.upcoming = action.payload.results
    }
  }
})

export const { getMovies, getGenres } = moviesSlice.actions

export default moviesSlice.reducer

export const selectCurrentMovies = state => state.movies.movies
export const selectCurrentGenres = state => state.movies.genres
