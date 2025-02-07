import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css"

export default function Results(props) {
  if (props.results && props.results.word) {
    const capitalizedWord = props.results.word.charAt(0).toUpperCase() + props.results.word.slice(1);
    return (
      <div className="Results">
        <section style={{display: "flex", alignItems: "center"}}>
        <h2 style={{marginRight: "8px"}}>{capitalizedWord}</h2>
        <Phonetics phonetic={props.results.phonetic} />
         </section>
        {props.results.meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
             </section>
        ))}
       </div>
    );
  } else {
    return null;
  }
}




