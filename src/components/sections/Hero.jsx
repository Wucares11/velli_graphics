import { Palette, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import logoImg from "../../assets/logo.jpg";

const TYPING_WORDS = [
  "Graphic Designer.",
  "Brand Strategist.",
  "Visual Artist.",
  "Creative Visionary.",
  "UI/UX Designer.",
];

export function Hero() {
  const t = useTheme();
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section
      id="hero"
      className="hero-padding"
      style={{
        width: "100%",
        boxSizing: "border-box",
        scrollMarginTop: "80px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: t.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "min(500px, 60vw)",
          height: "min(500px, 60vw)",
          background: `radial-gradient(circle, ${t.accentBg} 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="responsive-grid-2">
          {/* Left – copy */}
          <div>
            <p
              style={{
                color: t.accent,
                fontFamily: "monospace",
                fontSize: 14,
                marginBottom: 18,
                letterSpacing: 2,
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 600,
              }}
            >
              <Palette size={18} /> Creative UI/UX & Visual Designer Studio
            </p>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
                fontWeight: 900,
                color: t.text,
                lineHeight: 1.08,
                margin: "0 0 16px",
                letterSpacing: "-2px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              VELLIGRAPHICS
            </h1>
            <div
              style={{
                minHeight: 52,
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.2rem, 3.2vw, 2.1rem)",
                  fontWeight: 600,
                  color: t.accent,
                  fontFamily: "monospace",
                  wordBreak: "break-word",
                }}
              >
                {typed}
                <span
                  style={{
                    animation: "blink 1s step-end infinite",
                    borderRight: `3px solid ${t.accent}`,
                    paddingLeft: 2,
                  }}
                />
              </span>
            </div>
            <p
              style={{
                color: t.textMuted,
                fontSize: 17,
                maxWidth: 520,
                lineHeight: 1.7,
                margin: "0 0 36px",
              }}
            >
              Translating complex user needs into elegant, visually engaging interfaces, UX strategy, UI design, brand identity, and premium graphic design.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: t.accent,
                  color: "#fff",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = t.accentLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = t.accent)
                }
              >
                View Selected Work <ChevronRight size={16} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "transparent",
                  color: t.text,
                  border: `1px solid ${t.border}`,
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.borderColor = t.accentBorder)
                }
                onMouseLeave={(e) => (e.target.style.borderColor = t.border)}
              >
                Get in touch
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: 28,
                marginTop: 48,
                paddingTop: 32,
                borderTop: `1px solid ${t.border}`,
                flexWrap: "wrap",
              }}
            >
              {[
                ["3+", "Years Experience"],
                ["50+", "Projects Delivered"],
                ["20+", "Happy Clients"],
              ].map(([num, label]) => (
                <div key={label} style={{ minWidth: 100 }}>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      color: t.accent,
                      fontFamily: "monospace",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{ fontSize: 13, color: t.textFaint, marginTop: 2 }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – hero image Showcase */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 440,
                aspectRatio: "4/5",
                borderRadius: 24,
                overflow: "hidden",
                border: `2px solid ${t.accentBorder}`,
                boxShadow: `0 20px 60px ${t.accent}22`,
                background: t.surface,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=750&fit=crop&q=80"
                alt="Creative graphic design workspace"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            {/* Floating badge (kept inside container bounds) */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 16,
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                padding: "12px 18px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: t.cardShadow,
                maxWidth: "calc(100% - 32px)",
              }}
            >
              <img
                src={logoImg}
                alt="VG"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `1px solid ${t.accent}`,
                  flexShrink: 0,
                }}
              />
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    color: t.text,
                    fontWeight: 700,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  VELLIGRAPHICS
                </div>
                <div style={{ color: t.textFaint, fontSize: 11, whiteSpace: "nowrap" }}>
                  Brand • UI/UX • Motion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes blink { 50% { border-color: transparent; } }`}</style>
    </section>
  );
}
