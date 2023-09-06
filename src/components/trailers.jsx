import Image from 'next/image'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

const Trailers = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col">
      <h3 className="text-white text-xl">Nuevos Trailers</h3>
      <div className="flex flex-col md:flex-row xl:flex-col gap-4 mt-4 xl:mt-10 items-center">
        <div className="relative h-full w-full">
          <Image
            src="https://via.placeholder.com/450x170"
            alt="Picture of the author"
            width={450}
            height={170}
            className="rounded-xl -z-0 h-[170px] w-full"
          />
          <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-videoBackground -mt-[70px] w-full xl:w-[450px] max-w-full h-[70px] bg-gray-200 ">
            <div className="flex flex-row pl-6 gap-4">
              <div>
                <PlayCircleIcon className="h-12 w-12 text-white" />
              </div>
              <div className="h-full w-full flex flex-col justify-center">
                <div className="text-xs text-white">Title</div>
                <div className="text-xs text-white">Country</div>
                <div className="text-xs text-white">Time</div>
              </div>
            </div>
            <div className="px-6 flex flex-row">
              <div className="w-0.5 mr-2 bg-gradient-to-t from-gray-500 via-white to-gray-500"></div>
              <div className="bg-white px-2 rounded-lg text-sm">01:29</div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://via.placeholder.com/450x170"
            alt="Picture of the author"
            width={450}
            height={170}
            className="rounded-xl -z-0 h-[170px] w-full"
          />
          <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-videoBackground -mt-[70px] w-full xl:w-[450px] max-w-full h-[70px] bg-gray-200 ">
            <div className="flex flex-row pl-6 gap-4">
              <div>
                <PlayCircleIcon className="h-12 w-12 text-white" />
              </div>
              <div className="h-full w-full flex flex-col justify-center">
                <div className="text-xs text-white">Title</div>
                <div className="text-xs text-white">Country</div>
                <div className="text-xs text-white">Time</div>
              </div>
            </div>
            <div className="px-6 flex flex-row">
              <div className="w-0.5 mr-2 bg-gradient-to-t from-gray-500 via-white to-gray-500"></div>
              <div className="bg-white px-2 rounded-lg text-sm">01:29</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trailers
