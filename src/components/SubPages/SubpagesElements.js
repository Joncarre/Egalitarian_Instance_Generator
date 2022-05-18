import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: calc(100vh - 80px);
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #fff;
    // background: linear-gradient(
    //     108deg,
    //     rgba(11, 83, 69 ) 0%,
    //     rgba(23, 165, 137) 100%
    // );
`;

export const Wrap = styled.div`
    font-family: "Montserrat", Sans-serif;
    display: block;
    margin: 50px auto;
    padding: 40px 100px;
    width: 60%;
    background: #fff;
    color: #000;
    border-radius: 8px;
    @media screen and (max-width: 500px) {
        width: 90%;
        padding: 40px 10px;
        font-size: 0.5em;
    }
`;

export const NewH1 = styled.h1`
    line-height: 1.2;
`

export const NewH2 = styled.h2`

`

export const NewH3 = styled.h3`

`

export const NewP = styled.p`
    font-size: 14px;
    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`

export const NewB = styled.span`
    font-weight: 700;
`

export const NewUl = styled.ul`
    font-size: 14px;
    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`

export const NewLi = styled.li`

`

export const NewLink = styled.a`
    color: #000;
    // text-decoration: none;
    &:hover {
        color: #01bf71;
    }
`;

export const NewLinkWithoutline = styled.a`
    color: #000;
    text-decoration: none;
    &:hover {
        color: #01bf71;
    }
`;

export const Img = styled.img`
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 8px;
    display: block;
    margin: auto;
    @media screen and (max-width: 768px) {

    }

    @media screen and (max-width: 480px) {

    }
`;