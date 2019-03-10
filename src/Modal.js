import React from 'react'

import './css/Modal.css'

const COLLECTIONS = Array.from({length: 5}).map((_, index) => ({
  id: index,
  title: `Ejemplo ${index}`,
}))

class Modal extends React.Component {
  state = {
    input: ''
  }
  constructor() {
    super()
    this.setSelect = this.setSelect.bind(this)
    this.setInput = this.setInput.bind(this)
  }
  render() {
    const {input} = this.state
    return (
      <form className='modal' onSubmit={event => event.preventDefault()}>
        <h4 className='modal__title'>{this.props.children}</h4>
        {
          this.props.type === 'add'
          ? (
            <label>
              Select
              <select className='modal__select' onChange={this.setSelect}>
              {
                COLLECTIONS.map(collection => <option key={collection.id} value={collection.id}>{collection.title}</option>)
              }
              </select>
            </label>
          )
          : (
            <p>
              Value
            </p>
          )
        }
        <label>
          Input text
          <input type='text' className='modal__input' value={input} onChange={this.setInput} />
        </label>
        <button onClick={this.close.bind(this)}>X</button>
        <button className='modal__button' onClick={this.save.bind(this)}>Save</button>
      </form>
    )
  }
  setSelect(event) {
    this.setState({select: event.target.value})
  }
  setInput(event) {
    this.setState({input: event.target.value})
  }
  close() {
    this.props.onClose()
  }
  save() {
    const {select, input} = this.state
    this.props.onSubmit({select,input})
  }
}

export default Modal
  