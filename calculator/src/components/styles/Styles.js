import styled from 'styled-components';

export const CalculatorStyles = styled.div`
    margin: auto;
    background-color: #ff6567;
    border: 1px solid #ef6060;
    border-radius: 12px;
    box-shadow: 0 0px 20px #708090;

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
        font-size: 24px;
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
    position: relative;
	left: 0;
	right: 0;
    margin: 20px auto;
    background-color: #F5F5F5;
    border-radius: 10px;
    color: #696969;
    text-align: right;
    max-width: 90%;
    
    .displayHeader {
        background-color: #DCDCDC;
        border-radius: 10px 10px 0 0;
        color: #A9A9A9;
        text-align: center;
        padding: 3px 0;
    }

    .displayResult {
        padding: 3px 10px;
        font-size: 3em;
    }

    .displayExpression {
        padding: 5px 10px;
        font-style: oblique;
    }
`;