import styled from 'styled-components'

/**
 * Pages
 */
export const PagesWrapper = styled.div`
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
export const PageWrapper = styled.div`
  height: 50vh;
  padding: 38px;

  @media (min-width: 768px) {
    height: calc(100vh - 100px);
  }
`

export const PageTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 38px;
  font-family: 'Roboto', sans-serif;
  color: ${ props => props.theme.accent };
`

export const ChildrenWrapper = styled.div`

`

export const StepperWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

