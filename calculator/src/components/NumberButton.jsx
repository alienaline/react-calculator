import React from 'react';

function NumberButton(props) {
    return (
        <button type='button' >
            {props.buttonValue}
        </button>
    );
}

export default NumberButton;