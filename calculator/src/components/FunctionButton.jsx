import React from 'react';
import {number} from 'prop-types';

FunctionButton.propTypes = {
    buttonValue: number,
};

function FunctionButton({buttonValue}) {
    return (
        <button type='button' className='functionButton'>
            {buttonValue}
        </button>
    );
}

export default FunctionButton;