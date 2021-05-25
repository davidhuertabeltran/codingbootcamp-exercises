import React from 'react';
import Toggle from './Toggle';
 
const TodoItem = (props) => {
    return (
        <div>
            <p>{props.text}</p>
            <Toggle/>
        </div>
    )
};

export default TodoItem;