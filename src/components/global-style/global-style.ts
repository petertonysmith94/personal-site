import { createGlobalStyle, css } from 'styled-components'


export const GlobalStyle = createGlobalStyle(({ theme }) => {
  return css`
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      min-width: 320px;
    }
    
    h1, h2, h3 {
      font-family: 'Verdana', sans-serif;
      color: ${ props => props.theme.accent };
      margin-bottom: 16px;
    }

    h1 {
      font-size: 48px;
      margin-top: 18px;
      margin-bottom: 18px;
    }

    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 20px;
    }

    ul, li {
      font-family: 'Verdana', sans-serif;
      color: ${theme.neutral1}; /* Adjust the color as needed */
    }

    li {
      list-style: square;
      margin-left: 20px;
      margin-bottom: 20px;
    }

    a {
      color: ${theme.accent};
    }

    p {
      font-family: 'Verdana', sans-serif;
      color: ${ props => props.theme.neutral1 };
      margin-bottom: 18px;
    }

    /**
     * Media | Desktop
     */
    @media (max-width: 768px) {
      h1, h2, h3 {
        margin-bottom: 12px;
      }

      h1 {
        font-size: 40px;
      }
    }

    /**
     * Media | Mobile
     */
    @media (max-width: 480px) {
      h1, h2, h3 {
        margin-bottom: 8px;
      }

      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 24px;
      }
  `
})