import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
    return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="Definition">
      {props.meaning.definition ? (
        <p style={{marginBottom: "5px"}}><strong>definition:</strong> {props.meaning.definition}</p>
      ) : (
        <p><em><strong>Definition:</strong> Unavailable</em></p>
      )} </div>
      <Synonyms synonyms={props.meaning.synonyms} />
      <div className="Example">
        {props.meaning.example ? (
        <p style={{marginBottom: "5px"}}><strong>example:</strong> {" "}
        {`"${props.meaning.example.charAt(0).toUpperCase() + props.meaning.example.slice(1)}"`}
      </p>
      ) : (
        <p><em><strong>Example:</strong> unavailable</em></p>
      )} </div>
</div>
  );
}

