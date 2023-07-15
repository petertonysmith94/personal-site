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
    width: 50%;
    height: 100vh;
  }
`

export const HeroImageWrapper = styled.img`
  width: 200px;
  height: 200px;
`

export const SocialsWrapper = styled.div`
  display: flex;
  margin: 4px;
`