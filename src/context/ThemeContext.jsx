import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const themes = {
  dark: {
    bg: "#0D0D12",
    bgAlt: "#13131A",
    surface: "#1A1A24",
    surfaceHover: "#22222E",
    cardImageBg: "#08080C",
    text: "#E8E6F0",
    textMuted: "rgba(232,230,240,0.65)",
    textFaint: "rgba(232,230,240,0.4)",
    accent: "#C084FC",
    accentLight: "#D8B4FE",
    accentBg: "rgba(192,132,252,0.12)",
    accentBorder: "rgba(192,132,252,0.3)",
    border: "rgba(255,255,255,0.08)",
    navBg: "rgba(13,13,18,0.92)",
    inputBg: "#1A1A24",
    cardShadow: "0 8px 30px rgba(0,0,0,0.4)",
  },
  light: {
    bg: "#FAFAFA",
    bgAlt: "#F3F1F8",
    surface: "#FFFFFF",
    surfaceHover: "#F5F3FA",
    cardImageBg: "#EBE7F3",
    text: "#1A1025",
    textMuted: "rgba(26,16,37,0.7)",
    textFaint: "rgba(26,16,37,0.45)",
    accent: "#9333EA",
    accentLight: "#A855F7",
    accentBg: "rgba(147,51,234,0.08)",
    accentBorder: "rgba(147,51,234,0.22)",
    border: "rgba(0,0,0,0.08)",
    navBg: "rgba(250,250,250,0.92)",
    inputBg: "#F3F1F8",
    cardShadow: "0 8px 30px rgba(0,0,0,0.08)",
  },
};

