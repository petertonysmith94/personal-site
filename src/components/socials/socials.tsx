import styled, { useTheme } from 'styled-components';
import { Social } from '../../config/types';

/**
 * The socials links take an array of socials and renders them as links
 * 
 * @param {Object} props
 * @param {Array<Social>} props.socials
 * @param {Array<Social>} props.color
 * @returns {JSX.Element}
 */
export const Socials = ({
  socials,
}: {
  socials: Array<Social>,
  color: string,
}) => {
  const theme = useTheme()
  const dimensionContraint = '38px';
  return (
    <SocialsContainer>
      {
        socials.map(
          ({ name, icon: IconComponent, url }) => (
            <SocialLink key={name} href={url}>
              <IconComponent
                height={dimensionContraint}
                width={dimensionContraint}
                color={theme.primary}
              />
            </SocialLink>
          )
        )
      }
    </SocialsContainer>
  )
}

export const SocialsContainer = styled.div`
  display: flex;
`

export const SocialLink = styled.a`
  display: inline-block;
`