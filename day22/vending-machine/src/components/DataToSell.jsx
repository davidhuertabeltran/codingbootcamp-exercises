import { useState } from "react";

const DataToSell = () => {
    const [greeting, setGreeting] = useState('');

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (gender === 'Male') {
            if(age > 30) {
                setGreeting(`Hello, Mr. ${name}`);
            } else {
                setGreeting(`Hello, young ${name}`);
            }       
        } else if (gender === 'Female') {
            if(age > 25) {
                setGreeting(`Hello, Mrs. ${name}`);
            } else {
                setGreeting(`Hello, Miss ${name}`);
            }
        } else {
            setGreeting(`Hello, ${name}`);
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    return (
        
            <>
            {

                greeting === '' ? (
                     <h1>Please provide us information so we can sell it to advertisers.</h1>
                ) : (
                    <h1>{greeting}</h1>
                )

            }

            <form onSubmit={onSubmit}>

                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    Age:
                    <input type="number" value ={age} onChange={handleAgeChange} />
                </label>
                <label>
                    Gender:
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <button type="submit">Submit</button>

            </form>
            </> 
        
    )
    
}

export default DataToSell;