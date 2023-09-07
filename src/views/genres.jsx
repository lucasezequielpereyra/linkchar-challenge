'use client'
import { useGetGenresQuery } from '@/redux/movies/moviesApiSlice'
import { getGenres, selectCurrentGenres } from '@/redux/movies/moviesSlice'
import { newFavGenre, selectCurrentFavGenres } from '@/redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import GenresComponent from '@/components/genres'

const Genres = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [addFavoriteGenre, setAddFavoriteGenre] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [favGenres, setFavGenres] = useState([])
  const [availableGenres, setAvailableGenres] = useState([])
  const [savedGenres, setSavedGenres] = useState([])
  const selectRef = useRef(null)

  // get genres from api redux
  const { data, isSuccess, status } = useGetGenresQuery()

  // get fav genres from redux
  const favGenresRedux = useSelector(selectCurrentFavGenres)
  // get genres from redux
  const genresRedux = useSelector(selectCurrentGenres)

  // set fav genres to local state
  useEffect(() => {
    if (favGenresRedux.length > 0) {
      setFavGenres(favGenresRedux)
    }
  }, [favGenresRedux])

  // set genres to local state
  useEffect(() => {
    if (genresRedux.length > 0) {
      setAvailableGenres(genresRedux)
    }
  }, [genresRedux])

  // filter available genres
  useEffect(() => {
    if (favGenres.length > 0) {
      const filterGenres = availableGenres.filter(
        genre => !favGenres.find(favGenre => favGenre.id === genre.id)
      )
      setAvailableGenres(filterGenres)
    }
  }, [favGenres])

  // set genres to redux
  useEffect(() => {
    if (status === 'pending') {
      setLoading(true)
    }
    if (isSuccess) {
      dispatch(getGenres(data))
      setLoading(false)
    }
  }, [isSuccess])

  const handleChangeFavGenre = e => {
    setErrorMsg('')
    const normalize = e.map(genre => ({
      id: genre.value,
      name: genre.label
    }))
    setAddFavoriteGenre(normalize)
  }

  // method to add new favorite genre
  const handleNewFavGenre = previousGens => {
    if (addFavoriteGenre.length > 0) {
      const newGenres = previousGens.concat(addFavoriteGenre)
      const uniqueGenres = [...new Set(newGenres)]
      setFavGenres(uniqueGenres)
      dispatch(newFavGenre(uniqueGenres))
      setAddFavoriteGenre([{}])
      selectRef.current.clearValue()
    } else {
      setErrorMsg('Debes seleccionar al menos un genero')
    }
  }

  return (
    <>
      {loading ? (
        <div className="loading text-white">Loading...</div>
      ) : (
        <GenresComponent
          handleNewFavGenre={handleNewFavGenre}
          handleChangeFavGenre={handleChangeFavGenre}
          errorMsg={errorMsg}
          favGenres={favGenres}
          availableGenres={availableGenres}
          selectRef={selectRef}
        />
      )}
    </>
  )
}

export default Genres
