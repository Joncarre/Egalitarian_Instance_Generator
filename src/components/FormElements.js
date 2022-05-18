import styled from 'styled-components';

export const FormContent = styled.div`
    display: block;
    padding-bottom: 20px;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    font-family: "Montserrat", Sans-serif;
    padding: 10px 36px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    @media screen and (max-width: 600px) {
      width: 130px;
    }
`;

export const FormError = styled.p`
  font-family: monospace, monospace;
  color: #d4ac0d;
  font-size: 14px;
  margin: 0 0 0 0;
  &::before {
    display: inline;
    content: "⚠ ";
  }   
`;

export const Form = styled.form`
    background: #1b2631;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 50px auto 0;
    padding: 30px 30px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 600px) {
      max-width: 200px;
      padding: 20px 60px;
      h1 {
          font-size: 1em;
      }
  }
`;

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;