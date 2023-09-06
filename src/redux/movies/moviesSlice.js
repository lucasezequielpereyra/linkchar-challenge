import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], genres: [] },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload
    },
    getGenres: (state, action) => {
      state.genres = action.payload.genres
    }
  }
})

export const { getMovies, getGenres } = moviesSlice.actions

export default moviesSlice.reducer

export const selectCurrentMovies = state => state.movies.movies
export const selectCurrentGenres = state => state.movies.genres
