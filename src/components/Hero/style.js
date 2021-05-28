import styled from 'styled-components';
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

  margin-top: -7rem;
  svg {
    width: 100%;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.85;
    font-weight: 300;
    text-align: center;
    color: ${(props) => (props.theme.mode === 'dark' ? `#FFF` : `#111`)};

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
`;
