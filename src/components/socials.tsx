import styled from 'styled-components'

export type Social = {
  name: string,
  url: string,
  iconUrl: string
}

export const Socials = (socials: Array<Social>) => {
  const SocialIcon = ({ url, iconUrl, name }: Social) => {
    return (
      <SocialLink href={url} target="_blank" rel="noreferrer">
        <SocialImage src={iconUrl} alt={name.toLowerCase()} />
      </SocialLink>
    )
  }

  return (
    <SocialsContainer>
      { socials.map(social => <SocialIcon key={social.name} {...social} />) }
    </SocialsContainer>
  )
}

export const SocialsContainer = styled.div`
  display: flex;
`

export const SocialLink = styled.a`
  display: inline-block;
`

export const SocialImage = styled.img`

`