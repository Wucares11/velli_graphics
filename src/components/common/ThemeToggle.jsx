import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle({ isDark, onToggle }) {
  const t = useTheme();
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: 10,
        width: 42,
        height: 42,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s",
        flexShrink: 0,
      }}
    >
      {isDark ? (
        <Sun size={18} color={t.accent} />
      ) : (
        <Moon size={18} color={t.accent} />
      )}
    </button>
  );
}

