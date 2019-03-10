import React from 'react'

import './css/Movie.css'

class Movie extends React.Component {
  render() {
    const background = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w300${this.props.movie.backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return (
      <div className='movie' style={background}>
        <h3 className='movie__title'>{this.props.movie.title}</h3>
        <button className='movie__button__add'>Add</button>
        <button className='movie__button__show'>Show</button>
        <button className='movie__button__unadd'>Unadd</button>
        <button className='movie__button__score'>Score</button>
      </div>
    )
  }
}

export default Movie