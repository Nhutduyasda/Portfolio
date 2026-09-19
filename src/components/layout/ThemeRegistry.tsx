"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkMuiTheme } from "@/lib/mui-theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkMuiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
