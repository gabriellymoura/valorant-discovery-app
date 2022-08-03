import { HomeContainer } from "./pages/home/home.container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/lala" element={<div>lala</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
