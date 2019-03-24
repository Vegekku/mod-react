import React from 'react'
import Showcase from './Showcase';
import Modal from './Modal';
import UserContext from './UserContext';

import './css/Search.css'

// TODO Currently getting page 1. Add pagination. Usefull fields from API: page, total_results, total_pages
// TODO Keep searchedValue if show movie details
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=a7344235cf71916f964295b0d4d6133a&language=es-Es&query='
const API_DISCOVER = 'https://api.themoviedb.org/3/discover/movie?api_key=a7344235cf71916f964295b0d4d6133a&language=es-ES&sort_by=popularity.desc'
class Collection extends React.Component {
  state = {
    searchedValue: '',
    search: [],
    errorSearching: false,
    discover: [],
    errorDiscovering: false,
  }
  constructor() {
    super()
    this.search = this.search.bind(this)
  }
  async componentDidMount() {
    this.setState({discovering: true, errorDiscovering: false})
    try {
        const response = await fetch(API_DISCOVER)
        const {results} = await response.json()
        this.setState({discover: results})
    } catch (errorDiscovering){
      this.setState({errorDiscovering})
    } finally {
      this.setState({ discovering: false})
    }
  }
  // TODO Pass discovering and errorDiscovering texts as Showcase children, and controlling in showcase null movies
  render() {
    const {
      search, searchedValue, errorSearching, searching,
      discover, errorDiscovering, discovering
    } = this.state
    return (
      <UserContext.Consumer>
        {
          ({
            showingModal, hideModal, movieInModal,
            addToCollection, scoreMovie, removeCollection,
            collections, scores
          }) =>
            <div className='collections'>
              {
                showingModal === 'add' &&
                <Modal type={showingModal} onSubmit={addToCollection} onClose={hideModal} selectItems={collections}>Add to</Modal>
              }
              {
                showingModal === 'score' &&
                  <Modal type={showingModal} onSubmit={scoreMovie}  onClose={hideModal} currentScore={scores[movieInModal] && scores[movieInModal].value} inputText='Values from 0 to 100'>Score</Modal>
              }
              <form className='searcher' onSubmit={event => event.preventDefault()}>
                <input className='searcher__input' type='search' placeholder='Search...' onKeyUp={this.search}></input>
              </form>
              {
                searching
                ? <p>Searching by {searchedValue}...</p>
                : (errorSearching === false
                  ? (searchedValue !== '' &&
                      <Showcase key={`search`} addable={true} movies={search}>{`Searching by ${searchedValue}`}</Showcase>
                  )
                  : <p>Error searching</p>
                )
              }
              {
                discovering
                ? <p>Loading discovers...</p>
                : (errorDiscovering === false
                  ? <Showcase key={`discover`} addable={true} movies={discover}>Discover</Showcase>
                  : null
                )
              }
              {
                collections.map(collection =>
                  <Showcase key={collection.id} collectionId={collection.id} movies={collection.movies} removeCollection={removeCollection}>
                    {collection.title}
                  </Showcase>
                )
              }
            </div>
        }
      </UserContext.Consumer>
    )
  }
  async search(event) {
    const searchedValue = event.target.value
    if (event.keyCode === 13 && (this.state.searchedValue !== searchedValue || this.state.errorSearching !== false)) {
      this.setState({searchedValue, searching: true, errorSearching: false})
      try {
          const response = await fetch(`${API_SEARCH}${escape(searchedValue)}`)
          const {results} = await response.json()
          this.setState({search: results})
      } catch (errorSearching){
        this.setState({errorSearching})
      } finally {
        this.setState({ searching: false})
      }
    }
  }
}

export default Collection
  