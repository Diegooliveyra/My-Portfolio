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

  h1 {
    margin-bottom: 7rem;

    @media (max-width: 640px) {
      margin-bottom: 1rem;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;

      :nth-child(2) {
        padding: 0 1rem;
      }
    }

    svg > * {
      fill: ${({ theme }) =>
        theme.mode === 'dark' ? '#FFF' : 'var(--dark-color)'};
    }

    svg {
      max-width: 100%;
    }
  }
`;
