import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definition ? (
        <p>Definition: {props.meaning.definition}</p>
      ) : (
        <p>No definition available.</p>
      )}
      {props.meaning.example ? (
        <p><em>Example: {props.meaning.example}</em></p>
      ) : (
        <p><em>No example available.</em></p>
      )}
      </div>
  );
}