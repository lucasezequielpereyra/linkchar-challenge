import Trailers from '@components/trailers'

const Sidebar = () => {
  return (
    <div className="flex flex-row w-full xl:flex-column xl:w-1/4 h-full xl:border-r border-gray-800 m-0 p-0">
      <div className="border-b xl:border-b border-gray-800 w-full h-[30rem] md:h-72 xl:h-[30rem] ">
        <Trailers />
      </div>
    </div>
  )
}

export default Sidebar
