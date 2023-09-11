import propTypes from 'prop-types'
import Image from 'next/image'
import { PlayIcon, StarIcon } from '@heroicons/react/24/outline'

const MovieBanner = ({ movie }) => {
  return (
    <div className="relative h-full w-full">
      <h2 className="text-white text-2xl font-bold px-2">{movie?.title}</h2>
      <div className="flex flex-row items-center  absolute z-10 rounded-md px-2 py-1 bg-transparent backdrop-blur-sm mt-4 ml-4 max-w-full w-fit]">
        <div className="flex -space-x-2 p-2 overflow-hidden">
          <Image
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Imagen de personas mirando contenido"
            width={32}
            height={32}
          />
          <Image
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Imagen de personas mirando contenido"
            width={32}
            height={32}
          />
        </div>
        <span className="text-white w-fit">2 Amigos estan mirando</span>
      </div>
      <Image
        src={movie?.backdrop_path}
        alt="Picture of the author"
        width={1000}
        height={170}
        priority
        className="rounded-xl -z-0 h-52 w-full object-cover"
      />
      <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-transparent -mt-[70px] w-full max-w-full h-[70px] bg-gray-200 ">
        <div className="flex flex-row pl-6 gap-4">
          <div className="h-full w-full flex flex-col content-around justify-between items-center">
            <button className="bg-orange-600 px-2 py-1 sm:px-5 sm:py-2 rounded-md text-white flex gap-2 items-center">
              <span className="flex items-center">
                <PlayIcon className="h-5 w-5 background" />
              </span>
              Mirar Ahora
            </button>
          </div>
        </div>
        <div className="px-6 flex flex-row">
          <div className="bg-white px-2 py-1 rounded-lg text-sm flex gap-2">
            {movie?.vote_average}/10
            <span>
              <StarIcon className="h-5 w-5 text-yellow-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieBanner

MovieBanner.propTypes = {
  movie: propTypes.object.isRequired
}
