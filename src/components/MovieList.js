import React, { Component } from 'react'
import Movie from './Movie'
import movies from '../data.json'

class MovieList extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      movies: [],
      counter: 0,
    }
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this)
  }

  componentDidMount() {
    console.log('HEY THE THING HAPPENED')

    setTimeout(() => {
      this.setState({ movies: movies, isLoading: false })
    }, 2500)
  }

  handleCounterIncrement() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    const mappedMovies = this.state.movies.map((element) => {
      return (
        <Movie
          handleCounterIncrement={this.handleCounterIncrement}
          movie={element}
          key={element.id}
        />
      )
    })

    return (
      <div className="movie-list">
        <h1>Here are some movies!</h1>
        <h3>Counter: {this.state.counter}</h3>
        {this.state.isLoading ? <h1>LOADING YOUR MOVIES....</h1> : mappedMovies}
      </div>
    )
  }
}
export default MovieList
