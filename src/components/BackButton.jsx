import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

function BackButton() {
    const {handleBackButton} = useContext(NumberContext);

    return (
        <button type='button' className='functionButton' onClick={() => handleBackButton()}>
            &larr;
        </button>
    );
}

export default BackButton;