import { HomeContainer } from "./pages/home/home.container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme/themes";
import { ThemeProviderCustom, useThemeCustom } from "./hook/theme-context";
import { SelectAgentContainer } from "./pages/select-agent/select-agent.component";

function App() {
  const { isLightTheme } = useThemeCustom();

  return (
    <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/agents" element={<SelectAgentContainer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  :root{   
    background-color: ${({ theme }) => theme.background};
    transition: background-color 0.5s ease;
  }
`;

export default App;
