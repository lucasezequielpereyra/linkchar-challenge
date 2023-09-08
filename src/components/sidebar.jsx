import Trailers from '@/views/trailers'
import Genres from '@/views/genres'

const Sidebar = () => {
  return (
    <div className="xl:fixed  flex flex-row w-full h-full md:h-auto xl:h-[calc(100vh-7rem)] xl:max-h-full xl:flex-column xl:w-1/4 xl:border-r border-gray-800 m-0 p-0 pb-6">
      <div className="w-full">
        <div className="flex flex-col h-full w-full flex-shrink">
          <Trailers />
          <Genres />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
