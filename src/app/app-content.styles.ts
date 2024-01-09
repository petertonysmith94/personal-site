import styled, { createGlobalStyle, css } from 'styled-components';

// prettier-ignore
const reset = css`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`

export const GlobalReset = createGlobalStyle`${reset}`

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

export const Divider = styled.hr`
  border: 3px double ${props => props.theme.accent};
  margin: 0;
`

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  justify-content: space-around;
  align-items: center;
  background-color: ${ props => props.theme.primary };

  @media (min-width: 768px) {
    width: 37.08%;
    height: auto;
  }
`

export const SocialsWrapper = styled.div`
  display: flex;
  margin: 4px;
`

export const Pages = styled.div`
  background-color: ${ props => props.theme.secondary };

  @media (min-width: 768px) {
    width: 62.92%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
  }
`

export const Page = styled.div`
  padding: 0 38px 0 38px;
`