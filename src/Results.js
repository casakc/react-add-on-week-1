import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results && props.results.word) {
    const capitalizedWord = props.results.word.charAt(0).toUpperCase() + props.results.word.slice(1);
    return (
      <div className="Results">
        <h2>{capitalizedWord}</h2>
        {props.results.meanings.map((meaning, index) => (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}




