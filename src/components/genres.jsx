'use client'
import { useId } from 'react'
import { PlusCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import propTypes from 'prop-types'

const Genres = ({
  handleNewFavGenre,
  errorMsg,
  favGenres,
  availableGenres,
  handleDeleteFavGenre
}) => {
  return (
    <div className="h-full w-full mt-4 pl-8 xl:pl-0 xl:mt-2">
      <div className="flex flex-col gap-4  xl:flex-col px-12">
        <h3 className="text-white text-xl">Generos Favoritos</h3>
        <div className="flex flex-col xl:flex-col gap-10">
          <div className="flex flex-row gap-3 flex-wrap">
            {favGenres?.map((genre, index) => (
              <div
                key={index}
                className="flex items-center text-whiterounded-md bg-primaryLogo gap-1 rounded-lg px-2 py-1 text-white text-sm w-fit h-fit"
              >
                <span>{genre.name}</span>
                <button onClick={() => handleDeleteFavGenre(genre.id)}>
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-white text-md flex flex-row gap-2 mb-3">
              <PlusCircleIcon className="h-6 w-6" />
              Agregar generos favoritos
            </span>
            <div className="flex gap-3 w-fit h-fit flex-wrap">
              {availableGenres.map((genre, index) => (
                <span
                  className="bg-gray-800 text-white px-2 py-1 rounded-lg w-fit h-fit"
                  key={index}
                >
                  <button onClick={() => handleNewFavGenre(genre)}>{genre.name}</button>
                </span>
              ))}
            </div>
            {errorMsg && (
              <div className="flex flex-row gap-3 items-center mt-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-yellow-500">{errorMsg}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Genres

Genres.propTypes = {
  handleNewFavGenre: propTypes.func,
  errorMsg: propTypes.string,
  favGenres: propTypes.array,
  availableGenres: propTypes.array,
  selectRef: propTypes.object,
  handleDeleteFavGenre: propTypes.func
}
