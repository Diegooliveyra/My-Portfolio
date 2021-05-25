import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: ${(props) => (props.theme.mode === 'dark' ? '#111' : '#EEE')};
    color: ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0.875rem;
`;
