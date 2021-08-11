import { useState } from 'react';
import './App.css';

const movieRec = {
  SCIFI: [
    {
      name: "Inception",
      year: "2010",
      IMDb: "8.8"
    },

    {
      name: "The Matrix",
      year: "1999",
      IMDb: "8.7"
    },

    {
      name: "Interstellar",
      year: "2014",
      IMDb: "8.6"
    }
  ],

  MYSTERY: [
    {
      name: "Oldboy",
      year: "2003",
      IMDb: "8.4"
    },

    {
      name: "Shutter Island",
      year: "2010",
      IMDb: "8.2"
    },

    {
      name: "Memories Of Murder",
      year: "2003",
      IMDb: "8.1"
    }
  ],

  ACTION: [
    {
      name: "Die Hard",
      year: "1988",
      IMDb: "8.2"
    },

    {
      name: "Mad Max: Fury Road",
      year: "2015",
      IMDb: "8.1"
    },    

    {
      name: "John Wick",
      year: "2014",
      IMDb: "7.4"
    }
  ]
};

function App() {

  const[genre,setGenre]=useState("SCIFI")

  function genreClick(genre){
    setGenre(genre)
  }

  
  return (
    <div className="App">
      <h1>Raghav's Movie Recommendation</h1>
      <p>Here is a list of some Movies that I found to be really intresting</p>
      {Object.keys(movieRec).map((genre)=>(
        <button onClick={()=>{genreClick(genre)}} style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"}}>{genre}</button>
      ))}

      <hr/>    
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieRec[genre].map((movie)=>(
            <li key={movie.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid black",
              width: "90%",
              margin: "1rem 1rem",
              borderRadius: "0.5rem"
            }}>{""}
            <div style={{ fontSize: "Larger" }}>
              <a style={{ textDecoration: "none", color: "white" }}>
                <span style={{ fontSize: "larger" }}>{movie.name}</span>
              </a>
            </div>
            <div style={{ fontWeight: "lighter" }}> Year Of Release : {movie.year} </div>
            <div style={{ fontWeight: "lighter" }}> IMDb Rating : {movie.IMDb} </div>
            </li>
          ))}

        </ul>
      </div>
    </div>
    
  );
}

export default App;
