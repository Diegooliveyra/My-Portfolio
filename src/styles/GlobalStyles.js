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
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0.875rem;
`;
