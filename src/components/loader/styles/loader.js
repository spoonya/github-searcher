import styled, { createGlobalStyle } from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${({ theme }) => theme.psi};

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
`;

export const Spinner = styled.div`
  border: 10px solid ${({ theme }) => theme.beta};
  border-radius: 50%;
  border-top: 10px solid ${({ theme }) => theme.alpha};
  width: 12rem;
  height: 12rem;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;
