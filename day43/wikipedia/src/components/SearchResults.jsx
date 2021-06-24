function SearchResults(props) {
    return (
        <div className="SearchResults">
            <p>Search Results:</p>
            <div className="ResultsList">
                {props.searchResults.map((result, i) => (
                    <a key={i} href={`https://en.wikipedia.org/wiki/${result.title}`} target='_blank' rel="noopener noreferrer">{result.title}</a>
                ))}
            </div>
        </div>
    )
}

export default SearchResults;