import styled, { keyframes } from 'styled-components';
import bg_hero from '../../Assets/bg_hero.jpg';

export const HeroStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.theme.mode === 'dark'
      ? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${bg_hero})`
      : `linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, 0.8)), url(${bg_hero})`};
  background-size: cover;
  background-position: center center;
  padding: 0 1rem;
  position: relative;
  margin-top: -6rem;
  svg {
    width: 100%;
    animation: animaDown 1.4s ease forwards;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.85;
    font-weight: 300;
    text-align: center;
    color: ${(props) => (props.theme.mode === 'dark' ? `#FFF` : `#111`)};
    animation: animaDown 0.8s ease forwards;

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }

  @keyframes animaDown {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ArrowMove = styled.div`
  position: absolute;
  bottom: 100px;
  span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    border-color: ${(props) => (props.theme.mode === 'dark' ? `#FFF` : `#111`)};
    transform: rotate(45deg);
    margin: -12px;
    animation: arrow 2s infinite;

    :nth-child(2) {
      animation-delay: -0.2s;
    }

    :nth-child(3) {
      animation-delay: -0.4s;
    }
  }

  @keyframes arrow {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-15px, -15px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(15px, 15px);
    }
  }
`;

export const IconsLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 3.5%;

  @media (max-width: 600px) {
    position: relative;
    flex-direction: row;
    right: 0;
    margin-top: 2rem;
  }
  a {
    display: block;
    margin-left: 1rem;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      margin-left: 1rem;
      :nth-child(1) {
        margin-left: 0rem;
      }
    }
  }

  svg path {
    fill: ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
  }
`;
