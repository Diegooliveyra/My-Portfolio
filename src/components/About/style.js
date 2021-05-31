import styled from 'styled-components';

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  flex-wrap: wrap;
  min-height: 100vh;
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 7rem 0;
  }
`;

export const AboutInfo = styled.div`
  max-width: 600px;
  flex: 1 1 300px;

  p {
    margin-top: 2rem;
    line-height: 1.4;
  }

  button {
    margin-top: 2rem;
  }
`;
export const AboutPhoto = styled.div`
  flex: 1 1 300px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  @media (max-width: 640px) {
    margin-top: 2rem;
    justify-content: center;
  }
`;
