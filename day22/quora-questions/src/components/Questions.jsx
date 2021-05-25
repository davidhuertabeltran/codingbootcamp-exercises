import Answer from './ExistingAnswer';

function Quora(props) {
    return (
        <div>
            <h2 className="title">{props.title}</h2>
            <p className="text">{props.text}</p>
            <Answer answer="This is my existing answer 1" />
        </div>
    )
}

export default Quora;