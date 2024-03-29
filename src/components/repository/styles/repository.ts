import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 87.7rem;
  width: 100%;

  @media only screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Inner = styled.div`
  position: relative;
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

  color: ${({ theme }) => theme.link};
  font-weight: 500;
  font-size: 2.4rem;
`;

export const Description = styled.p``;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const PaginationRange = styled.div`
  color: ${({ theme }) => theme.omega};
  font-size: 14px;

  margin-right: 16px;

  @media only screen and (max-width: 575px) {
    margin-right: 0;
    order: 1;
  }
`;
