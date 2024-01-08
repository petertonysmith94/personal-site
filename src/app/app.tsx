import { ThemeProvider, useTheme } from "styled-components";
import { GlobalReset, GlobalStyle } from "../components/global-style";
import { createTheme } from "../theme/theme";
import { Pages, MarkdownPage } from "../components/page";
import { Socials } from "../components/socials";
import { config } from "../config";
import { HomeWrapper, HeroWrapper, Divider, SocialsWrapper } from "./app-content.styles";

const AppContent = () => {
  const theme = useTheme();

  const { logo: Logo, socials } = config;

  return (
    <HomeWrapper>
      <HeroWrapper>
        <Logo color={theme.accent} />
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