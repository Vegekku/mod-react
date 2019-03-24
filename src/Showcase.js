import React from 'react'
import Movie from './Movie';

import './css/Showcase.css'

class Showcase extends React.Component {
  state = {
    translation: 0,
    translationLast: this.props.movies.length,
  }
  render() {
    const movies = this.props.movies || []
    const {
      children,
      removeCollection,
      collectionId,
      addable
    } = this.props
    return (
      <div className='showcase'>
        <h2 className='showcase__title'>{children}</h2>
        {
          removeCollection &&
          <button className='showcase__button__remove' onClick={() => removeCollection(collectionId)}>X</button>
        }
        
        <div className='showcase__carousel'>
          <button className='showcase__carousel__button' onClick={() => this.translateList('left')}>{'<'}</button>

          <div className='showcase__carousel__wrapper'>
            <ul className='showcase__list' style={{transform: `translate(calc(${this.state.translation} * 18rem))`}}>
              {
                movies.map(item =>
                  <li key={item.id}>
                    <Movie movie={item} collectionId={collectionId} addable={addable}/>
                  </li>
                )
              }
            </ul>
          </div>
          
          <button className='showcase__carousel__button' onClick={() => this.translateList('right')}>{'>'}</button>
        </div>
        
      </div>
    )
  }
  translateList = (x) => {
    const {translationLast} = this.state
    let {translation} = this.state

    if (x === 'left' && translation !== 0) {
      translation++
    } else if (x === 'right' && translationLast-1 !== -translation) {
      translation--
    }
    this.setState({
      translation,
    })
  }
}

export default Showcase