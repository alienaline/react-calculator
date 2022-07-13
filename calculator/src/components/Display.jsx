import React, { useContext } from 'react';
import { DisplayStyles } from './styles/Styles';
import { NumberContext } from './NumberProvider.jsx';

function Display() {
    const {storedNumber, operatorType, number} = useContext(NumberContext);

    return (
        <DisplayStyles>
            <p className='displayHeader'>Calculator</p>
            <h2 className='displayExpression'>
                {storedNumber} {operatorType} {number}
            </h2>
            <p className={
                storedNumber.toString().length < 14 ? 'displayResult' : 'bigNumber'
            }>
                {number == '' ? storedNumber : number}
            </p>
        </DisplayStyles>
    );
}

export default Display;