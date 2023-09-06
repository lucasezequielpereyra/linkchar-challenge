import './globals.css'
import Protected from '@/views/protected'

export const metadata = {
  title: 'Linkchar App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-full bg-background">
        <Protected>{children}</Protected>
      </body>
    </html>
  )
}
