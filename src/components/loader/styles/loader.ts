import styled from 'styled-components/macro';

type ContainerProps = {
  fullHeight?: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 8rem;
  ${({ fullHeight }: ContainerProps) => fullHeight && `top: 0;`}
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
