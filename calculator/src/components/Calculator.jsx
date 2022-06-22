import React from 'react';
import Display from './Display';
import ClearButton from './ClearButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import FunctionButton from './FunctionButton';
import NumberButton from './NumberButton';
import EqualButton from './EqualButton';

function Calculator() {
    return (
        <div>
            <Display />
            <ClearButton />
            <BackButton />
            <NegativeButton />
            <FunctionButton buttonValue='/' />
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
            <NumberButton buttonValue={0} />
            <FunctionButton buttonValue='.' />
            <EqualButton />
        </div>
    );
}

export default Calculator;