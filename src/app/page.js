import Nav from '@/views/nav'
import Sidebar from '@/components/sidebar'
import Movies from '@/views/movies'

export default function Page() {
  return (
    <main>
      <Nav />
      <div className="w-full h-full flex flex-col xl:flex-row">
        <Sidebar />
        <Movies />
      </div>
    </main>
  )
}
