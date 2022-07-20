import React from 'react';
import Display from './Display';
import ClearButton from './ClearButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import FunctionButton from './FunctionButton';
import NumberButton from './NumberButton';
import EqualButton from './EqualButton';
import {CalculatorStyles} from './styles/Styles';


function Calculator() {
    return (
        <CalculatorStyles>
            <div className='dispaly'>
                <Display />
            </div>
            <div className='numPad'>
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
                <div className='zeroButton'>
                    <NumberButton buttonValue={0} />
                </div>
                <NumberButton buttonValue='.' />
                <EqualButton />
            </div>
        </CalculatorStyles>
    );
}

export default Calculator;