'use client'
import './globals.css'
import { store } from '@redux/store'
import { Provider } from 'react-redux'
import Protected from '@views/protected'

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
