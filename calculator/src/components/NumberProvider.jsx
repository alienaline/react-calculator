/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const NumberContext = React.createContext();

NumberProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export function NumberProvider(props) {
    const [number, setNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('0');
    const [functionType, setFunctionType] = useState('');

    const handleSetDisplayValue = (props)=> {
        setNumber(number + props);
    };

    const handleSetStoredValue = () => {
        setStoredNumber(number);
        setNumber('');
    };

    const handleClearButton = () => {
        setNumber('');
        setStoredNumber('');
        setFunctionType('');
    };

/* 
    const handleToggleNegative = () => {

    };

    const handleBackButton = () => {

    };

    const setCalcFunction = () => {

    };

    const handleDoMath = () => {

    };
*/

    return (
        <NumberContext.Provider value={{
            number,
            storedNumber,
            functionType,
            handleSetDisplayValue,
            handleSetStoredValue,
            handleClearButton,
        }}>
            {props.children}
        </NumberContext.Provider>
    );
}
