import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : '#000')};
    height: 80px;
    width: 100%;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
        color: #01bf71;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 970px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 970px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    &:hover {
        transition: all 0.4s ease-in-out;
        color: #01bf71;
        border-bottom: 2px solid #01bf71;
    }

    &.active {
        transition: all 0.4s ease-in-out;
        border-bottom: 2px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 970px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 6px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #01bf71;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
`;