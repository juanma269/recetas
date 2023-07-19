import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#cc750d",
    },
    secondary: {
      main: "#eab01f",
    },
    success: {
      main: "#add49b",
    },
    info: {
      main: "#c3e6df",
    },
    error: {
      main: "#f59597",
    },
    background: {
      default: "#12121c",
      paper: "#2d2636",
    },
    warning: {
      main: "#fbf5ab",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
