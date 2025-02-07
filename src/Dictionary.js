import React, {useState} from "react";
import './Dictionary.css';
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleResponse(response) {
setResults(response.data);
}

function handlePhotosResponse(response) {
setPhotos(response.data.photos);
}

function search() {
//https://www.shecodes.io/learn/apis/dictionary//
let word=keyword;
let apiKey="bb44bab20a1to1942fe0345a55b0085e";
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse);

let query=keyword;
let photosApiKey="bb44bab20a1to1942fe0345a55b0085e";
let photosApiUrl=`https://api.shecodes.io/images/v1/search?query=${query}&key=${photosApiKey}`;
axios.get(photosApiUrl).then(handlePhotosResponse);

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
    <Photos photos={photos} />
    </div>  
    );   
} else {
  load();
  return `Searching for ${keyword} definition`;
}

       
  }






