import propTypes from 'prop-types'
import { PlayIcon } from '@heroicons/react/24/outline'
import { handleModal } from '@/helpers/handleModal'
import { useState, useRef } from 'react'
import { usePressEscKey } from '@/hooks/usePressEscKey'
import MovieModal from './movieModal'

const FavMovies = ({ handleDeleteMovie, dataMovies }) => {
  const [modal, setModal] = useState(false)
  const [modalMovie, setModalMovie] = useState(null)
  const modalRef = useRef(null)

  // Close modal when press ESC key
  usePressEscKey(() => setModal(false))

  return (
    <>
      <div className="h-full w-full mt-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-white text-2xl font-bold px-2 w-fit">Tu lista de peliculas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {dataMovies.map((movie, index) => {
            return (
              <div
                className="relative h-full w-full cursor-pointer"
                key={index}
                onClick={() => handleModal(modal, setModal, setModalMovie, movie)}
              >
                <img
                  src={movie?.backdrop_path}
                  alt="Picture of the author"
                  width={1000}
                  height={250}
                  className="rounded-xl -z-0 h-[250px] w-full object-cover"
                />
                <div className="flex flex-row items-center justify-between absolute z-10 rounded-xl  bg-videoBackground backdrop-blur-sm -mt-[70px] max-w-full  w-full  h-[70px] bg-gray-200 ">
                  <div className="flex flex-row pl-6 gap-4 items-center">
                    <div>
                      <PlayIcon className="h-6 w-6 text-white cursor-pointer" />
                    </div>
                    <div className="h-full w-full flex flex-col justify-center">
                      <div className="text-xs text-white">{movie?.title.slice(0, 20)}</div>
                    </div>
                  </div>
                  <div className="px-6 flex flex-row">
                    <div className="w-0.5 mr-2 bg-gradient-to-t from-gray-500 via-gray-200 to-gray-500"></div>
                    <button
                      onClick={() => handleDeleteMovie(movie)}
                      className="text-sm text-white flex gap-1 items-center"
                    >
                      Quitar de mi lista
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
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

export default FavMovies

FavMovies.propTypes = {
  handleDeleteMovie: propTypes.func
}
