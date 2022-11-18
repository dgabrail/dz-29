import React, { Component, useState } from 'react'
import {MovieName} from '../../types'
import MovieChoise from '../MovieChoice/MovieChoice'
interface Props {
    Movies: MovieName[]
}


class Movies extends Component<Props> {
  render() {

    return (
      <div>
        {this.props.Movies.map((movie , index) => (
        <MovieChoise key={index} nameMovie={movie.name}/>
        ))}
      </div>
    )
  }
}

export default Movies

