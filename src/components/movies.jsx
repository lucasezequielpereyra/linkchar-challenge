import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  selectCurrentMovies,
  selectCurrentPopularMovies,
  selectCurrentGenres
} from '@/redux/movies/moviesSlice'
import MovieBanner from './movieBanner'
import ContinueWatching from './continueWatching'
import PopularMovies from './popularMovies'

const Movies = ({ random }) => {
  const dataMovies = useSelector(selectCurrentMovies)
  const dataPopularMovies = useSelector(selectCurrentPopularMovies)
  const dataGenres = useSelector(selectCurrentGenres)

  const randomMovie = dataMovies[random]

  const continueWatching = [dataMovies[10], dataMovies[3]]
  const popularMovies = dataPopularMovies.slice(0, 3)
  const popularWithGenres = popularMovies.map(movie => {
    const genres = movie?.genre_ids.map(genreId => {
      const genre = dataGenres.find(genre => genre?.id === genreId)
      return genre?.name
    })
    return { ...movie, genres }
  })

  return (
    <div className="flex flex-col w-full px-10 lg:px-16 py-12">
      <div className="w-full">{randomMovie && <MovieBanner movie={randomMovie} />}</div>
      <div className="w-full">
        {continueWatching !== undefined && <ContinueWatching dataMovies={continueWatching} />}
      </div>
      <div className="w-full">
        {popularMovies && <PopularMovies dataMovies={popularWithGenres} />}
      </div>
    </div>
  )
}

export default Movies

Movies.propTypes = {
  random: propTypes.number.isRequired
}
