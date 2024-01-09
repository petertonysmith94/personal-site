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