import React from 'react';
import {string} from 'prop-types';

FunctionButton.propTypes = {
    buttonValue: string,
};

function FunctionButton({buttonValue}) {
    return (
        <button type='button' className='functionButton'>
            {buttonValue}
        </button>
    );
}

export default FunctionButton;