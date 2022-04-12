import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }


    body {
      background-color: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body , input , textarea, button {
      font-family: "Poppins" , sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 , strong{
      font-weight: 600;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Modal */

    .react-modal-container{
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    .react-modal-content{
      max-width: 576px;
      width: 100%;
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
    }

    .close-icon {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: transparent;
      border: 0;
      transition: filter .2s;

      &:hover{
        filter: brightness(0.2);
      }
    }

/* MEDIA */

    @media(max-width:1080px){
      html{
        font-size: 93.75%;
      }
    }
    @media(max-width: 720px){
      html{
        font-size: 87.5%;
      }
    }
`;
