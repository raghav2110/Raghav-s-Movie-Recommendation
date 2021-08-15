import { useState } from 'react';
import './App.css';

const movieRec = {
  SCIFI: [
    {
      name: "Inception",
      desc: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      year: "2010",
      IMDb: "8.8"
    },

    {
      name: "The Matrix",
      desc: "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
      year: "1999",
      IMDb: "8.7"
    },

    {
      name: "Interstellar",
      desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      year: "2014",
      IMDb: "8.6"
    }
  ],

  MYSTERY: [
    {
      name: "Oldboy",
      desc: "A man, held captive for no apparent reason for years, is given a cell phone, money and expensive clothes and released. Unless he finds out the identity of his captor, an even worse fate awaits him.",
      year: "2003",
      IMDb: "8.4"
    },

    {
      name: "Shutter Island",
      desc: "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      year: "2010",
      IMDb: "8.2"
    },

    {
      name: "Memories Of Murder",
      desc: "A big-city detective helps two inept small-town cops investigate a serial killer.",
      year: "2003",
      IMDb: "8.1"
    }
  ],

  ACTION: [
    {
      name: "Die Hard",
      desc: "Die Hard is an American action film series that originated with Roderick Thorp's novel Nothing Lasts Forever.",
      year: "1988",
      IMDb: "8.2"
    },

    {
      name: "Mad Max: Fury Road",
      desc: "Haunted by his turbulent past, Mad Max believes the best way to survive is to wander alone. Nevertheless, he becomes swept up with a group fleeing across the Wasteland in a War Rig driven by an elite Imperator, Furiosa. They are escaping a Citadel tyrannized by the Immortan Joe, from whom something irreplaceable has been taken. Enraged, the Warlord marshals all his gangs and pursues the rebels ruthlessly in the high-octane Road War that follows.",
      year: "2015",
      IMDb: "8.1"
    },    

    {
      name: "John Wick",
      desc: "John Wick is an American neo-noir action thriller media franchise created by screenwriter Derek Kolstad and owned by Lionsgate. Keanu Reeves plays John Wick, a retired hitman who becomes active again in his quest for vengeance.",
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
              <div style={{ textDecoration: "none", color: "white" }}>
                <span style={{ fontSize: "larger" }}>{movie.name}</span>
              </div>
            </div>
            <div style={{ fontWeight: "lighter" }}> Description : {movie.desc} </div>
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
