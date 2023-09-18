import propTypes from 'prop-types'
import Balancer from 'react-wrap-balancer'
import { selectCurrentFavMovies } from '@/redux/user/userSlice'
import { useSelector } from 'react-redux'
import { handleModal } from '@/helpers/handleModal'
import { useState, useRef } from 'react'
import { usePressEscKey } from '@/hooks/usePressEscKey'
import MovieModal from './movieModal'

const searchMovieCards = ({ movies, handleAddToWatchList, handleDeleteFavMovie }) => {
  const favMoviesRedux = useSelector(selectCurrentFavMovies)

  const [modal, setModal] = useState(false)
  const [modalMovie, setModalMovie] = useState(null)
  const modalRef = useRef(null)

  // Close modal when press ESC key
  usePressEscKey(() => setModal(false))

  const verifyIfMovieIsFav = movie => {
    const favMovie = favMoviesRedux?.find(favMovie => favMovie.id === movie.id)
    return favMovie ? true : false
  }

  const verifyDeleteFavMovie = movie => {
    if (verifyIfMovieIsFav(movie)) {
      return handleDeleteFavMovie(movie)
    }

    handleAddToWatchList(movie)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 px-44 w-full pb-10">
        {movies.map(movie => (
          <div key={movie.id}>
            <span>
              <div className="mt-8">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="hover:opacity-75 transition ease-in-out duration-150 rounded-3xl cursor-pointer"
                  onClick={() => handleModal(modal, setModal, setModalMovie, movie)}
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
                    <span className="ml-1">{movie.vote_average}</span>
                    <span className="mx-2">|</span>
                    <span>{movie.release_date ? movie.release_date.substring(0, 4) : '-'}</span>
                    <button
                      type="button"
                      className="ml-2"
                      onClick={() => verifyDeleteFavMovie(movie)}
                    >
                      {verifyIfMovieIsFav(movie) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>
      {modal && (
        <MovieModal
          active={modal}
          handleModal={() => setModal(!modal)}
          modalRef={modalRef}
          movie={modalMovie}
        />
      )}
    </>
  )
}

export default searchMovieCards

searchMovieCards.propTypes = {
  movies: propTypes.array.isRequired,
  handleAddToWatchList: propTypes.func.isRequired,
  handleDeleteFavMovie: propTypes.func.isRequired
}
