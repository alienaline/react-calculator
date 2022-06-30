import React, { useContext } from 'react';
import {number} from 'prop-types';
import {NumberContext} from './NumberProvider';

NumberButton.propTypes = {
    buttonValue: number,
};

function NumberButton({buttonValue}) {
    const {handleSetDisplayValue} = useContext(NumberContext);
    return (
        <button type='button' onClick={handleSetDisplayValue}>
            {buttonValue}
        </button>
    );
}

export default NumberButton;