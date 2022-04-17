import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape:#FFFFFF;
    }

  @media(max-width:1080px){
    html{
      font-size:93.75%
    }
  }
  @media(max-width:720px){
    html{
      font-size: 83.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, button, textarea {
    font-family: "Poppins" , sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Modal */

  .react-modal-container{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    max-width: 576px;
    width: 100%;
    background: var(--background);
    padding: 3rem;
    border-radius: 0.25rem;
    position: relative;
  }
  .closeButton {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: none;

    transition: filter .2s;

    &:hover{
      filter: brightness(0.3);
    }
  }
`;
