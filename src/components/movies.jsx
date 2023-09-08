import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCurrentMovies } from '@/redux/movies/moviesSlice'
import MovieBanner from './movieBanner'
import ContinueWatching from './continueWatching'

const Movies = ({ random }) => {
  const dataMovies = useSelector(selectCurrentMovies)
  const randomMovie = dataMovies[random]

  const continueWatching = [dataMovies[10], dataMovies[3]]

  return (
    <div className="flex flex-col w-full px-10 lg:px-16 py-12">
      <div className="w-full">{randomMovie && <MovieBanner movie={randomMovie} />}</div>
      <div className="w-full">
        {continueWatching && <ContinueWatching dataMovies={continueWatching} />}
      </div>
    </div>
  )
}

export default Movies

Movies.propTypes = {
  random: propTypes.number.isRequired
}
