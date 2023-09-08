'use client'
import { useGetGenresQuery } from '@/redux/movies/moviesApiSlice'
import { getGenres, selectCurrentGenres } from '@/redux/movies/moviesSlice'
import { newFavGenre, removeFavGenre, selectCurrentFavGenres } from '@/redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import GenresComponent from '@/components/genres'

const Genres = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [addFavoriteGenre, setAddFavoriteGenre] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [favGenres, setFavGenres] = useState([])
  const [availableGenres, setAvailableGenres] = useState([])
  const [session, setSession] = useState(null)
  const selectRef = useRef(null)

  // supabase
  const supabase = createClientComponentClient()

  // get user session
  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession()
      setSession(session?.data?.session?.user)
    }

    getSession()
  }, [supabase.auth])

  // get genres from api redux
  const { data, status } = useGetGenresQuery()

  // set genres to redux
  useEffect(() => {
    if (status === 'fulfilled') {
      dispatch(getGenres(data))
      setLoading(false)
    }
  }, [status])

  // get fav genres from redux
  const favGenresRedux = useSelector(selectCurrentFavGenres)
  // get genres from redux
  const genresRedux = useSelector(selectCurrentGenres)

  // set fav genres to local state
  useEffect(() => {
    if (favGenresRedux?.length > 0) {
      setFavGenres(favGenresRedux)
    }
  }, [favGenresRedux])

  // save fav genres to supabase
  useEffect(() => {
    if (session) {
      const saveFavGenres = async () => {
        await supabase.from('users').update({ favGenres: favGenres }).eq('id', session.id)
      }
      saveFavGenres()
    }
  }, [favGenres])

  // set genres to local state
  useEffect(() => {
    if (genresRedux?.length > 0) {
      setAvailableGenres(genresRedux)
    }
  }, [genresRedux])

  // filter available genres
  useEffect(() => {
    const filterGenres = availableGenres.filter(
      genre => !favGenres.find(favGenre => favGenre.id === genre.id)
    )
    setAvailableGenres(filterGenres)
  }, [favGenres])

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

  // mehtod to delete favorite genre
  const handleDeleteFavGenre = id => {
    const newGenres = favGenres.filter(genre => genre.id !== id)
    setFavGenres(newGenres)
    dispatch(removeFavGenre(id))
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
          handleDeleteFavGenre={handleDeleteFavGenre}
        />
      )}
    </>
  )
}

export default Genres
