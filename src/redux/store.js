import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import moviesReducer from './movies/moviesSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    movies: moviesReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})
