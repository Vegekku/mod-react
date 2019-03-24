import React from 'react'

const API_HOST = 'https://api.themoviedb.org/3/movie/'
const API_CONSTANTS = '?api_key=a7344235cf71916f964295b0d4d6133a&language=es-ES'

//https://github.com/Accenture/openathon-2019-react/tree/master/labs/lab-03
export default class extends React.Component {
  state = {
    data: null,
    loading: false,
    error: null
  }
  componentDidMount() {
    this.fetchData()
  }
  render() {
    return this.props.children(this.state)
  }
  fetchData = async() => {
    this.setState({loading: true})
    try {
      // const data = await (await fetch(`${API_HOST}${this.props.path}`, this.props.options)).json()

      const response = await fetch(`${API_HOST}${this.props.path}${API_CONSTANTS}`)
      const data = await response.json()
      this.setState({data})
    } catch (error) {
      this.setState({error, loading: false})
    } finally {
      this.setState({loading: false})
    }
  }
}