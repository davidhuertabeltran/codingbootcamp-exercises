function Filter(props) {

    const handleOption = (e) => {
        props.setFilter(e.target.value);
    }

    return (
        
        <div className="filter">
            <select name="filter" id="" onChange={handleOption}> 
                <option disabled value="all"> -- Select a region -- </option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        
    )
}

export default Filter;