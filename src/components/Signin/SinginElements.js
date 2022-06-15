import styled from 'styled-components';

export const Container = styled.div`
    min-height: calc(100vh - 80px);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        #23395d 0%,
        #192841 100%
    );
`;

export const FormButton = styled.input`
    font-family: monospace, monospace;
    background: #0F52BA;
    padding: 18px 0px;
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
        border: 3px solid #0F52BA;
        color: #0F52BA;
        background: #fff;
    }
`;