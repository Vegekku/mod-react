import React from 'react'

import './css/Detail.css'

class Detail extends React.Component {
  state = {
    loading: true,
    movie_id: this.props.match.params.movie_id
  }
  async componentDidMount() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${this.state.movie_id}?api_key=a7344235cf71916f964295b0d4d6133a&language=es-ES`)
      const movie = await response.json()
      this.setState({movie})
    } catch (error){
      this.setState({error})
    } finally {
      this.setState({ loading: false})
    }
  }
  render() {
    const {error, loading, movie} = this.state

    if (error) {
      return <p>Error</p>
    }

    if (loading) {
      return <p>Loading...</p>
    }

    if (movie.status_code) {
      return <p>{movie.status_message}</p>
    }
    // TODO Botón de volver atrás manteniendo búsquedas
    return (
      <div className='detail'>
        <img className='detail__poster' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img>
        <div className='detail__content'>
          <button onClick={() => window.history.back()}>Back</button>
          <h1 className='detail__title'>{movie.title}</h1>
          <h2 className='detail__original_title'>{movie.original_title}</h2>
          
          <p>Estreno: {movie.release_date}</p>
          <p>{movie.overview}</p>
          <a href={movie.homepage}>{movie.homepage}</a>
        </div>
      </div>
    )
  }
}

export default Detail
  