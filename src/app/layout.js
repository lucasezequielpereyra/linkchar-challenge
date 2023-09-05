import './globals.css'

export const metadata = {
  title: 'Linkchar App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-full bg-background">{children}</body>
    </html>
  )
}
