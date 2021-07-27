import styled from 'styled-components';

export const MenuStyle = styled.ul`
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.theme.mode === 'dark' ? `var(--dark-color)` : `#eee`};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ menuMobile }) =>
    menuMobile ? 'translateX(0)' : 'translateX(200%)'};
  transition: transform 0.3s ease-in-out;

  li a {
    display: block;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem;
    color: currentColor;
    cursor: pointer;
  }
`;

export const Hamburguer = styled.div`
  width: 2rem;
  height: 1.5rem;
  z-index: 99;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 1.5rem;
    height: 0.18rem;
    background-color: ${(props) =>
      props.theme.mode !== 'dark' ? `var(--dark-color)` : `#eee`};
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
