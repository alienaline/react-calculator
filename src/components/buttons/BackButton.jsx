import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import { MdKeyboardBackspace } from 'react-icons/md';

function BackButton() {
    const {handleBackButton} = useContext(NumberContext);

    return (
        <button type='button' className='functionButton' onClick={() => handleBackButton()}>
            <MdKeyboardBackspace />
        </button>
    );
}

export default BackButton;