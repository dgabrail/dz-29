import { stringify } from 'querystring';
import React, { useState } from 'react';
import './App.css';
import Moviess from './components/Movies/Moviess';
import {MovieName} from './types'

function App() {

  const [Movies , setMovies] = useState<MovieName[]>([])

  const movie  = {
    name: ''
  }

  const nameMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    movie.name = event.target.value
  }

  const newMovie = () => {
    setMovies(prev => [...prev , movie])
  }

  return (
    <div className="App">
      <input onChange={e => nameMovie(e)} style={{margin:'10px'}} type="text"/>
        <button onClick={newMovie}>Add</button>
        <Moviess Movies={Movies}/>
    </div>
  );
}

export default App;
