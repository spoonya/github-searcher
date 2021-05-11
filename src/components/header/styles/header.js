import styled from 'styled-components/macro';

export const Container = styled.header`
  padding: 1.6rem 0;

  background-color: ${({ theme }) => theme.alpha};
`;

export const Inner = styled.div`
  max-width: 100%;
  width: 1315px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const GroupLeft = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 2.2rem;
  }
`;

export const Logo = styled.img`
  vertical-align: middle;
  max-width: 40px;
`;

export const Icon = styled.img`
  position: absolute;

  top: 50%;
  left: 14px;

  transform: translateY(-50%);

  height: 1.4rem;
`;

export const Form = styled.form`
  position: relative;

  max-width: 50rem;
  width: 100%;
`;

export const Input = styled.input`
  padding: 1.2rem 1.4rem 1.2rem 4.2rem;

  width: 100%;

  background-color: ${({ theme }) => theme.beta};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 6px;

  font-size: 14px;
`;
