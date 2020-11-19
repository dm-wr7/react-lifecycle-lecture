import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie" key={props.movie.id}>
      <img className="movie-poster" src={props.movie.poster} />
      <div className="movie-text">
        <h2>{props.movie.title}</h2>
        <p>{props.movie.year}</p>
        <button onClick={() => props.handleCounterIncrement()}>
          Pump it up!
        </button>
      </div>
    </div>
  )
}
export default Movie
