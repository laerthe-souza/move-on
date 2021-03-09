import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5d;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;

    font-size: 60%;
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    background: 0;
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
