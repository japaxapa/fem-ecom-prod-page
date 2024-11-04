import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: `"Kumbh Sans", "serif"`,
  },
  palette: {
    primaryOrange: {
      main: "#FF7D1A",
      light: "#FF7D1A",
      dark: "#FF7D1A",
      contrastText: "#000",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
