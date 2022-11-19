import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NumberContext } from '../NumberProvider';


NumberButton.propTypes = {
    buttonValue: PropTypes.any.isRequired,
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