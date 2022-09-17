import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProviderCustom } from "./hook/theme-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <App />
    </ThemeProviderCustom>
  </React.StrictMode>
);
