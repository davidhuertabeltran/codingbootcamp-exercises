import {useState} from 'react'

function SearchBar(props){
    const [query,setQuery] = useState('');

    const changeQuery = (event) => {
        setQuery(event.target.value)
    }
    return (
        <div className="search">
            <label htmlFor="search">Find a Country: </label>
            <input type="text" name="search" value={query}  onChange={changeQuery}/>

            <button onClick={()=>{props.search(query)}}>Search </button>
        </div>

    )
}

export default SearchBar