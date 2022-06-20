import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: calc(100vh - 80px);
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        #23395d 0%,
        #192841 100%
    );
`;

export const Icon = styled(Link)`
    margin-left: 32px; 
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }

    &:hover {
        color: #fff;
    }
`;

export const FormButton = styled.input`
    font-family: monospace, monospace;
    background: #0F52BA;
    padding: 12px 0px;
    margin-top: 15px;
    border-radius: 5px;
    border: 3px solid #0F52BA;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    width: 40%;
    margin-left: 30%;
    margin-right: 30%;

    &:hover{
        transition: all 0.3s ease-in-out;
        border: 3px solid 	#0F52BA;
        color: 	#0F52BA;
        background: #fff;
    }
`;



