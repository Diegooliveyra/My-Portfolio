import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  flex-wrap: wrap;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 4rem 0;
  }
  @media (min-height: 1200px) {
    min-height: 50vh;
  }
`;

export const SkillInfo = styled.div`
  max-width: 620px;
  flex: 1 1 300px;

  p {
    margin-top: 3rem;
    line-height: 1.4;
  }

  button {
    margin-top: 2rem;
  }
`;

export const SkillLogo = styled.div`
  flex: 1 1 300px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  svg > * {
    fill: ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    justify-content: center;

    svg {
      width: 100%;
    }
  }
`;
