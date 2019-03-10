import React from 'react'

import './css/Modal.css'

const COLLECTIONS = Array.from({length: 5}).map((_, index) => ({
  id: index,
  title: `Ejemplo ${index}`,
}))

export default props =>
  <form className='modal' onSubmit={event => event.preventDefault()}>
    <h4 className='modal__title'>TITLE</h4>
    <label>
      Select
      <select className='modal__select'>
      {
        COLLECTIONS.map(collection => <option key={collection.id} value={collection.id}>{collection.title}</option>)
      }
      </select>
    </label>
    <p>
      Text
    </p>
    <label>
      Input text
      <input type='text' className='modal__input' />
    </label>
    <button className='modal__button'>Save</button>
  </form>