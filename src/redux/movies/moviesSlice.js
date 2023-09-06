import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], genres: [] },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload
    }
  }
})

export const { getMovies } = moviesSlice.actions

export default moviesSlice.reducer

export const selectCurrentMovies = state => state.movies.movies
