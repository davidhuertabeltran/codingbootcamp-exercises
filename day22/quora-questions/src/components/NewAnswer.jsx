import { useState } from "react"
import Likes from './Likes';


const QuoraForm = () => {
    const [newAnswers, setNewAnswers] = useState([]);
    const [input, setInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setNewAnswers(newAnswers.concat(input));
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
        
        {/* We need to use {} in order to write javascript code */}

        {

            newAnswers.map((answer) => (    
                <>
                    <p>{answer}</p>
                    <Likes />
                </>
            ))

        }
        
        <form onSubmit={onSubmit}>
            <input type="text" value={input} onChange={handleChange} />
            <button type="submit">Add new answer</button>

        </form>
        </>
    )

}

export default QuoraForm;