import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios'

import Character from './components/Character'

const App = () => {

  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
    .then(res=>{
      setCharacters(res.data)
    }) 
    .catch(err=>{
    console.error(err)
    })
  }, [])

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(char =>{
        return <Character 
        char={char}/>})
      }
    </div>
  );
}

export default App;
