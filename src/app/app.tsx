import { ThemeProvider } from "styled-components";
import { GlobalReset, GlobalStyle } from "../components/global-style";
import { createTheme } from "../theme/theme";
import { AppContent } from "./app-content";

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