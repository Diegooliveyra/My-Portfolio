import styled from 'styled-components';

export const ContactWrapper = styled.section`
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
  }
  @media (min-height: 1200px) {
    min-height: 50vh;
  }
`;

export const ContactInfo = styled.div`
  max-width: 620px;
  flex: 1 1 300px;
`;

export const ContactForm = styled.div`
  max-width: 620px;
  flex: 1 1 300px;
`;
