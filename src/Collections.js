import React from 'react'
import Showcase from './Showcase';

const SEARCH = {
  id: 'search',
  title: 'Search'
}
const DISCOVER = {
  id: 'discover',
  title: 'Discover'
}
const COLLECTIONS = Array.from({length: 5}).map((_, index) => ({
  id: index,
  title: `Ejemplo ${index}`,
}))

export default props =>
  <div className='collections'>
    <form onSubmit={event => event.preventDefault()}>
      <input type='search'></input>
      <button>Search</button>
    </form>
    <Showcase key={SEARCH.id}>{SEARCH.title}</Showcase>
    <Showcase key={DISCOVER.id}>{DISCOVER.title}</Showcase>
    {
      COLLECTIONS.map(collection =>
        <Showcase key={collection.id}>
          {collection.title}
        </Showcase>
      )
    }
  </div>