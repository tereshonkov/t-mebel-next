// ThemeContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { PaletteMode } from "@mui/material";
import { createAppTheme } from "@/app//[locale]/admin/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextProps {
  mode: PaletteMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createAppTheme(mode);

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProviderWrapper");
  return context;
}
