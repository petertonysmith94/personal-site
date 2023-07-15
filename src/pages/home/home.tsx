import { Page } from '../../components/page';
import { Socials } from '../../components/socials';
import { socials } from '../../config/socials';
import { Divider, HeroImageWrapper, HeroWrapper, HomeWrapper, PagesWrapper, SocialsWrapper } from './home.styles';

export const Home = () => {
  return (
    <HomeWrapper>
      <HeroWrapper>
        <HeroImageWrapper src='%PUBLIC_URL%/logo192.png'/>
        <SocialsWrapper>
          <Socials socials={socials} color='white' />
        </SocialsWrapper>
      </HeroWrapper>

      <Divider />

      <PagesWrapper>
        <Page title='Profile' />
        <Page title='Profile' />
        <Page title='Projects' />
      </PagesWrapper>
    </HomeWrapper>
  );
}
