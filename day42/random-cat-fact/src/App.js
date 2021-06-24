import logo from './logo.svg';
import './App.css';
import RandomCat from './components/RandomCat';
import JokeGenerator from './components/JokeGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomCat />

        <JokeGenerator />
      </header>
    </div>
  );
}

export default App;
