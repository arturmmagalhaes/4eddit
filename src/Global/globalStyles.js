import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
     -webkit-font-smoothing: antialiased;
     font-family: 'Lato', sans-serif;
    }

  button {
   cursor: pointer;
  }



  `;
