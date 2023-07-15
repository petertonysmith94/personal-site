import { useTheme } from 'styled-components';
import { Page, Pages } from '../../components/page';
import { Socials } from '../../components/socials';
import { socials } from '../../config/socials';
import { Divider, HeroImageWrapper, HeroWrapper, HomeWrapper, SocialsWrapper } from './home.styles';

export const Home = () => {
  const heroImageUrl = `${process.env.PUBLIC_URL}/logo192.png`
  const theme = useTheme();

  return (
    <HomeWrapper>
      <HeroWrapper>
        <HeroImageWrapper src={heroImageUrl} />
        <SocialsWrapper>
          <Socials socials={socials} color={theme.accent} />
        </SocialsWrapper>
      </HeroWrapper>

      <Divider />

      <Pages>
        <Page title='Profile' />
        <Page title='Profile' />
        <Page title='Projects' />
      </Pages>
    </HomeWrapper>
  );
}
