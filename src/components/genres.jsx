'use client'
import { useId } from 'react'
import { PlusCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Select from 'react-select'
import propTypes from 'prop-types'

const Genres = ({
  handleNewFavGenre,
  handleChangeFavGenre,
  errorMsg,
  favGenres,
  availableGenres,
  selectRef,
  handleDeleteFavGenre
}) => {
  const parseAvailableGenres = availableGenres?.map(genre => ({
    value: genre.id,
    label: genre.name
  }))

  return (
    <div className="flex flex-col h-full px-8 lg:px-10 mt-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-normal text-white">Generos</h2>
      </div>
      <div className="flex flex-col mt-2 space-y-2">
        {favGenres?.map(genre => (
          <div
            key={genre.id}
            className="flex flex-row items-center justify-between px-2 py-1 space-x-2 bg-gray-100 rounded-md"
          >
            <span className="text-sm font-semibold">{genre.name}</span>
            <button
              className="flex flex-row items-center justify-center px-2 py-1 space-x-1 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              onClick={() => handleDeleteFavGenre(genre.id)}
            >
              <XMarkIcon className="w-5 h-5" />
              <span>Eliminar</span>
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-2 space-y-2">
        <label htmlFor="genres" className="text-sm font-semibold text-white">
          Generos disponibles
        </label>
        <Select
          id="genres"
          name="genres"
          aria-label="Genres"
          inputId={useId()}
          instanceId={useId()}
          ref={selectRef}
          options={parseAvailableGenres}
          onChange={handleChangeFavGenre}
          isMulti
          isSearchable
          isClearable
          placeholder="Selecciona generos"
          noOptionsMessage={() => 'No genres found'}
          className="w-full"
          styles={{
            control: styles => ({
              ...styles,
              backgroundColor: 'transparent',
              border: '1px solid #ffffff',
              boxShadow: 'none',
              '&:hover': {
                border: '1px solid #B7066F'
              }
            }),
            option: styles => ({
              ...styles,
              backgroundColor: '#fff',
              color: '#000',
              '&:hover': {
                backgroundColor: '#a9a9a9',
                color: '#000'
              }
            }),
            dropdownIndicator: styles => ({
              ...styles,
              color: '#ffffff',
              paddingTop: 0,
              paddingBottom: 0
            })
          }}
        />
        <button
          className="flex flex-row items-center justify-center px-2 py-1 space-x-1 text-sm font-semibold text-white bg-primaryLogo rounded-md hover:bg-secondaryLogo w-auto "
          onClick={() => handleNewFavGenre(favGenres)}
        >
          <PlusCircleIcon className="w-5 h-5" />
          <span>Agregar</span>
        </button>
        {errorMsg && (
          <div className="flex flex-row items-center justify-start px-2 py-1 space-x-1 text-sm font-semibold text-red-500 bg-red-100 rounded-md">
            <ExclamationTriangleIcon className="w-5 h-5" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Genres

Genres.propTypes = {
  handleNewFavGenre: propTypes.func,
  handleChangeFavGenre: propTypes.func,
  errorMsg: propTypes.string,
  favGenres: propTypes.array,
  availableGenres: propTypes.array,
  selectRef: propTypes.object,
  handleDeleteFavGenre: propTypes.func
}
