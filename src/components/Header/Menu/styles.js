import styled from 'styled-components';

export const MenuStyle = styled.ul`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => (theme.mode === 'dark' ? `#111` : `#eee`)};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ menuMobile }) =>
    menuMobile ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  li a {
    display: block;
    font-size: 2rem;
    padding: 1rem;
    color: currentColor;
  }
`;

export const Hamburguer = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 99;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.35rem;
    background-color: ${({ theme }) =>
      theme.mode != 'dark' ? `#111` : `#eee`};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ menuMobile }) =>
        menuMobile ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ menuMobile }) =>
        menuMobile ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ menuMobile }) => (menuMobile ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ menuMobile }) =>
        menuMobile ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
