import styled from 'styled-components';

export const ButtonJson = styled.button`
    font-family: monospace, monospace;
    background: transparent;
    padding: 6px 0px;
    margin: auto;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    border-right: 2px solid #117864;
    border-left: 2px solid #117864;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    width: 30%;

    &:hover{
        transition: all 0.3s ease-in-out;
        border: 2px solid #117864;
        color: #117864;
        background: #fff;
    }
    @media screen and (max-width: 600px) {
        width: 47%;
        padding: 10px 3px;
        font-size: 0.7em;
    }
`