'use client'
import './globals.css'
import Protected from '@/views/protected'
import { store } from '@redux/store'
import { Provider } from 'react-redux'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-full bg-background">
        <Provider store={store}>
          <Protected>{children}</Protected>
        </Provider>
      </body>
    </html>
  )
}
