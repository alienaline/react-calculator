import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import { MdOutlineCleaningServices } from 'react-icons/md';

function ClearButton() {
    const {handleClearButton} = useContext(NumberContext);

    return (
        <button type='button' className='functionButton' onClick={() => handleClearButton()}>
            <MdOutlineCleaningServices />
        </button>
    );
}

export default ClearButton;