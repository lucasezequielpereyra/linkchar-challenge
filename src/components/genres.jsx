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
    <div className="h-full w-full mt-4 pl-8 xl:pl-0 xl:mt-2">
      <div className="flex flex-col gap-4 md:flex-row xl:flex-col items-center m-auto">
        <h3 className="text-white p-6 text-xl">Generos Favoritos</h3>
        <div className="flex flex-col md:flex-row md:w-full md:justify-evenly xl:flex-col gap-10 px-6">
          <div className="flex flex-row gap-3 flex-wrap px-6 xl:mt-3 md:h-2 xl:h-full">
            {favGenres?.map((genre, index) => (
              <div
                key={index}
                className="flex items-center text-white px-2 py-1 rounded-md bg-primaryLogo gap-1"
              >
                <span>{genre.name}</span>
                <button onClick={() => handleDeleteFavGenre(genre.id)}>
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="2xl:flex 2xl:flex-col 2xl:items-center">
            <span className="text-white px-0 text-md flex flex-row gap-2 mb-3">
              <PlusCircleIcon className="h-6 w-6" />
              Agregar generos favoritos
            </span>
            <div className="flex-col md:flex-row gap-6 lg:flex-col 2xl:flex-row lg:w-auto lg:gap-2 2xl:gap-6">
              <Select
                placeholder="Selecciona los generos"
                className="w-72 lg:w-64 2xl:w-72"
                ref={selectRef}
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
                    backgroundColor: '#564d4d',
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#564d4d',
                      color: '#fff'
                    }
                  }),
                  dropdownIndicator: styles => ({
                    ...styles,
                    color: '#ffffff',
                    paddingTop: 0,
                    paddingBottom: 0
                  })
                }}
                options={parseAvailableGenres}
                isMulti
                isClearable={false}
                onChange={handleChangeFavGenre}
                instanceId={useId()}
              />
              <button className="text-white text-left" onClick={() => handleNewFavGenre(favGenres)}>
                Agregar
              </button>
              {errorMsg && (
                <span className="text-red-500 font-bold text-sm flex gap-1 items-center px-2 py-1 rounded-lg bg-transparentData w-fit">
                  <span className="flex-shrink">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                  </span>
                  {errorMsg}
                </span>
              )}
            </div>
          </div>
        </div>
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
