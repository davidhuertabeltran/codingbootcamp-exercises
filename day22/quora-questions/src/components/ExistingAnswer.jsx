import Likes from './Likes';
import QuoraForm from './NewAnswer';

const Answer = (props) => {

    return (
        <>
            <p>{props.answer}</p>
            <Likes />
            <QuoraForm />
        </> 
    )

}

export default Answer;