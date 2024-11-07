import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { CartProvider } from "./context/cart.context.tsx";

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
      contrastText: "#FFF",
    },
    primaryOrangePale: {
      main: "#FFEDE0",
      light: "#FFEDE0",
      dark: "#FFEDE0",
      contrastText: "#000",
    },
    neutralBlueVD: {
      main: "#1D2025",
      light: "#1D2025",
      dark: "#1D2025",
      contrastText: "#FFF",
    },
    neutralBlueDG: {
      main: "#68707D",
      light: "#68707D",
      dark: "#68707D",
      contrastText: "#FFF",
    },
    neutralBlueG: {
      main: "#B6BCC8",
      light: "#B6BCC8",
      dark: "#B6BCC8",
      contrastText: "#FFF",
    },
    neutralBlueLG: {
      main: "#F7F8FD",
      light: "#F7F8FD",
      dark: "#F7F8FD",
      contrastText: "#FFF",
    },
    neutralBlack: {
      main: "#000000bf",
      light: "#000000bf",
      dark: "#000000bf",
      contrastText: "#FFF",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
