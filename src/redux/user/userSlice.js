import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    favMovies: [],
    favGenres: []
  },
  reducers: {
    getFavMovies: (state, action) => {
      state.favMovies = action.payload
    },
    getFavGenres: (state, action) => {
      state.favGenres = action.payload
    },
    newFavGenre: (state, action) => {
      state.favGenres = state.favGenres.concat(action.payload)
    },
    deleteFavGenre: (state, action) => {
      state.favGenres = state.favGenres.filter(genre => genre.id !== action.payload)
    },
    newFavMovie: (state, action) => {
      state.favMovies = state.favMovies.concat(action.payload)
    },
    deleteFavMovie: (state, action) => {
      state.favMovies = state.favMovies.filter(movie => movie.id !== action.payload)
    }
  }
})

export const {
  getFavMovies,
  getFavGenres,
  newFavGenre,
  deleteFavGenre,
  newFavMovie,
  deleteFavMovie
} = userSlice.actions

export default userSlice.reducer

export const selectCurrentFavMovies = state => state.user.favMovies
export const selectCurrentFavGenres = state => state.user.favGenres
