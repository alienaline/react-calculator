import React from 'react';
import ClearButton from '../../buttons/ClearButton';
import BackButton from '../../buttons/BackButton';
import NegativeButton from '../../buttons/NegativeButton';
import FunctionButton from '../../buttons/FunctionButton';
import NumberButton from '../../buttons/NumberButton';
import EqualButton from '../../buttons/EqualButton';
import { NumpadStyles } from './NumpadStyles';

function Numpad() {
    return (
        <NumpadStyles>
            <ClearButton />
            <BackButton />
            <NegativeButton />
            <FunctionButton buttonValue={'/'} />
            <NumberButton buttonValue={7} />
            <NumberButton buttonValue={8} />
            <NumberButton buttonValue={9} />
            <FunctionButton buttonValue='*' />
            <NumberButton buttonValue={4} />
            <NumberButton buttonValue={5} />
            <NumberButton buttonValue={6} />
            <FunctionButton buttonValue='-' />
            <NumberButton buttonValue={1} />
            <NumberButton buttonValue={2} />
            <NumberButton buttonValue={3} />
            <FunctionButton buttonValue='+' />
            <div className='zeroButton'>
                <NumberButton buttonValue={0} />
            </div>
            <NumberButton buttonValue='.' />
            <EqualButton />
        </NumpadStyles>
    );
}

export default Numpad;