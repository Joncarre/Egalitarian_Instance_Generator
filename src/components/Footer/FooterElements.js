import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
    }
`;

export const FooterLinkA = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-top: 15px;
    font-size: 12px;
`;

export const CopyButton = styled.button`
    font-family: monospace, monospace;
    font-size: 12px;
    width: 64px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    margin: 0 8px 0 14px;
    padding: 3px 8px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 3px;
    cursor: pointer;
    @media screen and (max-width: 380px) {
        font-size: 9px;
        width: 52px;
        padding: 5px 8px;
      }
`
