import { useState } from "react"

const Likes = () => {

    const [likes, countLikes] = useState(0);

    const totalLikes = () => {
        countLikes(likes + 1);
    }

    return (
        <>
            <button onClick={totalLikes}> I like this answer</button>
            <p>👍{likes}</p>            
        </>
    )
}

export default Likes;