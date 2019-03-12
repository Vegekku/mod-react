import React from 'react'
import Movie from './Movie';

import './css/Showcase.css'

const Showcase = (props) => {
  const movies = props.movies || []
  return (
    <div className='showcase'>
      <h2 className='showcase__title'>{props.children}</h2>
      <button>{'<'}</button>
      <ul className='showcase__list'>
        {
          movies.map(item =>
            <li key={item.id} className='showcase__item'>
              <Movie movie={item} addable={props.addable}/>
            </li>
          )
        }
      </ul>
      <button>{'>'}</button>
    </div>
  )
}

export default Showcase