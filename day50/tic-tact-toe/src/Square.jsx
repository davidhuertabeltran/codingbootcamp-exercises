import React from 'react';

const Square = ({ value, onClick }) => (
	<button onClick={onClick} className="square">
        {value}
    </button>
);

export default Square;