import { ArrowUpRight, Play, Video } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../data/projects";

export function Projects() {
  const t = useTheme();

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        boxSizing: "border-box",
        scrollMarginTop: "80px",
        background: t.bgAlt,
        padding: "100px 2rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            color: t.accent,
            fontFamily: "monospace",
            fontSize: 13,
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          03 / PROJECTS
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: t.text,
            lineHeight: 1.1,
            margin: "0 0 56px",
            letterSpacing: "-1px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Selected work.
        </h2>
        <div className="responsive-grid-3">
          {PROJECTS.map((p, idx) => (
            <div
              key={p.title + idx}
              style={{
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: 20,
                overflow: "hidden",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                boxShadow: t.cardShadow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.accentBorder;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${t.accent}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.border;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = t.cardShadow;
              }}
            >
              {/* Media Container: Supports both Video and Image */}
              <div
                style={{
                  width: "100%",
                  height: 360,
                  background: t.cardImageBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: 16,
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                {/* Media Type Badge */}
                {p.isVideo && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      color: t.accent,
                      border: `1px solid ${t.accentBorder}`,
                      padding: "3px 8px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                  >
                    <Video size={12} color={t.accent} /> VIDEO
                  </span>
                )}

                {p.isVideo ? (
                  p.video ? (
                    <video
                      src={p.video}
                      controls
                      playsInline
                      preload="metadata"
                      style={{
                        width: "100%",
                        height: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        borderRadius: 10,
                        background: "#000",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                      }}
                    />
                  ) : (
                    /* Video Placeholder Space */
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `radial-gradient(circle, ${t.accentBg} 0%, transparent 80%)`,
                        border: `1px dashed ${t.accentBorder}`,
                        borderRadius: 12,
                        padding: "20px",
                        textAlign: "center",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          width: 58,
                          height: 58,
                          borderRadius: "50%",
                          background: t.accentBg,
                          border: `2px solid ${t.accent}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 14,
                          boxShadow: `0 0 20px ${t.accent}30`,
                        }}
                      >
                        <Play
                          size={26}
                          color={t.accent}
                          fill={t.accent}
                          style={{ marginLeft: 3 }}
                        />
                      </div>
                      <div
                        style={{
                          color: t.text,
                          fontWeight: 700,
                          fontSize: 14,
                          marginBottom: 6,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <Video size={16} color={t.accent} />
                        Video Space Reserved
                      </div>
                      <p
                        style={{
                          color: t.textFaint,
                          fontSize: 12,
                          lineHeight: 1.5,
                          maxWidth: 200,
                          margin: 0,
                        }}
                      >
                        Drop your video file into projects.js when ready
                      </p>
                    </div>
                  )
                ) : (
                  /* Standard Image Project */
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: 10,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                      transition: "transform 0.4s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                )}
              </div>

              {/* Project info */}
              <div
                style={{
                  padding: "24px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                    }}
                  >
                    <h3
                      style={{
                        color: t.text,
                        fontSize: 18,
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      {p.title}
                    </h3>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: t.textFaint,
                        textDecoration: "none",
                        transition: "color 0.2s",
                        flexShrink: 0,
                        marginLeft: 8,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = t.accent)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = t.textFaint)
                      }
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                  <p
                    style={{
                      color: t.textMuted,
                      fontSize: 14,
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {p.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: t.accentBg,
                        color: t.accent,
                        border: `1px solid ${t.accentBorder}`,
                        padding: "4px 10px",
                        borderRadius: 6,
                        fontSize: 11,
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
