import { useState } from "react";
import Checkbox from "./Checkbox";
function Book(props) {
    const [readStatus, setReadStatus] = useState(false);

    return (
        <>
            <h2><a href={`${ props.website }`}> {props.title}</a></h2>
            <Checkbox 
            status={readStatus}
            setStatus={setReadStatus}
            />
            <p>Did I read this book? {readStatus ? "Yes" : "No"}</p>
            <p className="about">by {props.author}</p>
            <p className="about-book">About:</p>
            <p>{props.description}</p>
        </>
    )
}

export default Book;