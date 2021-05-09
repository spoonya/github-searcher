import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 87.7rem;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 2.9rem;

  font-weight: 600;
  font-size: 3.2rem;
`;

export const Item = styled.div`
  padding: 2.4rem 3.2rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.beta};

  border-radius: 6px;
`;

export const Link = styled.a`
  margin-bottom: 1.6rem;

  font-weight: 500;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.alpha};
`;

export const Description = styled.p``;
