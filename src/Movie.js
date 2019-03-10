import React from 'react'
import {Link} from 'react-router-dom'

import Modal from './Modal'

import './css/Movie.css'

class Movie extends React.Component {
  state = {
    showingModal: false
  }
  constructor() {
    super()
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }
  render() {
    const {movie} = this.props
    const background = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.backdrop_path})`,
      backgroundColor: 'grey',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    const addable = Boolean(this.props.addable) || false
    return (
      <div className='movie' style={background}>
        <h3 className='movie__title'>{movie.title}</h3>
        {
          addable === true
            ? (
              <button className='movie__button__add' onClick={() => this.showModal('add')}>Add</button>
            )
            : (
              <>
                <button className='movie__button__unadd'>Unadd</button>
                <button className='movie__button__score' onClick={() => this.showModal('score')}>Score</button>
              </>
            )
        }
        {
          this.state.showingModal === 'add' &&
            <Modal type='add' onSubmit={this.addToCollection.bind(this)} onClose={this.hideModal}>Add to</Modal>
        }
        {
          this.state.showingModal === 'score' &&
            <Modal type='score' onSubmit={this.scoreMovie.bind(this)}  onClose={this.hideModal}>Score</Modal>
        }
        <Link to={`/movie/${movie.id}`} >
          <button className='movie__button__show'>Show</button>
        </Link>
      </div>
    )
  }
  // TODO toogleModal
  showModal(modal) {
    // TODO Solo puede mostrarse un modal, por lo que este estado debe estar en un componente superior
    this.setState({showingModal: modal})
  }
  hideModal() {
    this.setState({showingModal: false})
  }
  addToCollection({select, input}) {
    console.log(input)
    this.hideModal()
  }
  scoreMovie({input}) {
    console.log(input)
    this.hideModal()
  }
}

export default Movie