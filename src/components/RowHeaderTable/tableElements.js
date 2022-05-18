import styled from 'styled-components';
export const TrHover = styled.tr`
    transition: 0.5s;
    &:hover {
        background-color: ${props => props.rowSolved ? "rgb(102, 187, 106, 0.5)" : "rgb(229, 57, 53, 0.6)"};
        cursor: pointer;
    }
`