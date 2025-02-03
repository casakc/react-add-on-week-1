import React from "react";

export default function Synonyms (props){
    console.log(props.synonyms)
    if (props.synonyms) {
        return <em><strong>Synonym:</strong> {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym}</span>;
        })
    }</em>
    } else {
        return null
    }
    
}