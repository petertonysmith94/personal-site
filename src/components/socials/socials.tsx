import { useMemo } from 'react';
import styled from 'styled-components';
import { Social } from '../../types';

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
  color,
}: {
  socials: Array<Social>,
  color?: string | undefined,
}) => {
  const dimensionContraint = '38px';
  const resolvedColor = useMemo(() => color ?? 'white', [color])
  
  return (
    <SocialsContainer>
      {
        socials.map(
          ({ name, icon: IconComponent, url }) => (
            <SocialLink key={name} href={url} style={{ maxHeight: dimensionContraint }}>
              <IconComponent
                height={dimensionContraint}
                width={dimensionContraint}
                color={resolvedColor}
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
  padding: 8px;

  &:hover {
    transform: scale(1);
    opacity: 0.7;
  }
`