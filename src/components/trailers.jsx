'use client'
import Image from 'next/image'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { selectCurrentNewsMovies } from '@/redux/movies/moviesSlice'
import propTypes from 'prop-types'

const Trailers = ({ random }) => {
  const { n1, n2 } = random()
  const dataMovies = useSelector(selectCurrentNewsMovies)
  const randomMovies = [dataMovies[n1], dataMovies[n2]]

  const sliceTitle = title => {
    if (title.length > 20) {
      return title.slice(0, 20) + '...'
    }
    return title
  }

  return (
    <div className="w-full h-full p-6 flex flex-col border-b border-gray-800 px-10 xl:px-4 2xl:px-10">
      <h3 className="text-white text-xl">Nuevos Trailers</h3>
      <div className="flex flex-col md:flex-row xl:flex-col gap-4 mt-4 xl:mt-6 items-center m-auto">
        {randomMovies.map((movie, index) => {
          return (
            <div className="relative h-full w-full" key={index}>
              <Image
                src={movie?.backdrop_path}
                alt="Picture of the author"
                width={1000}
                height={170}
                className="rounded-xl -z-0 h-[170px] lg:w-[450px] xl:w-full 2xl:w-[380px] object-cover"
              />
              <div className="flex flex-row items-center justify-around absolute z-10 rounded-xl  bg-videoBackground backdrop-blur-sm -mt-[70px] max-w-full  w-full md:w-full lg:w-[450px] xl:w-full h-[70px] bg-gray-200 ">
                <div className="flex items-center ml-3">
                  <PlayCircleIcon className="h-10 w-10  text-white cursor-pointer" />
                </div>
                <div className="flex flex-row pl-6 gap-4 w-full">
                  <div className="h-full w-full flex flex-col justify-center">
                    <div className="text-xs text-white"> {sliceTitle(movie?.title)}</div>
                    <div className="text-xs text-white">{movie?.release_date}</div>
                    <div className="text-xs text-white">{movie?.original_language}</div>
                  </div>
                </div>
                <div className="pr-4 flex flex-row">
                  <div className="w-0.5 mr-2 bg-gradient-to-t from-gray-500 20% via-gray-300 50% to-gray-500 80%"></div>
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
  random: propTypes.func
}
