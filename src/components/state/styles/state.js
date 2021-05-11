import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 24.5rem;
  width: 100%;
`;

export const Image = styled.img`
  margin-bottom: 4.7rem;
`;

export const Text = styled.p`
  font-size: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.omega};
  line-height: 1.4;
`;
