export const handleModal = (modal, setModal, setMovie, movie) => {
  setMovie(null)
  setModal(!modal)

  if (movie) {
    setMovie(movie)
  }
}
