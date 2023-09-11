import propTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

import {
  PlayIcon,
  StarIcon,
  PauseIcon,
  AdjustmentsVerticalIcon,
  SpeakerWaveIcon,
  ArrowsPointingOutIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const ContinueWatching = ({ dataMovies }) => {
  return (
    <div className="relative h-full w-full mt-16">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-white text-2xl font-bold px-2 w-fit">Continuar Viendo</h2>
          <div className="border-t-2 border-gray-600 w-4 rotate-90 mt-0.5 ml-2" />
          <span className="text-sm text-gray-600 mt-0.5 ml-2">2 Movies</span>
        </div>
        <Link href="/movie" className="text-gray-600 flex items-center">
          All Movies <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="relative h-full w-full">
          <div className="flex flex-row items-center justify-between absolute z-10 rounded-md px-2 py-1  bg-transparent backdrop-blur-lg mt-4 ml-4 max-w-full  w-fit h-[35px]">
            <span className="text-white">#1 Trending 🔥</span>
          </div>
          <Image
            src={dataMovies[0]?.backdrop_path || 'http://via.placeholder.com/640x360'}
            alt="Banner de la pelicula"
            width={1000}
            height={170}
            className="rounded-xl -z-0 h-64 w-full object-cover"
          />
          <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-videoBackground backdrop-blur-sm -mt-[100px] max-w-full  w-full h-[100px]">
            <div className="flex flex-row pl-6 gap-4 items-center">
              <div>
                <PlayIcon className="h-10 w-10 sm:h-14 sm:w-14 text-white cursor-pointer" />
              </div>
              <div className="h-full w-full flex flex-col justify-center text-white">
                <div className="text-lg font-semibold"> {dataMovies[0]?.title}</div>
                <div className="rounded-lg text-md font-semibold flex gap-2">
                  {dataMovies[0]?.vote_average}/10
                  <span>
                    <StarIcon className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
            <div className="px-6 flex flex-row">
              <div className="w-0.5 mr-2 bg-gradient-to-t from-gray-500 via-gray-200 to-gray-500"></div>
              <div className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">02:29:20</div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <div className="flex flex-row items-center justify-between absolute z-10 rounded-md px-2 py-1  bg-transparent backdrop-blur-lg mt-4 ml-4 max-w-fit h-[35px]">
            <div className="flex -space-x-2 p-2 overflow-hidden">
              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Personas mirando contenido"
                width={32}
                height={32}
              />
              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Personas mirando contenido"
                width={32}
                height={32}
              />
            </div>
            <span className="text-white">2 Miradores</span>
          </div>
          <Image
            src={dataMovies[1]?.backdrop_path || 'http://via.placeholder.com/640x360'}
            alt="Banner de la pelicula"
            width={1000}
            height={170}
            className="rounded-xl -z-0 h-64 w-full object-cover"
          />
          <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-videoBackground backdrop-blur-sm -mt-[100px] max-w-full  w-full  h-[100px]  ">
            <div className="flex flex-row pl-6 gap-4">
              <div>
                <PauseIcon className="h-14 w-14 text-white cursor-pointer" />
              </div>
            </div>
            <div className="h-full w-full hidden sm:flex items-center gap-8 ">
              <span className="text-gray-400 text-sm ml-2">32:48</span>
              <div className="w-1/3 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
              </div>
              <span className="text-gray-400 text-sm">02:12</span>
            </div>
            <div className="px-6 flex flex-row text-white gap-3">
              <AdjustmentsVerticalIcon className="h-7 w-7" />
              <SpeakerWaveIcon className="h-7 w-7" />
              <ArrowsPointingOutIcon className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContinueWatching

ContinueWatching.propTypes = {
  dataMovies: propTypes.array
}
