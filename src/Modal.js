import React from 'react'

import './css/Modal.css'

class Modal extends React.Component {
  state = {
    input: '',
    select: ''
  }
  constructor() {
    super()
    this.setSelect = this.setSelect.bind(this)
    this.setInput = this.setInput.bind(this)
  }
  render() {
    const {input, select, disabled} = this.state
    return (
      <div className='modal'>
        <form className='modal__form' onSubmit={event => event.preventDefault()}>
          <h4 className='modal__title'>{this.props.children}</h4>
          {
            this.props.type === 'add'
            ? (
              <label>
                Select
                <select className='modal__select' onChange={this.setSelect} disabled={disabled} value={select}>
                  <option key='select_option' value='' disabled>Select option</option>
                {
                  this.props.selectItems.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
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
            {this.props.inputText}
            <input type='text' className='modal__input' value={input} onChange={this.setInput} />
          </label>
          <button onClick={this.close.bind(this)}>X</button>
          <button className='modal__button' onClick={this.save.bind(this)}>Save</button>
        </form>
      </div>
    )
  }
  setSelect(event) {
    this.setState({select: event.target.value})
  }
  setInput(event) {
    const inputValue = event.target.value
    let disabled = false
    if (inputValue !== '') {
      disabled= true
    }
    this.setState({input: event.target.value, disabled})
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
  