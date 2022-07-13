import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

function NegativeButton() {
    const {handleToggleNegative} = useContext(NumberContext);

    return (
        <button type='button' className='functionButton' onClick={() => handleToggleNegative()}>
            -/+
        </button>
    );
}

export default NegativeButton;