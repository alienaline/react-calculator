import styled from 'styled-components';

export const NumpadStyles = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4, 90px);
    justify-content: center;
    gap: 10px;
    @media(max-width: 500px) {
        grid-template-columns: repeat(4, 4fr);
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
        display: flex;
        align-items: center;
        justify-content: center;
        &:focus {
            background-color: #ff7d7f;
            border: 2px solid #ff7d7f;
            color: white;
        }
        @media(max-width: 500px) {
            padding: 12px 10px;
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