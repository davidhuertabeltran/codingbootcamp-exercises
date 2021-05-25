import Answer from './Answer';

function Quora(props) {
    return (
        <div>
            <h2 className="title">{props.title}</h2>
            <p className="text">{props.text}</p>
            <Answer answer="This is my answer 1" />
            <Answer answer="This is the answer 2" />
        </div>
    )
}

export default Quora