/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const NumberContext = React.createContext();

NumberProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export function NumberProvider(props) {
    const [number, setNumber] = useState('0');
    const [storedNumber, setStoredNumber] = useState('');
    const [operatorType, setOperatorType] = useState('');

    const handleSetDisplayValue = (num)=> {
        if ((!number.includes('.') || num != '.') && number.length < 8) {
            setNumber((number + num).replace(/^0+/, ''));
        }
    };

    const handleSetStoredValue = () => {
        number == '' ? setStoredNumber('') : setStoredNumber(number);
        setNumber('');
    };

    const handleClearButton = () => {
        setNumber('0');
        setStoredNumber('');
        setOperatorType('');
    };

    const handleToggleNegative = () => {
        if (number > 0) {
            setNumber(`-${number}`);
        } else if (number < 0) {
            setNumber(number.slice(1));
        } else {
            setNumber(number);
        }
    };

    const handleBackButton = () => {
        const newNumber = number.slice(0, number.length - 1);
        setNumber(newNumber || '0');
    };

    const handleSetCalcFunction = (operator) => {
        if (storedNumber && number) {
            handleDoMath();
            setOperatorType(operator);
        } else if (number) {
            setOperatorType(operator);
            handleSetStoredValue();
            setNumber('');
        } else if (storedNumber) {
            setOperatorType(operator);
        }
    };

    const handleDoMath = () => {
        const a = parseFloat(storedNumber);
        const b = parseFloat(number);

        switch(operatorType) {
            case '/':
                setStoredNumber(Math.round((a / b) * 1000) / 1000);
                setOperatorType('');
                setNumber('');
                break;
            case  '*':
                setStoredNumber(Math.round((a * b) * 100) / 100);
                setOperatorType('');
                setNumber('');
                break;
            case '+':
                setStoredNumber(Math.round((a + b) * 1000) / 1000);
                setOperatorType('');
                setNumber('');
                break;
            case '-':
                setStoredNumber(Math.round((a - b) * 1000) / 1000);
                setOperatorType('');
                setNumber('');
                break;
            default: 
                break;
        }
    };

    return (
        <NumberContext.Provider value={{
            number,
            storedNumber,
            operatorType,
            handleSetDisplayValue,
            handleSetStoredValue,
            handleBackButton,
            handleClearButton,
            handleToggleNegative,
            handleSetCalcFunction,
            handleDoMath,
        }}>
            {props.children}
        </NumberContext.Provider>
    );
}
