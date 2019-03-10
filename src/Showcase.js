import React from 'react'
import Movie from './Movie';

import './css/Showcase.css'

const MOVIES = Array.from({length: 10}).map((_, index) => ({
  id: index,
  backdrop_path: '/6OTRuxpwUUGbmCX3MKP25dOmo59.jpg',
  title: 'Dragon Ball Super: Broly'
}))

const Showcase = (props) => {
  return (
    <div className='showcase'>
      <h2 className='showcase__title'>{props.children}</h2>
      <button>{'<'}</button>
      <ul className='showcase__list'>
        {
          MOVIES.map(item =>
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