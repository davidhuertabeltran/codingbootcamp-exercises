import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(timer);

    }, [count]);

    return (
        <h1>Count: {count}</h1>
    )
}

export default Counter;