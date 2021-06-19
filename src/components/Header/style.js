import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  position: relative;
  top: 0;
  left: 0;
  z-index: 99;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    width: 100%;
    padding: 0 2%;
  }
`;

export const ButtonStyle = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  svg g {
    fill: ${(props) =>
      props.theme.mode === 'dark' ? 'none' : 'var(--dark-color)'};
    stroke: ${(props) => (props.theme.mode === 'dark' ? '#FFF' : 'none')};
  }
`;
