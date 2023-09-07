'use client'
import Image from 'next/image'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { selectCurrentNewsMovies } from '@/redux/movies/moviesSlice'
import propTypes from 'prop-types'

const Trailers = ({ random }) => {
  const dataMovies = useSelector(selectCurrentNewsMovies)
  const randomMovies = [dataMovies[random[0]], dataMovies[random[1]]]

  return (
    <div className="w-full h-full p-6 flex flex-col border-b border-gray-800 px-10 xl:px-4 2xl:px-10">
      <h3 className="text-white text-xl">Nuevos Trailers</h3>
      <div className="flex flex-col md:flex-row xl:flex-col gap-4 mt-4 xl:mt-10 items-center m-auto">
        {randomMovies.map(movie => {
          return (
            <div className="relative h-full w-full" key={movie?.id}>
              <Image
                src={movie?.backdrop_path}
                alt="Picture of the author"
                width={450}
                height={170}
                className="rounded-xl -z-0 h-[170px]  w-[450px] md:w-full lg:w-[450px] xl:w-full"
              />
              <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-videoBackground -mt-[70px] max-w-full  w-[450px] md:w-full lg:w-[450px] xl:w-full h-[70px] bg-gray-200 ">
                <div className="flex flex-row pl-6 gap-4">
                  <div>
                    <PlayCircleIcon className="h-12 w-12 text-white cursor-pointer" />
                  </div>
                  <div className="h-full w-full flex flex-col justify-center">
                    <div className="text-xs text-white"> {movie?.title}</div>
                    <div className="text-xs text-white">{movie?.release_date}</div>
                    <div className="text-xs text-white">{movie?.original_language}</div>
                  </div>
                </div>
                <div className="px-6 flex flex-row">
                  <div className="w-0.5 mr-2 bg-gradient-to-t from-gray-500 via-gray-200 to-gray-500"></div>
                  <div className="bg-white px-2 rounded-lg text-sm">01:29</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trailers

Trailers.propTypes = {
  random: propTypes.number
}
