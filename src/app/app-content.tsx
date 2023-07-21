import { useTheme } from 'styled-components';
import { MarkdownPage, Pages } from '../components/page';
import { Socials } from '../components/socials';
import { socials } from '../config';
import { Divider, HeroImageWrapper, HeroWrapper, HomeWrapper, SocialsWrapper } from './app-content.styles';

export const AppContent = () => {
  const heroImageUrl = `${process.env.PUBLIC_URL}/logo192.png`
  const theme = useTheme();

  return (
    <HomeWrapper>
      <HeroWrapper>
        <HeroImageWrapper
          src={heroImageUrl}
        />
        <SocialsWrapper>
          <Socials
            socials={socials}
            color={theme.accent}
          />
        </SocialsWrapper>
      </HeroWrapper>

      <Divider />

      <Pages>
        <MarkdownPage children={`# Profile`} />
        <MarkdownPage children={`# Experience`} />
        <MarkdownPage children={`# Projects`} />
        <MarkdownPage children={`# Contact`} />
      </Pages>
    </HomeWrapper>
  );
}
