import { createGlobalStyle } from 'styled-components';
import { constraints } from './helpers/breakpoints';

export default createGlobalStyle`
/*reset css and apply some global styles*/
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  *:focus{
    outline: 0;
  }
  html {
    font-size: 62.5%; /* 1rem = 10px */
    @media ${constraints.xl()} {
      font-size: 58%;
    }
    @media ${constraints.md()} {
      font-size: 54%;
    }
    @media ${constraints.sm()} {
      font-size: 45%;
    }
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important; /* reinforce antialiased style of fonts*/
  }
  body, input, button, a {
    color: #363636;
    font-size: 2rem;
    font: 14px 'Roboto', sans-serif;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;
