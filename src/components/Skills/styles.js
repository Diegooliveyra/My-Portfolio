import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  flex-wrap: wrap;
  min-height: 100vh;
`;

export const SkillStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.62rem;
  flex-wrap: wrap;
  margin-top: 6rem;
  div {
    width: 175px;
    height: 175px;
    background-color: var(--primary-color);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    transition: 0.3s ease;
    cursor: pointer;

    img {
      transition: transform 0.5s ease;
    }
    :hover {
      background-color: #bb4a5c;
    }

    :hover img {
      transform: scale(1.1);
    }
  }
`;
