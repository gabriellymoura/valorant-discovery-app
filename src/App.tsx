import { HomeContainer } from "./pages/home/home.container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme/themes";
import { useState } from "react";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const changeTheme = () => {
    setIsLightTheme((oldTheme) => !oldTheme);
  };

  return (
    <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeContainer
                isLightTheme={isLightTheme}
                changeTheme={changeTheme}
              />
            }
          />
          <Route path="/lala" element={<div>lala</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
