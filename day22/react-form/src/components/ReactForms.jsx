import { useState } from 'react'

const ReactForm = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [flavor, setFlavor] = useState('');

    const handleNameChange = (e) => {
        console.log('current value - ' + name)
        console.log('New value - ' + e.target.value)
        setName(e.target.value);
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handleFlavorChange = (e) => {
        setFlavor(e.target.value);
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('A name was submitted: ' + name + ' with a comment:' + comment);
    }
     
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Comment:
                <textarea value={comment} onChange={handleCommentChange} />
            </label>
            <label>
                Pick your favorite flavor:
                
                <select value={flavor} onChange={handleFlavorChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ReactForm;