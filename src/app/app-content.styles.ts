import styled from 'styled-components';

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

/**
 * Pages
 */
export const Pages = styled.div`
  background-color: ${ props => props.theme.secondary };

  @media (min-width: 768px) {
    width: 62.92%;
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
