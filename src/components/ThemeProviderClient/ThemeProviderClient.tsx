"use client";

import React, { useState, useMemo, createContext, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme } from "@/theme";

type Mode = "light" | "dark";
type ThemeContextType = { mode: Mode; toggleMode: () => void };

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error("useThemeMode must be used within ThemeProviderClient");
  return ctx;
}

export default function ThemeProviderClient({
  children,
  initialMode = "light",
}: {
  children: React.ReactNode;
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const toggleMode = () => setMode((m) => (m === "light" ? "dark" : "light"));

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}