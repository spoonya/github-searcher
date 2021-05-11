import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

    padding-right: 2.2rem;
    padding-left: 0;

    list-style: none;

    font-size: 14px;
    color:  ${({ theme }) => theme.omega};

    user-select: none;

    .active {
      color:  ${({ theme }) => theme.beta};
    }
  }

  .active {
    background-color:  ${({ theme }) => theme.alpha};
  }

  .pageBtnWrapper {
    &:not(:last-child) {
      margin-right: 16px;
    }

    border-radius: 3px;

    cursor: pointer;
  }

  .pageBtn {
    padding: 6px;
  }

  .break {
    display: flex;
    align-items: flex-end;

    padding-right: 16px;

    cursor: pointer;

    a {
      padding-bottom: 6px;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .nextBtn, .prevBtn {
    padding: 6px;
    vertical-align: middle;

    cursor: pointer;

    &:hover {
      filter: invert(26%) sepia(81%) saturate(5252%) hue-rotate(208deg) brightness(97%) contrast(101%);
    }
  }

  .prevBtn {
    margin-right: 16px;
  }

  .nextBtn, .prevBtn, .pageBtn {
    &:hover {
      text-decoration: none;
    }
  }

  .nextBtn::after, .prevBtn::after {
    display: inline-block;

    content: url('../images/repository/arrow.svg');

    width: 14px;
  }

  .prevBtn:after {
    transform: rotate(-180deg);
  }
`;

export default GlobalStyles;
