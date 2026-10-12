import { Calendar, GraduationCap, Globe, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { IconBox } from "../common/IconBox";

export function About() {
  const t = useTheme();

  const aboutCards = [
    {
      Icon: Calendar,
      title: "Years of Experience",
      sub: "3+ years delivering creative designs",
    },
    {
      Icon: GraduationCap,
      title: "Creative Expertise",
      sub: "Specialized in brand identity & posters",
    },
    {
      Icon: Globe,
      title: "Global Reach",
      sub: "Working with clients worldwide",
    },
    {
      Icon: Zap,
      title: "Fast Turnaround",
      sub: "Quality delivery on tight deadlines",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        width: "100%",
        boxSizing: "border-box",
        scrollMarginTop: "80px",
        background: t.bgAlt,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="responsive-grid-2">
          <div>
            <p
              style={{
                color: t.accent,
                fontFamily: "monospace",
                fontSize: 13,
                letterSpacing: 2,
                marginBottom: 12,
              }}
            >
              01 / ABOUT
            </p>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 800,
                color: t.text,
                lineHeight: 1.15,
                margin: "0 0 24px",
                letterSpacing: "-1px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Digital experiences and visual designs that speak for your brand.
            </h2>
            <p
              style={{
                color: t.textMuted,
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              I am a passionate UI/UX and graphic designer dedicated to crafting intuitive user interfaces and powerful visual identities. Every project is crafted with a deep focus on user experience, color, composition, and messaging.
            </p>
            <p
              style={{
                color: t.textMuted,
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              From seamless app layouts to striking brand graphics, I help businesses stand out with products that are both beautiful to look at and effortless to use.
            </p>
          </div>

          <div className="responsive-grid-cards">
            {aboutCards.map(({ Icon, title, sub }) => (
              <div
                key={title}
                style={{
                  background: t.surface,
                  border: `1px solid ${t.border}`,
                  borderRadius: 14,
                  padding: "22px",
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
                <IconBox Icon={Icon} />
                <div
                  style={{
                    color: t.text,
                    fontWeight: 600,
                    fontSize: 14,
                    marginBottom: 4,
                  }}
                >
                  {title}
                </div>
                <div style={{ color: t.textFaint, fontSize: 13 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
