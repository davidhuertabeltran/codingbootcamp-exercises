import Likes from './Likes';

function Answer (props) {
    return (
        <>
            <p>{props.answer}</p>
            <Likes />
        </> 
    )

}

export default Answer;