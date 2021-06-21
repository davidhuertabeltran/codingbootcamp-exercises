import { useState } from "react";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

function Counter(props) {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <p>Count: {counter + props.globalCounter}</p>

            <MinusButton
                counter={counter}
                setCounter={setCounter}
            />

            <PlusButton
                counter={counter}
                setCounter={setCounter}
            />

        </>
    )
}

export default Counter;