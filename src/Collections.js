import React from 'react'
import Showcase from './Showcase';

const COLLECTIONS = Array.from({length: 5}).map((_, index) => ({
  id: index,
  title: `Ejemplo ${index}`,
}))
// TODO Currently getting page 1. Add pagination. Usefull fields from API: page, total_results, total_pages
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=a7344235cf71916f964295b0d4d6133a&language=es-Es&query='
const API_DISCOVER = 'https://api.themoviedb.org/3/discover/movie?api_key=a7344235cf71916f964295b0d4d6133a&language=es-ES&sort_by=popularity.desc'
class Collection extends React.Component {
  state = {
    searchedValue: '',
    search: [],
    errorSearching: false,
    discover: [],
    errorDiscovering: false
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
      <div className='collections'>
        <form onSubmit={event => event.preventDefault()}>
          <input type='search' placeholder='Search...' onKeyUp={this.search}></input>
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
          COLLECTIONS.map(collection =>
            <Showcase key={collection.id}>
              {collection.title}
            </Showcase>
          )
        }
      </div>
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
  