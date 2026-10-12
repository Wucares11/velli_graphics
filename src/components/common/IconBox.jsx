import { useTheme } from "../../context/ThemeContext";

export function IconBox({ Icon, size = 26, color }) {
  const t = useTheme();
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: t.accentBg,
        border: `1px solid ${t.accentBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
      }}
    >
      <Icon size={size} color={color || t.accent} strokeWidth={1.8} />
    </div>
  );
}

