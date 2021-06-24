import { useEffect, useState } from "react";

function JokeGenerator() {
    const[joke, setjoke] = useState(null);
    const[jokeDelivery, setJokeDelivery] = useState(false);

    async function fetchData() {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();
            setjoke(data);
            console.log(data);
            setJokeDelivery(false);
            if(data.type === "twopart") {
                setTimeout(() => {
                    setJokeDelivery(true)
                }, 3000);
            }
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(joke === null) {
        return (
            <h2>Loading data...</h2>
        );
    }

    return (
        <>
            <h1>Random Joke</h1>
            <p>{joke.joke}</p>
            <p>{joke.setup}</p>
            { jokeDelivery && ( <p>{joke.delivery}</p> ) }
            <button onClick={() => { fetchData() }}>Give me a new joke</button>
        </>

    )
}

export default JokeGenerator;