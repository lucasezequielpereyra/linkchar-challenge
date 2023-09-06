import Nav from '@/components/nav'
import Sidebar from '@/components/sidebar'

export default function Page() {
  return (
    <main>
      <Nav />
      <div className="w-full h-[calc(100vh-7rem)] ">
        <Sidebar />
      </div>
    </main>
  )
}
