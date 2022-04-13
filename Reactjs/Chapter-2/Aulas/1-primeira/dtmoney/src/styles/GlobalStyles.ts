import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @media(max-width:1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width:720px){
    html {
      font-size:83.5%;
    }
  }

  :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape:#FFFFFF;
        --green: #33CC95;
    }

    body{
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body , input , button , select, textarea {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }    

    h1, h2, h3, h4, h5, h6, strong{
      font-weight: 600;
    }

    a{
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
    }

    button{
      cursor: pointer;
    }

    [disabled]{
      opacity:0.6;
      cursor: not-allowed;
    }
`;
