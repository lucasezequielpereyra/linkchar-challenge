import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import moviesReducer from './movies/moviesSlice'
import userReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    movies: moviesReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})
