import Country from './components/Country';
import SearchBar from './components/SearchBar';
import {useState , useEffect} from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  
  async function fetchCountries(country) {
    const randomUrl = `https://restcountries.eu/rest/v2/name/${encodeURIComponent(country)}`;
    const resp = await fetch(randomUrl);
    const data = await resp.json();
    setCountries(data);
  
  }

  return (
    <main>
      <div className="container">
        <SearchBar search={fetchCountries}/>
        <Filter setFilter={setFilter}/> 
      </div>

      {countries[0] && <Country  data={countries[0]}/>}
     
      {/* <Countries filter={filter}/> */}
      {filter && <Countries filter={filter}/>}
    
    </main>
  )
}

export default App;
