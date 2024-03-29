import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 43%;

  @media only screen and (max-width: 991px) {
    width: 60%;
  }

  @media only screen and (max-width: 767px) {
    align-items: center;

    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const Image = styled.img`
  max-width: 28rem;
  margin-bottom: 2.8rem;

  border-radius: 50%;

  @media only screen and (max-width: 767px) {
    max-width: 20rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`;

export const Name = styled.p`
  max-width: 30rem;
  width: 100%;

  margin-bottom: 1.2rem;

  font-weight: 600;
  font-size: 2.6rem;
`;

export const Link = styled.a`
  margin-bottom: 4rem;

  color: ${({ theme }) => theme.link};
  font-size: 1.8rem;
`;

export const Group = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

export const Icon = styled.img`
  height: 16px;

  margin-right: 9px;
`;
