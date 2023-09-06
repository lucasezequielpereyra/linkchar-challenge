import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiUrl = String(process.env.NEXT_PUBLIC_API_URL)
const apiToken = String(process.env.NEXT_PUBLIC_API_TOKEN)

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  prepareHeaders: headers => {
    const token = apiToken
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: builder => ({})
})
