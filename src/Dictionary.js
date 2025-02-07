import React, {useState} from "react";
import './Dictionary.css';
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
  console.log(response)
setResults(response.data);
}

function search() {
//https://www.shecodes.io/learn/apis/dictionary//
let word=keyword;
let apiKey="bb44bab20a1to1942fe0345a55b0085e";
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
event.preventDefault();   
search();
}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

function load() {
setLoaded(true);
search();
}

if (loaded) {
  return (
    <div className="Dictionary">
    <section>
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleKeywordChange} title="Search for a word" 
        placeholder="Hello, please type word" />  
    </form>
    </section>
    <Results results={results} />
    </div>  
    );   
} else {
  load();
  return `Searching for ${keyword} definition`;
}

       
  }




/*return (
<div className="Dictionary">
<section>
<form onSubmit={search}>
  <input type="search" onChange={handleKeywordChange} title="Search for a word" 
    placeholder="Please type word" />  
</form>
</section>
<Results results={results} />
</div>  
);          
}*/

/*function search(event) {
  event.preventDefault();   
  alert(`Searching for ${keyword} definition`);*/