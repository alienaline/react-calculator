import React from 'react';
import { DisplayStyles } from './styles/Styles';

function Display() {
    return (
        <DisplayStyles>
            <p className='displayHeader'>Calculator</p>
            <h2 className='displayResult'>0</h2>
            <p className='displayExpression'>4 + 5</p>
        </DisplayStyles>
    );
}

export default Display;