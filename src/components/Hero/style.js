import styled from 'styled-components';
import bg_hero from '../../Assets/bg_hero.jpg';

export const HeroStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.theme.mode === 'dark'
      ? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${bg_hero})`
      : `linear-gradient(rgba(200, 200, 200, 0.9), rgba(0, 0, 0, 0.7)), url(${bg_hero})`};
  /* background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), */
  background-size: cover;

  background-position: center center;
  padding-top: 5rem;
`;
