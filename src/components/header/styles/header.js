import styled from 'styled-components/macro';

export const Container = styled.header`
  padding: 1.6rem 5.6rem 1.6rem 4.1rem;

  background-color: ${({ theme }) => theme.alpha};
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
  max-height: 4rem;
`;

export const Icon = styled.img`
  position: absolute;

  top: 50%;
  left: 14px;

  transform: translateY(-50%);

  height: 1.4rem;
`;

export const InputContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 50rem;
`;

export const Input = styled.input`
  padding: 1.2rem 1.4rem 1.2rem 4.2rem;

  width: 100%;

  background-color: ${({ theme }) => theme.beta};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 5px;

  font-size: 1.4rem;
`;
