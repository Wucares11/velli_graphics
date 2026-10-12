import { useTheme } from "../../context/ThemeContext";
import { SKILLS } from "../../data/skills";

export function Skills() {
  const t = useTheme();

  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        width: "100%",
        boxSizing: "border-box",
        scrollMarginTop: "80px",
        background: t.bg,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <p
          style={{
            color: t.accent,
            fontFamily: "monospace",
            fontSize: 13,
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          02 / SKILLS
        </p>
        <h2
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 800,
            color: t.text,
            lineHeight: 1.15,
            margin: "0 0 56px",
            letterSpacing: "-1px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          My design toolkit.
        </h2>
        <div className="responsive-grid-3">
          {SKILLS.map(({ category, icon: SkillIcon, items }) => (
            <div
              key={category}
              style={{
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: 18,
                padding: "28px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.accentBorder;
                e.currentTarget.style.boxShadow = t.cardShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <SkillIcon size={22} color={t.accent} strokeWidth={1.8} />
                <h3
                  style={{
                    color: t.accent,
                    fontFamily: "monospace",
                    fontSize: 13,
                    letterSpacing: 2,
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {category.toUpperCase()}
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {items.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: t.accent,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: t.textMuted, fontSize: 15 }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
