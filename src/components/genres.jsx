'use client'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Select from 'react-select'

const Genres = () => {
  const availableGenres = [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]

  const favoriteGenres = [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]

  const optionsFilter = availableGenres.map(genre => ({
    value: genre.id,
    label: genre.name
  }))

  return (
    <div className="h-full w-full mt-4 xl:mt-2">
      <div>
        <h3 className="text-white p-6 text-xl">Generos Favoritos</h3>
        <div className="flex flex-col md:flex-row xl:flex-col gap-10">
          <div className="flex flex-row gap-3 flex-wrap px-6 xl:mt-3 md:h-2 xl:h-full">
            {favoriteGenres.map(genre => (
              <span className="text-white px-2 rounded-md bg-primaryLogo">{genre.name}</span>
            ))}
          </div>
          <div className="px-6 items-center">
            <span className="text-white px-4 text-md flex flex-row gap-2">
              <PlusCircleIcon className="h-6 w-6" />
              Agregue sus generos favoritos
            </span>
            <div className="flex flex-row gap-6 items-center pl-4 mt-4">
              <Select
                placeholder="Selecciona los generos"
                className="w-72"
                styles={{
                  control: styles => ({
                    ...styles,
                    backgroundColor: 'transparent',
                    border: '1px solid #ffffff',
                    boxShadow: 'none',
                    '&:hover': {
                      border: 'none'
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
                name="roles"
                id="roles"
                options={optionsFilter}
                isMulti
                isClearable={false}
              />
              <button className="text-white">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Genres
