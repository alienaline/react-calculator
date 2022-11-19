import styled from 'styled-components';

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
    height: 120px;
    @media(max-width: 500px) {
        height: 110px
    }

    .displayHeader {
        background-color: #DCDCDC;
        border-radius: 10px 10px 0 0;
        color: #A9A9A9;
        text-align: center;
        padding: 3px 0;
    }

    .displayExpression {
        padding: 3px 10px;
        font-style: oblique;
        font-size: 18px;
        font-weight: 400;
        opacity: 80%;
        @media(max-width: 500px) {
            font-size: 15px;
        }
    }

    .displayResult {
        padding: 0px 10px;
        font-size: 3em; 
        font-weight: 700;
        @media(max-width: 500px) {
            font-size: 2.4em
        }
    }

    .bigNumber {
        padding: 11.3px 10px;
        font-size: 1.8em; 
        font-weight: 700;
        @media(max-width: 500px) {
            font-size: 1.4em
        }
    }
`;