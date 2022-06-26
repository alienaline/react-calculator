import React from 'react';


function FunctionButton(props) {
    return (
        <button type='button' className='functionButton'>
            {props.buttonValue}
        </button>
    );
}

export default FunctionButton;