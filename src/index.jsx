import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import Home from "./templates/App/Home";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
