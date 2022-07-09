import React, { useContext } from 'react';
import {number} from 'prop-types';
import { NumberContext } from './NumberProvider.jsx';


NumberButton.propTypes = {
    buttonValue: number,
};

function NumberButton({buttonValue}) {

    const {handleSetDisplayValue} = useContext(NumberContext);

    return (
        <button type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    );
}

export default NumberButton;