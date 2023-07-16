import { useTheme } from 'styled-components';
import { Page, Pages } from '../../components/page';
import { Socials } from '../../components/socials';
import { socials } from '../../config/socials';
import { Profile } from '../profile';
import { Divider, HeroImageWrapper, HeroWrapper, HomeWrapper, SocialsWrapper } from './home.styles';

export const Home = () => {
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
        <Page title='Profile' component={Profile} />
        <Page title='Experience' component={Profile}  />
        <Page title='Projects' component={Profile}  />
        <Page title='Contact' component={Profile}  />
      </Pages>
    </HomeWrapper>
  );
}
