import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93,75%; //15px
    }
    @media (max-width: 720px) {
        font-size: 87,5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, imput, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6, strong {
      font-weight: 600;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-close {
    padding-left: 450px;
     position: absolute;
     right: -40px;
     top: -5px;
     /* padding-bottom: 20px; */
     border: 0;
     background: transparent;

     transition: filter 0.2s;

     &:hover {
        filter: brightness(0.8);
    }

  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: #F0F2F5;
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;

    textarea {
      width: 100%;
      min-height: 180px;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: none;
    }

   div {
     display: flex;
     justify-content: space-between;

      span {
        height: 35px;
        border-radius: 8px;
        font-weight: 500;
        background: #3498db;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
      }

    }

   h2 {
      color: #363f5f;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

   button {
     width: 100%;
     margin-top: 20px;
   }

  }
`
