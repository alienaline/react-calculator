import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

function EqualButton() {
    const {handleDoMath} = useContext(NumberContext);

    return (
        <button type='button' className='equalButton functionButton' onClick={() => handleDoMath()}>
            =
        </button>
    );
}

export default EqualButton;