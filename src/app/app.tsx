import { ThemeProvider, useTheme } from "styled-components";
import { createTheme } from "../theme/theme";
import { config } from "../config";
import { HomeWrapper, Divider, SocialsWrapper, Pages, GlobalReset, GlobalStyle, HeroWrapper, PageDivider, Page, HeroContent } from "./app-content.styles";
import { useMemo } from "react";
import { Socials } from "./socials.component";

const AppContent = () => {
  const theme = useTheme();

  const { logo: Logo, socials, pages } = config;

  // Render the pages 
  const RenderablePages = () => pages.map((page, index, pages) => (
    <>
      <Page>
        { page() }
      </Page>

      { index === pages.length - 1 ? null : <PageDivider /> }
    </>
  ))
  const RenderedPages = useMemo(RenderablePages, [pages]);


  return (
    <HomeWrapper>
      <HeroWrapper>
        <HeroContent>
          <Logo
            width={250}
            height={250}
            color={theme.accent}
          />
          <SocialsWrapper>
            <Socials socials={socials} color={theme.accent} size={'38px'} />
          </SocialsWrapper>
        </HeroContent>
      </HeroWrapper>

      <Divider />

      <Pages>
        { RenderedPages }
      </Pages>
    </HomeWrapper>
  );
}
  
export const App = () => {
  const mode = 'dark';
  const theme = createTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <GlobalStyle />
      
      <AppContent />
    </ThemeProvider >
  );
}