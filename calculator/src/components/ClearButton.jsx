import React, { useContext } from 'react';
import {NumberContext} from './NumberProvider';

function ClearButton() {
    const {handleClearButton} = useContext(NumberContext);
    return (
        <button type='button' className='functionButton' onClick={handleClearButton}>
            C
        </button>
    );
}

export default ClearButton;