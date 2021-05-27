import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  left: 0;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
  }
`;

export const ButtonStyle = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;

  svg g {
    stroke: white;
  }
`;
