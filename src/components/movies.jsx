import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCurrentMovies } from '@/redux/movies/moviesSlice'
import MovieBanner from './movieBanner'

const Movies = ({ random }) => {
  const dataMovies = useSelector(selectCurrentMovies)
  const randomMovie = dataMovies[random]

  return (
    <div className="w-full px-16 py-12">
      <MovieBanner movie={randomMovie} />
    </div>
  )
}

export default Movies

Movies.propTypes = {
  random: propTypes.number.isRequired
}
