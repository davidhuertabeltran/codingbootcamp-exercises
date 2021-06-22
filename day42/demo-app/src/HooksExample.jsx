import {useEffect, useState} from "react";

function HooksExample() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} and ${count2} times`;
    },  [count, count2]); //everytime we use useEffect is recommended to provide a second argument

    useEffect(() => {
        console.log(`You clicked ${count} times`);
    }, [count]);

    useEffect(() => {
        console.log('Loading data from server');
    }, []); //Empty [] as second parameter will mean that this will only run once


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <p>You clicked {count2} times</p>
            <button onClick={() => setCount2(count2 + 1)}>
                Click me 2
            </button>
        </div>
    );
}

export default HooksExample