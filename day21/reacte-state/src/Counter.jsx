import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const raiseCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <p>You clicked the button {counter} times</p>
            <button onClick={raiseCounter}>Click me!</button>
        </>
    )
}

export default Counter;