import React from 'react'
import {Link} from 'react-router-dom'

import './css/Movie.css'
import UserContext from './UserContext';

class Movie extends React.Component {
  render() {
    const {movie} = this.props
    const background = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.backdrop_path})`,
      
    }
    const addable = Boolean(this.props.addable) || false
    return (
      <UserContext.Consumer>
        {
          ({showModal, removeFromCollection}) =>
            <div className='movie' style={background}>
              <h3 className='movie__title'>{movie.title}</h3>
              {
                addable === true
                  ? (
                    <button className='movie__button__add' onClick={() => showModal('add',movie.id)}>+</button>
                  )
                  : (
                    <>
                      <button className='movie__button__unadd' onClick={() => removeFromCollection(this.props.collectionId,movie.id)}>-</button>
                      <button className='movie__button__score' onClick={() => showModal('score',movie.id)}>Score</button>
                    </>
                  )
              }
              <Link to={`/movie/${movie.id}`} >
                <button className='movie__button__show'>Show</button>
              </Link>
            </div>
        }
      </UserContext.Consumer>
    )
  }
}

export default Movie