import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;

  min-height: 89vh;
  width: 128.4rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 1.5rem 2.8rem;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
