import { ThemeProvider } from "styled-components";
import { GlobalReset } from "./components/global-style";
import { Home } from "./pages/home/home";
import { createTheme } from "./theme/theme";

export const App = () => {
  const mode = 'dark';
  const theme = createTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <Home />
    </ThemeProvider >
  );
}