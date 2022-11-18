import React, { Component, useState } from 'react'
import { MovieName } from '../../types';
interface Props {
    nameMovie: string;
}

interface State {
    nameMovie: string;
}

class Movie extends Component<Props , State> {

    state: State = {
        nameMovie: this.props.nameMovie
      };

      const refactorMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prev => ({
            ...prev,
            nameMovie: prev.nameMovie = event.target.value
          }))
      }

  render() {

    return (
      <div style={{marginTop:'10px'}}>
        <input onChange={(e) =>  refactorMovie(e)}  value={this.state.nameMovie} type="text"/>
        <button>X</button>
      </div>
    )
  }
}

export default Movie


