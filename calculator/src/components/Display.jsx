import React, { useContext } from 'react';
import { DisplayStyles } from './styles/Styles';
import { NumberContext } from './NumberProvider.jsx';

function Display() {
    const {storedNumber, functionType, number} = useContext(NumberContext);

    return (
        <DisplayStyles>
            <p className='displayHeader'>Calculator</p>
            <h2 className='displayResult'>
                {number == '' ? '0' : number}
            </h2>
            <p className='displayExpression'>
                {storedNumber} {functionType} 
            </p>
        </DisplayStyles>
    );
}

export default Display;