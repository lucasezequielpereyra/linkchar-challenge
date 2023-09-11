import propTypes from 'prop-types'
import { selectCurrentGenres } from '@/redux/movies/moviesSlice'
import { useSelector } from 'react-redux'
import Balancer from 'react-wrap-balancer'

const MovieModal = ({ active, handleModal, modalRef, movie, trailer }) => {
  if (!active) return null

  const genres = useSelector(selectCurrentGenres)

  const getGenres = movie?.genre_ids.map(genre => {
    const genreName = genres.find(item => item.id === genre)
    return genreName?.name
  })

  return (
    <div>
      <div
        className="fixed inset-0 top-2 left-0 w-screen h-full bg-transparent backdrop-blur-3xl flex justify-center items-center z-50 box-border overflow-y-auto"
        ref={modalRef}
      >
        <div className="w-[90%] min-h-full flex flex-col">
          <div className=" bg-gray-950 flex justify-between items-center p-2 border-b border-primaryLogo">
            <h3 className="text-xl text-white font-bold">
              {trailer ? 'Trailer: ' : 'Pelicula: '} - {movie?.title}
            </h3>
            <button className="text-white text-xl" onClick={handleModal}>
              x
            </button>
          </div>
          <div className="h-full bg-gray-950 py-6">
            <div className="flex flex-col items-center justify-center w-full">
              <video
                className="rounded-xl w-[50%]"
                controls
                src=""
                type="video/mp4"
                poster={movie?.backdrop_path}
              >
                Su navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="mt-2 px-6 h-full text-white">
              <h3 className="text-xl font-bold px-2 py-1">
                Titulo Original: {movie?.original_title}
              </h3>
              <div className="flex flex-col pb-4 md:flex-row gap-4 md:pb-4 lg:p-0">
                <span className="text-sm font-bold px-2">
                  Fecha de estreno: {movie?.release_date}
                </span>
                <span className="text-sm font-bold px-2">Calificacion: {movie?.vote_average}</span>
                <span className="text-sm font-bold px-2 ">
                  Idiomar original: <span className="uppercase">{movie?.original_language}</span>
                </span>
                <span className="text-sm font-bold px-2">
                  Generos: <span className="capitalize">{getGenres?.join(', ')}</span>
                </span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl">
                <Balancer className="text-white text-sm font-bold px-2">{movie?.overview}</Balancer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal

MovieModal.propTypes = {
  active: propTypes.bool.isRequired,
  handleModal: propTypes.func.isRequired,
  modalRef: propTypes.object,
  movie: propTypes.object,
  trailer: propTypes.bool
}
