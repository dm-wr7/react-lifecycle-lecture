import React, { Component } from 'react'
import Movie from './Movie'
import movies from '../data.json'

class MovieList extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      movies: [],
    }
  }

  render() {
    const mappedMovies = this.state.movies.map((element) => {
      return <Movie movie={element} key={element.id} />
    })

    return (
      <div className="movie-list">
        <h1>Here are some movies!</h1>
        {mappedMovies}
      </div>
    )
  }
}
export default MovieList
