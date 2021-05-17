import { createGlobalStyle } from 'styled-components';
import ThemeTypes from './types/theme.type';

type Props = {
  theme: ThemeTypes;
};

const GlobalStyles = createGlobalStyle<Props>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media only screen and (max-width: 1199px) {
      font-size: 55%;
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.psi};
    color: ${({ theme }) => theme.gamma};
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  input {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  input[type='button'] {
    padding: 0;
    cursor: pointer;
  }

  button {
    font: inherit;
    padding: 0;
    cursor: pointer;
    color: inherit;
    border: none;
    outline: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  /*React-paginate*/
  .pagination {
    display: flex;
    align-items: center;

    padding-right: 2.2rem;
    padding-left: 0;

    list-style: none;

    font-size: 14px;
    color:  ${({ theme }) => theme.omega};

    user-select: none;

    .active {
      color:  ${({ theme }) => theme.beta};
    }

    @media only screen and (max-width: 991px) {
      padding-right: 0;
    }
  }

  .active {
    background-color:  ${({ theme }) => theme.alpha};
  }

  .pageBtnWrapper {
    &:not(:last-child) {
      margin-right: 1.6rem;
    }

    border-radius: 3px;

    cursor: pointer;
  }

  .pageBtn {
    padding: .6rem;
  }

  .break {
    display: flex;
    align-items: flex-end;

    padding-right: 1.6rem;

    cursor: pointer;

    a {
      padding-bottom: 6px;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .nextBtn, .prevBtn {
    padding: 0 .6rem;
    vertical-align: middle;

    cursor: pointer;

    &:hover {
      filter: invert(26%) sepia(81%) saturate(5252%) hue-rotate(208deg) brightness(97%) contrast(101%);
    }
  }

  .prevBtn {
    margin-right: 1.3rem;
  }

  .nextBtn, .prevBtn, .pageBtn {
    &:hover {
      text-decoration: none;
    }
  }

  .nextBtn::after, .prevBtn::after {
    display: inline-block;

    width: 14px;
  }

  .nextBtn::after {
      content: url('../images/repository/arrow-next.svg');

  }

  .prevBtn:after {
    content: url('../images/repository/arrow-prev.svg');
  }
`;

export default GlobalStyles;
