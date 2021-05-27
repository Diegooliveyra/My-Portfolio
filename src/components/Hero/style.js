import styled from 'styled-components';
import bg_hero from '../../Assets/bg_hero.jpg';
import bg_hero_light from '../../Assets/bg_hero_light.jpg';

export const HeroStyled = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.theme.mode === 'dark'
      ? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${bg_hero})`
      : `linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 0.2)), url(${bg_hero_light})`};
  background-size: cover;
  background-position: center center;
  padding: 0 1rem;

  svg {
    width: 100%;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 300;
    text-align: center;
    color: ${(props) => (props.theme.mode === 'dark' ? `#FFF` : `#111`)};

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
`;
