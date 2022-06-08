import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {    
    --black: #282a36;
    --blue: #8be9fd;
    --blueDark: #2e384e;
    --gray: #bfbfbf;
    --green: #50fa7b;
    --pink: #ff80bf;
    --purple: #bd93f9;
    --red: #ff5555;
    --white: #F8F8F2;
    --yellow: #f1fa8c;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gemunu Libre', sans-serif;
    color: var(--white);
  }
  
  html {
    overflow-x: hidden;
  }

  body {
    background-color: #111;
    -webkit-font-smoothing: antialiased;
  }

  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #111;
  }

  input, select {
    padding: 5px;
    display: flex;
    min-width: 20%;
    max-width: 80%;
    border: 3px solid var(--purple);
    border-radius: 5px;
    outline: none;
    color: var(--black);
    font-size: 1.1rem;

    &:active, &:hover, &:focus {
      transition: 1s;
      border-color: var(--pink);  
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .animationLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animationShow 0.7s forwards; 
  }

  .animationRight {
    opacity: 0;
    transform: translateX(20px);
    animation: animationShow 0.7s forwards; 
  }

  .animationDown {
    opacity: 0;
    transform: translateY(-20px);
    animation: animationShow 0.5s forwards; 
  }

  .animationUp {
    opacity: 0;
    transform: translateY(20px);
    animation: animationShow 0.5s forwards; 
  }

  .animationShow {
    opacity: 0;
    animation: animationShow 0.5s forwards; 
  }

  @keyframes animationShow {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #0005;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--pink);
  }
`;
