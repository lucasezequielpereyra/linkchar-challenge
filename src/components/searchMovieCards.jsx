import propTypes from 'prop-types'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

const searchMovieCards = ({ movies }) => {
  return (
    <div>
      {/* Creame una galeria de imagenes con diseño material */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 px-44 w-full">
        {movies.map(movie => (
          <div key={movie.id}>
            <span>
              <div className="mt-8">
                <Image
                  src={movie.poster_path}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="hover:opacity-75 transition ease-in-out duration-150 rounded-3xl"
                />
                <div className="mt-2">
                  <div className="text-lg mt-2 text-white hover:text-gray-300 w-ull">
                    <Balancer>{movie.title}</Balancer>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
                      <g data-name="Layer 2">
                        <path
                          d="M12 17.27l5.74 3.28-1.1-6.42L22 9.73l-6.42-.93L12
                          3.38 9.42 8.8 3 9.73l4.36 4.42-1.1 6.42z"
                        />
                      </g>
                    </svg>
                    <span className="ml-1">{movie.vote_average * 10}%</span>
                    <span className="mx-2">|</span>
                    <span>{movie.release_date ? movie.release_date.substring(0, 4) : '-'}</span>
                  </div>
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default searchMovieCards

searchMovieCards.propTypes = {
  movies: propTypes.array.isRequired
}
