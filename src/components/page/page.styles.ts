import styled from 'styled-components'

/**
 * Pages
 */
export const Pages = styled.div`
  background-color: ${ props => props.theme.secondary };

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
  }
`

/**
 * Page
 */
export const Page = styled.div`
  padding: 38px;
`

export const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: ${ props => props.theme.accent };

  font-size: 38px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 34px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 8px;
  }
`

export const P = styled.p`
  font-family: 'Verdana', sans-serif;
  color: ${ props => props.theme.neutral1 };
  font-size: 16px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`

