import { createGlobalStyle, css } from 'styled-components'


export const GlobalStyle = createGlobalStyle(({ theme }) => {
  console.log(theme)
  return css`
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
    }
    
    h1, h2, h3 {
      font-family: 'Roboto', sans-serif;
      color: ${ props => props.theme.accent };
      margin-bottom: 16px;
    }
    
    p {
      font-family: 'Verdana', sans-serif;
      color: ${theme.neutral1}; /* Adjust the color as needed */
      margin-bottom: 10px;
    }

    /** Fonts */
    body {
      font-size: 16px;
    }

    h1 {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      body {
        font-size: 14px;
      }

      h1 {
        font-size: 34px;
      }
    }

    @media (max-width: 480px) {
      body {
        font-size: 12px;
      }

      h1 {
        font-size: 30px;
      }
    }
  `
})