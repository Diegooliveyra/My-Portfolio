import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    --primary-color: #D65063;
    --dark-color: #1F2021;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: ${(props) => (props.theme.mode === 'dark' ? '#111' : '#EEE')};
    color: ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
    font-family:  Spartan, Arial, Helvetica, sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-family: Spartan, Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    margin-bottom: .5rem;
  }

  h1 span {
    font-weight: bold;
    color: #D65063 ;
  }

  h1:before {
    content: '';
    width: 49px;
    height: 49px;
    border-radius: 12px;
    display: inline-block;
    background-color: #D65063;
    transform: rotate(-60deg);
    position: absolute;
    z-index: -10;
    top: -18px;
    left: -22px;
  }

  h2 {
    font-family:Spartan, Arial, Helvetica, sans-serif; 
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0.875rem;
`;
