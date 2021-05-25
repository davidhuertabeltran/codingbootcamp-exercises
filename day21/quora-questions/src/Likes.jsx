import { useState } from "react"

const Likes = () => {

    const [likes, countLikes] = useState(0);

    const totalLikes = () => {
        countLikes(likes + 1);
    }

    return (
        <>
            <p>Likes: {likes}</p>
            <button onClick={totalLikes}>like this answer</button>
        </>
    )
}

export default Likes;