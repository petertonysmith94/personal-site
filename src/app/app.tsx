import { ThemeProvider, useTheme } from "styled-components";
import { GlobalReset, GlobalStyle } from "../components/global-style";
import { createTheme } from "../theme/theme";
import { Socials } from "../components/socials";
import { config } from "../config";
import { HomeWrapper, HeroWrapper, Divider, SocialsWrapper, H1, P, Pages, Page } from "./app-content.styles";
import Profile from '../pages/profile.md'
import Experience from '../pages/experience.md'
import Projects from '../pages/projects.md'
import Contact from '../pages/contact.md'
import ReactMarkdown from "react-markdown";

const MarkdownPage = ({ children }: { children: string }) => (
  <Page>
    <ReactMarkdown
      children={children}
      components={{
        h1: ({ node, ...props }) => <H1 {...props} />,
        p: ({ node, ...props }) => <P {...props} />,
      }}
    />
  </Page>
)

const AppContent = () => {
  const theme = useTheme();

  const { logo: Logo, socials } = config;

  return (
    <HomeWrapper>
      <HeroWrapper>
        <Logo
          width={250}
          height={250}
          color={theme.accent}
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
        <MarkdownPage children={Profile} />
        <MarkdownPage children={Experience} />
        <MarkdownPage children={Projects} />
        <MarkdownPage children={Contact} />
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