import logo from './logo1.jpg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
       Hello
      </header>
      <main>
        <Dictionary />
        </main>
      <footer className='App-footer'><small>Coded by Catarina S-A</small></footer>
    </div>
    </div>
  );
}


