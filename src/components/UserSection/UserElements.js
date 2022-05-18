import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
    min-height: calc(100vh - 80px);
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(11, 83, 69 ) 0%,
        rgba(23, 165, 137) 100%
    );
`;

export const FormWrap1 = styled.div`
    display: block;
    padding-top: 30px;
`;

export const FormWrap2 = styled.div`
    display: block;
    padding: 30px 0;
`;

export const FormButton = styled.input`
    font-family: monospace, monospace;
    background: #117864;
    padding: 12px 0px;
    margin-top: 15px;
    border-radius: 5px;
    border: 3px solid #117864;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    margin: 15px auto 5px auto;
    width: 40%;

    &:hover{
        transition: all 0.3s ease-in-out;
        border: 3px solid #117864;
        color: #117864;
        background: #fff;
    }
    @media screen and (max-width: 600px) {
        width: 80%;
        padding: 10px 0;
    }
`;

export const FormButtonTop = styled.input`
    font-family: monospace, monospace;
    background: #117864;
    padding: 12px 0px;
    margin-top: 15px;
    border-radius: 5px;
    border: 3px solid #117864;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    width: 40%;
    float: ${props => props.right ? `right` : `left`};

    &:hover{
        transition: all 0.3s ease-in-out;
        border: 3px solid #117864;
        color: #117864;
        background: #fff;
    }
    @media screen and (max-width: 600px) {
        width: 47%;
        padding: 10px 3px;
        font-size: 0.7em;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 5px;
    margin-top: 0px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
`;


export const Form = styled.form`
    background: #1b2631;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 15px 80px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 600px) {
        max-width: 200px;
        padding: 20px 40px;
        h1 {
            font-size: 0.7em;
            padding-left: 20px;
        }
    }
`;

export const userLogo = styled(LinkR)`
    color: #fff;
    padding: 0 1rem;
    height: 40%;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 10%;
`;
