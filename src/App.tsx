import { HomeContainer } from "./pages/home/home.container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ClearTheme, DarkTheme } from "./theme/themes";
import { useState } from "react";

function App() {
  const [isClearTheme, setIsClearTheme] = useState(true);

  const toggleTheme = () => {
    setIsClearTheme((oldTheme) => !oldTheme);
  };

  return (
    <ThemeProvider theme={isClearTheme ? ClearTheme : DarkTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomeContainer toggleTheme={toggleTheme} />}
          />
          <Route path="/lala" element={<div>lala</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
