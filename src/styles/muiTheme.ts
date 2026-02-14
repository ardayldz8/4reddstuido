import { createTheme } from "@mui/material";

export const reddTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff4d4f" },
    secondary: { main: "#22c55e" },
    background: { default: "#060607", paper: "#0f1012" },
    text: { primary: "#f6f7fb", secondary: "rgba(246,247,251,0.72)" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "var(--font-outfit), sans-serif",
    h1: { fontWeight: 700, letterSpacing: -0.8 },
    h2: { fontWeight: 650, letterSpacing: -0.3 },
    h3: { fontWeight: 620, letterSpacing: -0.15 },
  },
});
