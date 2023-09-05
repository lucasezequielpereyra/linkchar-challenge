import './globals.css'
import Nav from '@/components/nav'
import Sidebar from '@/components/sidebar'

export const metadata = {
  title: 'Linkchar App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-full bg-background">
        <div className="w-full h-full">
          <Nav />
          <div className="h-[calc(100vh-7rem)]">
            <Sidebar />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
