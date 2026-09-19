"use client";

import { createTheme } from "@mui/material/styles";

export const darkMuiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
    },
    secondary: {
      main: "#22D3EE",
      light: "#67E8F9",
      dark: "#0891B2",
    },
    background: {
      default: "#050505",
      paper: "#0B0D10",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(11, 13, 16, 0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          color: "#F8FAFC",
          backgroundImage: "none",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(124, 58, 237, 0.2)",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(15, 18, 25, 0.95)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          color: "#F8FAFC",
          fontSize: "0.75rem",
          borderRadius: "8px",
          padding: "8px 12px",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
        },
        arrow: {
          color: "rgba(15, 18, 25, 0.95)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(8, 10, 13, 0.95)",
          backdropFilter: "blur(24px)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#F8FAFC",
          backgroundImage: "none",
        },
      },
    },
  },
});
