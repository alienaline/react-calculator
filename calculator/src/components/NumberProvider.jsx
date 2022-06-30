import React, {useState} from 'react';

export const NumberContext = React.createContext();

export function NumberProvider() {
    const {number, setNumber} = useState('');
    const {storedNumber, setStoredNumber} = useState(0);
    const {functionType, setFunctionType} = useState();

    const handleSetDisplayValue = (props)=> {
        return setNumber(number + props);
    };

    const handleClearButton = () => {
        setNumber('');
        setStoredNumber('');
        setFunctionType('');
    };

/*    const handleSetStoredValue = ()=> {

    };

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
        <p>
            this is a number Provider
        </p>
    );
}
