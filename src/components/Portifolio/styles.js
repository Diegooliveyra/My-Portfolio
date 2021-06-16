import styled from 'styled-components';

export const PortifolioWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 1rem;
  flex-wrap: wrap;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 6rem;
  }
  @media (min-height: 1200px) {
    min-height: 50vh;
  }
`;

export const PortifolioCards = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  color: #333;
`;

export const PortifolioCard = styled.div`
  width: 280px;
  min-height: 300px;
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 1px solid #b15063;
  color: #ddd;
  transition: transform 0.2s linear;

  :hover {
    transform: scale(1.01);
  }

  div {
    height: 210px;
  }

  h2 {
    font-weight: 700;
    margin: 0.8rem 0;
  }

  p {
    font-size: 0.8rem;
  }

  svg {
    margin-top: 1rem;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  svg path {
    fill: #ddd;
  }

  div {
    padding: 1rem;
  }
`;
