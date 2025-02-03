import React, {useState} from "react";
import './Dictionary.css';
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response) {
    console.log(response)
setResults(response.data);
}

function search(event) {
event.preventDefault();   
alert(`Searching for ${keyword} definition`);

//https://www.shecodes.io/learn/apis/dictionary//
let word= keyword
let apiKey="bb44bab20a1to1942fe0345a55b0085e";
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

return (
<div className="Dictionary">
<form onSubmit={search}>
  <input type="search" onChange={handleKeywordChange} title="Search for a word" 
    placeholder="Type a word to search" />  
</form>
<Results results={results} />
</div>  
);          
}

