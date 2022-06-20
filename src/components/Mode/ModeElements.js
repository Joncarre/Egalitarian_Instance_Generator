import styled from 'styled-components';

export const Container = styled.div`
    min-height: calc(100vh - 80px);
    display: block;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        #23395d 0%,
        #192841 100%
    );
`;

export const TextDiv = styled.div`
    padding-top: 50px;
    text-align: center;
    width: 80%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
`

export const ButtonFlex = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonItem = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    width: 50%;
    text-align: ${({ right }) => right ? "right" : "left"};

    @media screen and (max-width: 480px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const StyledButton = styled.button`
    font-family: monospace, monospace;
    background: #0F52BA;
    padding: 12px 0px;
    margin-top: 15px;
    border-radius: 5px;
    border: 3px solid #0F52BA;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    width: 150px;

    &:hover{
        transition: all 0.3s ease-in-out;
        border: 3px solid 	#0F52BA;
        color: 	#0F52BA;
        background: #fff;
    }
`;