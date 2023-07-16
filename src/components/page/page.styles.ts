import styled from 'styled-components'

/**
 * Pages
 */
export const PagesWrapper = styled.div`
  background-color: ${ props => props.theme.secondary };

  @media (min-width: 768px) {
    width: 50%;
    height: 100vh;
    overflow-y: hidden;
  }
`

/**
 * Page
 */
export const PageWrapper = styled.div`
  height: 100vh;
  padding: 38px;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const PageTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 38px;
  font-family: 'SF Mono'
  color: ${ props => props.theme.accent };
`