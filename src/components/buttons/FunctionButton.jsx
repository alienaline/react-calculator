import React, { useContext } from 'react';
import {string} from 'prop-types';
import { NumberContext } from '../NumberProvider';

FunctionButton.propTypes = {
    buttonValue: string,
};

function FunctionButton({buttonValue}) {
    const {handleSetCalcFunction} = useContext(NumberContext);

    return (
        <button type='button' className='functionButton' onClick={() => handleSetCalcFunction(buttonValue)}>
            {buttonValue}
        </button>
    );
}

export default FunctionButton;