import React from 'react'

import Routes from './Routes'
import UserContext from './UserContext';

export default class extends React.Component {
  state = {
    scores: JSON.parse(localStorage.getItem('scores')) || {},
    collections: JSON.parse(localStorage.getItem('collections')) || [],
    showingModal: false,
    movieInModal: false
  }
  render() {
    return (
      <UserContext.Provider value={{
        scores: this.state.scores,
        collections: this.state.collections,
        showingModal: this.state.showingModal,
        movieInModal: this.state.movieInModal,
        showModal: this.showModal,
        hideModal: this.hideModal,
        addToCollection: this.addToCollection,
        removeFromCollection: this.removeFromCollection,
        scoreMovie: this.scoreMovie,
        removeCollection: this.removeCollection,
      }}>
        <Routes />
      </UserContext.Provider>
    )
  }
  showModal = (modal,movieId) => {
    if (this.state.showingModal === false) {
      this.setState({showingModal: modal, movieInModal: movieId})
    }
  }
  hideModal = () => {
    this.setState({showingModal: false, movieInModal: false})
  }
  _getMovieData = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a7344235cf71916f964295b0d4d6133a&language=es-ES`)
    const movie = await response.json()
    return {id: movie.id, backdrop_path: movie.backdrop_path, title: movie.title}
  }
  addToCollection = async ({select, input}) => {
    if (input !== '' || select !== undefined) {
      const collections = [...this.state.collections]
      const {movieInModal} = this.state
      const movie = await this._getMovieData(movieInModal)

      if (input !== ''){
        const collection = {
          id: collections.length,
          title: String(input),
          movies: [movie],
          createdAt: new Date()
        }

        // https://www.robinwieruch.de/react-state-array-add-update-remove/
        const newList = [collection, ...collections]
        this.setState({collections: newList})

        localStorage.setItem(
          'collections',
          JSON.stringify(newList)
        )
      } else if(select !== undefined) {
        const collection = collections.find(collection => collection.id === Number(select))

        if (collection.movies.find(movie => movie.id === Number(movieInModal)) === undefined) {
          collection.movies = [movie, ...collection.movies]
          
          localStorage.setItem(
            'collections',
            JSON.stringify(collections)
          )
        }
      }
    }

    this.hideModal()
  }
  removeFromCollection = (collectionId, movieId) => {
    // https://stackoverflow.com/questions/36326612/delete-item-from-state-array-in-react
    const collections = [...this.state.collections]
    const collection = collections.find(collection => collection.id === collectionId)
    const movieIndex = collection.movies.findIndex(movie => movie.id === movieId)

    collection.movies.splice(movieIndex,1)
    this.setState({collections})
    
    localStorage.setItem(
      'collections',
      JSON.stringify(collections)
    )
  }
  scoreMovie = ({input}) => {
    const parseInput = parseInt(input)
    const {scores, movieInModal} = this.state
    if (movieInModal !== false) {
      if (Number.isInteger(parseInput) && parseInput >= 0 && parseInput <= 100) {
        scores[movieInModal] = {
          value: parseInput
        }
        localStorage.setItem(
          'scores',
          JSON.stringify(scores)
        )
        this.hideModal()
      }
    }
  }
  removeCollection = (collectionId) => {
    const collections = [...this.state.collections]
    const collectionIndex = collections.findIndex(collection => collection.id === collectionId)

    collections.splice(collectionIndex,1)
    this.setState({collections})

    localStorage.setItem(
      'collections',
      JSON.stringify(collections)
    )
  }
}
  