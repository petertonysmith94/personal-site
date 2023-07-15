import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home/home";
import { createTheme } from "./theme/theme";

export const App = () => {
  const mode = 'dark';
  const theme = createTheme(mode);

  return (
    <ThemeProvider theme={theme}>
     <Home />
    </ThemeProvider >
  );
}