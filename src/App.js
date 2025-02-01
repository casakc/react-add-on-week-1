import logo from './logo1.jpg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
        </main>
      <footer className='App-footer'><small>Coded by Catarina S-A and is hosted on <a href="https://github.com/casakc/react-add-on-week-1" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://react-add-on-week-1.netlify.app/" target="_blank" rel="noreferrer">Netlifly</a></small></footer>
    </div>
    </div>
  );
}


