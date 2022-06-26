import styled from 'styled-components';

export const CalculatorStyles = styled.div`
    display: grid;
    max-width: 420px;
    margin: auto auto;
    background-color: #ff6567;
    border: 1px solid #ef6060;
    border-radius: 1.5%;
    box-shadow: 0 6px 17px #808080;

    .numPad {
        margin: 20px;
        display: grid;
        grid-template-columns: repeat(4, 90px);
        justify-content: center;
        gap: 10px;
    }

    button {
        outline: none;
        width: 100%;
        border: 2px solid #ff7d7f;
        border-radius: 20px;
        padding: 15px 10px; 
        font-size: 20px;
        font-weight: 700;
        background-color: #ff6567;
        color: #eeedee;
        cursor: pointer;
        &:focus {
            background-color: #ff7d7f;
            border: 2px solid #ff7d7f;
            color: white;
        }
    }

    .zeroButton {
        grid-column: 1/3;

    }

    .functionButton {
        background-color: #fe5457;
        border: 2px solid #f65255;
        &:focus {
            background-color: #f65255;
            border: none;
            color: white;
        }
    }

    .equalButton {
        background-color: #fed501;
        border: none;
        &:focus {
            background-color: #FFC300;
            border: none;
        }
    }

`;

export const DisplayStyles = styled.div`
    
`;