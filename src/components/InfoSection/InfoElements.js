import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    padding-top: 30px;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 600px) {
        padding: 100px 10px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    z-index: 1;
    height: calc(100vh - 80px);
    max-height: 800px;
    width: 100%;
    @media screen and (max-width: 600px) {  
        height: 100%;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    justify-content: center;
    align-content: center;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
    }
    @media screen and (max-width: 600px) {
        display: block;
    }
    @media screen and (min-width: 1100px) {
        gap: 80px;
    }
    @media screen and (min-width: 1400px) {
        gap: 150px;
    }
    @media screen and (min-width: 1600px) {
        gap: 200px;
    }
`;

export const Column1 = styled.div`
    grid-area: col1;
    padding: 0 20px;
`;

export const Column2 = styled.div`
    padding: 20px 0;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    @media screen and (max-width: 600px) {
        padding-bottom: 20px;
    }
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 90%;
    margin: 0 0 10px 0;
    @media screen and (max-width: 600px) {
        width: 70%;
        height: 70%;
    }
`;

export const ImgChainlink = styled.img`
    width: 60%;
    margin: 0 0 10px 0;
    @media screen and (max-width: 600px) {
        width: 50%;
        height: 50%;
    }
    @media screen and (min-width: 1300px) {
        width: 70%;
    }
`;