import { useEffect, useState } from "react";

function RandomCat() {
    const[catFact, setCatFact] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
            const data = await response.json();
            setCatFact(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();

        setInterval(() => {
            fetchData();
        }, 2000)

    }, [])

    if(catFact === null) {
        return (
            <h2>Loading data...</h2>
        );
    }

    return (
        <>
            <h1>Random Cat Fact</h1>
            <p>{catFact.text}</p> {/* here we need to put the property we want to return, in this case .text */}
            <button onClick={() => { fetchData() }}>Fetch!</button>
        </>

    )
}

export default RandomCat;