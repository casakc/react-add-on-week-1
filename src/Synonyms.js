import React from "react";
import "./Synonyms.css";

export default function Synonyms (props){
    if (props.synonyms) {
        return <div className="Synonyms"><strong>Synonym:</strong> {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym} {index < props.synonyms.length - 1 ? " | " : ""}</span>;
        })
    }</div>
    } else {
        return null
    }

    }

   