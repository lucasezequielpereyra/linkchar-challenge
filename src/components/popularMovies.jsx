import propTypes from 'prop-types'
import Image from 'next/image'
import { PlayIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline'

const PopularMovies = ({ dataMovies }) => {
  return (
    <div className="h-full w-full mt-16">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold px-2 w-fit">Peliculas Popular 2021</h2>
        <button className="text-gray-600 flex items-center">
          All Movies <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-6">
        {dataMovies.map((movie, index) => {
          return (
            <div className="relative h-full w-full" key={index}>
              <Image
                src={movie?.backdrop_path}
                alt="Picture of the author"
                width={1000}
                height={170}
                className="rounded-xl -z-0 h-[170px] w-full object-cover"
              />
              <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-videoBackground backdrop-blur-sm -mt-[70px] max-w-full  w-full  h-[70px] bg-gray-200 ">
                <div className="flex flex-row pl-6 gap-4 items-center">
                  <div>
                    <PlayIcon className="h-6 w-6 text-white cursor-pointer" />
                  </div>
                  <div className="h-full w-full flex flex-col justify-center">
                    <div className="text-xs text-white">{movie?.title.slice(0, 20)}</div>
                    <div className="text-gray-200 flex gap-x-2 max-w-full flex-wrap">
                      {movie?.genres.map((genre, index) => {
                        return (
                          <span key={index} className="text-xs">
                            {genre}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="px-6 flex flex-row">
                  <div className="w-0.5 mr-2 bg-gradient-to-t from-gray-500 via-gray-200 to-gray-500"></div>
                  <span className="text-sm text-white flex gap-1 items-center">
                    <StarIcon className="h-5 w-5 t" />
                    {movie.vote_average}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PopularMovies

PopularMovies.propTypes = {
  dataMovies: propTypes.array
}
