function Country ({ data: { name, region, population, flag, capital} }) {
    return (
        <div className="country">
            <img src={`${flag}`} alt={`${name}`} className="flag"/>
            <h2 className="country-name">{name}</h2>
            <p className="country-description">Population: {population}</p>
            <p className="country-description">Region: {region}</p>
            <p className="country-description">Capital: {capital}</p>
            
        </div>
    )
}

export default Country;