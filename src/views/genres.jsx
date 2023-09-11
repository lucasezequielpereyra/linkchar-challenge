'use client'
import { useGetGenresQuery } from '@/redux/movies/moviesApiSlice'
import { selectCurrentGenres, getGenres } from '@/redux/movies/moviesSlice'
import { newFavGenre, removeFavGenre, selectCurrentFavGenres } from '@/redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import GenresComponent from '@/components/genres'

const Genres = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [favGenres, setFavGenres] = useState([])
  const [availableGenres, setAvailableGenres] = useState([])
  const [session, setSession] = useState(null)

  // get genres to save to redux
  const { data: genresData, status: genresStatus } = useGetGenresQuery()

  useEffect(() => {
    if (genresStatus === 'fulfilled') {
      dispatch(getGenres(genresData))
      setLoading(false)
    }
  }, [genresStatus])

  // get redux genres
  const dataGenres = useSelector(selectCurrentGenres)
  useEffect(() => {
    const availablesGenresFiltered = dataGenres?.filter(
      genre => !favGenres?.some(favGenre => favGenre.id === genre.id)
    )
    setAvailableGenres(availablesGenresFiltered)
  }, [dataGenres, favGenres])

  // get fav genres from redux
  const favGenresRedux = useSelector(selectCurrentFavGenres)
  useEffect(() => {
    setFavGenres(favGenresRedux)
  }, [favGenresRedux])

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

  // method to add new favorite genre
  const handleNewFavGenre = genre => {
    if (favGenres.length < 7) {
      dispatch(newFavGenre(genre))
    } else {
      setErrorMsg('Solo puedes agregar 7 géneros favoritos')
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
        <div className="flex justify-center items-center h-screen">
          <div className="loading text-white">Loading...</div>
        </div>
      ) : (
        <GenresComponent
          handleNewFavGenre={handleNewFavGenre}
          errorMsg={errorMsg}
          favGenres={favGenres}
          availableGenres={availableGenres}
          handleDeleteFavGenre={handleDeleteFavGenre}
        />
      )}
    </>
  )
}

export default Genres
