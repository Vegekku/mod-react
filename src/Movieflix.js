import React from 'react'

import Routes from './Routes'
import UserContext from './UserContext';

// TODO Catch from localStorage
const COLLECTIONS = Array.from({length: 5}).map((_, index) => ({
  id: index,
  title: `Ejemplo ${index}`,
  movies: Array.from({length: 10}).map((_, m_index) => ( {
    id: m_index,
    backdrop_path: '/6OTRuxpwUUGbmCX3MKP25dOmo59.jpg',
    title: 'Dragon Ball Super: Broly'
  }))
}))

export default class extends React.Component {
  state = {
    // TODO scores can be not neccessary as state
    scores: JSON.parse(localStorage.getItem('scores')) || {},
    collections: JSON.parse(localStorage.getItem('collections')) || COLLECTIONS,
    showingModal: false,
    movieInModal: false
  }
  render() {
    return (
      <UserContext.Provider value={{
        // scores: this.state.scores,
        collections: this.state.collections,
        showingModal: this.state.showingModal,
        showModal: this.showModal,
        hideModal: this.hideModal,
        addToCollection: this.addToCollection,
        scoreMovie: this.scoreMovie,
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
  addToCollection = ({select, input}) => {
    const {collections, movieInModal} = this.state
    // TODO get movie data
    if (input !== ''){
      const collection = {
        id: collections.length,
        title: String(input),
        movies: [{
          id: movieInModal,
          backdrop_path: '/6OTRuxpwUUGbmCX3MKP25dOmo59.jpg',
          title: 'Dragon Ball Super: Broly'
        }],
        createdAt: new Date()
      }
      // https://www.robinwieruch.de/react-state-array-add-update-remove/
      const newList = [collection, ...collections]
      this.setState({collections: newList})
      // collections = []
      // this.setState()
      // localStorage.setItem(
      //   'collections',
      //   JSON.stringify({...collections, collection})
      // )
    } else if(select !== undefined) {
      console.log(select)
    }

    this.hideModal()
  }
  scoreMovie = ({input}) => {
    // const scores = JSON.parse(localStorage.getItem('scores')) || {}
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
}
  