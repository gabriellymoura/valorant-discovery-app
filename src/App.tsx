import { HomeContainer } from "./pages/home/home.container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme/themes";
import { ThemeProviderCustom, useThemeCustom } from "./hook/theme-context";

function App() {
  const { isLightTheme } = useThemeCustom();

  return (
    <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/lala" element={<div>lala</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
