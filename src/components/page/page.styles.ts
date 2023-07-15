import styled from 'styled-components'

export const PageWrapper = styled.div`
  height: 300vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const PagesWrapper = styled.div`
  background-color: ${ props => props.theme.secondary };

  @media (min-width: 768px) {
    width: 50%;
    height: 100vh;
    overflow-y: hidden;
  }
`