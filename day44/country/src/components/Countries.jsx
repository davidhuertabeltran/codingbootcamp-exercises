// function Countries ({ data: { name, region, population, flag} })
// import Filter from './Components/Filter';

import {useState , useEffect} from 'react';
function Countries (props) {

    const [data, setData] = useState([]);

    async function fetchCountries(value) {
        const randomUrl = `https://restcountries.eu/rest/v2/region/${value}`;
        const resp = await fetch(randomUrl);
        const data = await resp.json();
        setData(data);
        
    }
  
    useEffect(() => {
        fetchCountries(props.filter);
    }, [props.filter])

    return (
        <div className="country-container">     
           
        {data ?
        
            data.map((country,index)=>(

                <div key={index} className="country">
                    <img src={`${country.flag}`} alt={`${country.name}`} className="flag"/>
                    <h2 className="country-name">{country.name}</h2>
                    <p className="country-description">Population: {country.population}</p>
                    <p className="country-description">Region: {country.region}</p>
                    <p className="country-description">Capital: {country.capital}</p>
                </div>

            ))
            : 
            null
        }

        </div>
    )
}

export default Countries;