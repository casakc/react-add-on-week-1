import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definition ? (
        <p><strong>Definition:</strong> {props.meaning.definition}</p>
      ) : (
        <p><em><strong>Definition:</strong> Unavailable</em></p>
      )}
      {props.meaning.example ? (
        <p><em><strong>Example:</strong> {props.meaning.example}</em></p>
      ) : (
        <p><em><strong>Example:</strong> unavailable</em></p>
      )}

      <Synonyms synonyms={props.meaning.synonyms} />
      
      
      </div>
  );
}

/*{props.meaning.synonyms ? (
        <p><em><strong>Synomym:</strong> {props.meaning.synonyms[0]}</em></p>
      ) : (
        <p><em>No synonym available.</em></p>
      )}*/