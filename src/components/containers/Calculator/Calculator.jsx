import React from 'react';
import Display from '../Display/Display';
import { CalculatorStyles } from './CalculatorStyles';
import Numpad from '../Numpad/Numpad';


function Calculator() {
    return (
        <CalculatorStyles>
            <Display />
            <Numpad />
        </CalculatorStyles>
    );
}

export default Calculator;