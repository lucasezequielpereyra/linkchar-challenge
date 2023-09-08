import propTypes from 'prop-types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchMovie = ({ handleSearch, search, searchRef, handleSearchMovie }) => {
  return (
    <div className="flex items-center justify-center mt-10">
      <input
        className="
          border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none
        "
        type="text"
        placeholder="Buscar pelicula"
        value={search}
        onChange={handleSearch}
        ref={searchRef}
      />
      <button className="ml-4" onClick={handleSearchMovie}>
        <MagnifyingGlassIcon className="h-7 w-7 text-gray-400" />
      </button>
    </div>
  )
}

export default SearchMovie

SearchMovie.propTypes = {
  handleSearch: propTypes.func.isRequired,
  search: propTypes.string.isRequired,
  searchRef: propTypes.object,
  handleSearchMovie: propTypes.func.isRequired
}
