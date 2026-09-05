import { useState, useEffect, createContext, useContext } from "react";
import emailjs from "@emailjs/browser";
import {
  Calendar,
  GraduationCap,
  Globe,
  Zap,
  Sun,
  Moon,
  Palette,
  Layers,
  PenTool,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import niveaImg from "./assets/nivea.jpg";
import cocacolaImg from "./assets/cocacola.jpg";
import pepsiImg from "./assets/pepsi.jpg";
import logoImg from "./assets/logo.jpg";

// ─── EmailJS credentials ────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_hmpg467";
const EMAILJS_TEMPLATE_ID = "template_okbba8c";
const EMAILJS_PUBLIC_KEY = "Sy3fcUYxl63I5xDSO";

// ─── Theme context ──────────────────────────────────────────────────
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

// ─── Theme definitions ──────────────────────────────────────────────
const themes = {
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

// ─── Data ────────────────────────────────────────────────────────────
const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  {
    category: "Design Services",
    icon: Palette,
    items: ["Graphics design", "User Experience Design (UED)", "UX research", "Brand and visual design", "Packaging Design", "Ad design"],
  },
  {
    category: "Software & Tools",
    icon: PenTool,
    items: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "Adobe InDesign"],
  },
  {
    category: "Core Skills",
    icon: Layers,
    items: ["Wireframing", "Interactive prototyping", "User Flow Mapping", "Photo editing and retouching", "Visual Composition", "Print & Digital Media", "Photo Manipulation"],
  },
];

const PROJECTS = [
  {
    title: "Nivea — Skincare Showcase",
    description:
      "A clean visual composition advertising Nivea's skincare range. Designed with brand-aligned blue tones, balanced product placement, and high-clarity typography.",
    tags: ["Photoshop", "Product Design", "Brand Advertising"],
    image: niveaImg,
    link: "#",
  },
  {
    title: "Coca-Cola — Taste The Feeling",
    description:
      "A warm visual poster design for Coca-Cola capturing rich glass reflection and gradient lettering to communicate refreshing taste.",
    tags: ["Illustrator", "Poster Design", "Typography"],
    image: cocacolaImg,
    link: "#",
  },
  {
    title: "Pepsi — Greatness Campaign",
    description:
      "High-contrast dark theme advertisement showcasing Pepsi's iconic bottles and cans with crisp studio reflections and vertical bold lettering.",
    tags: ["Photoshop", "Brand Design", "Dark Aesthetics"],
    image: pepsiImg,
    link: "#",
  },
];

const TYPING_WORDS = ["Graphic Designer.", "Brand Strategist.", "Visual Artist.", "Creative Visionary."];

// ─── Typing effect hook ──────────────────────────────────────────────
function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ─── Section wrapper ─────────────────────────────────────────────────
const sectionStyle = { width: "100%", boxSizing: "border-box", scrollMarginTop: "80px" };

// ─── SVG Icon component ──────────────────────────────────────────────
function IconBox({ Icon, size = 26, color }) {
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

// ─── Theme toggle button ─────────────────────────────────────────────
function ThemeToggle({ isDark, onToggle }) {
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

// ─── Navbar ──────────────────────────────────────────────────────────
function Navbar({ active, isDark, onToggle }) {
  const t = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: "100%",
        boxSizing: "border-box",
        background: t.navBg,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? t.accentBorder : t.border}`,
        transition: "all 0.3s ease",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Brand with Logo Image */}
        <div
          onClick={() => scrollTo("hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
          }}
        >
          <img
            src={logoImg}
            alt="VELLIGRAPHICS Logo"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              objectFit: "cover",
              border: `2px solid ${t.accent}`,
              boxShadow: `0 0 14px ${t.accent}45`,
              filter: "contrast(1.08) brightness(1.02)",
            }}
          />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 20,
              color: t.accent,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            VELLIGRAPHICS
          </span>
        </div>

        {/* Desktop Nav Links + Theme Toggle */}
        <div className="nav-desktop-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === link ? t.accent : t.textMuted,
                fontSize: 14,
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: 8,
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (active !== link) e.target.style.color = t.text;
              }}
              onMouseLeave={(e) => {
                if (active !== link) e.target.style.color = t.textMuted;
              }}
            >
              {link}
            </button>
          ))}
          <ThemeToggle isDark={isDark} onToggle={onToggle} />
        </div>

        {/* Mobile Toggle + Theme Switcher */}
        <div className="nav-mobile-toggle" style={{ gap: 10, alignItems: "center" }}>
          <ThemeToggle isDark={isDark} onToggle={onToggle} />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle Navigation Menu"
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
              color: t.text,
            }}
          >
            {mobileOpen ? <X size={22} color={t.accent} /> : <Menu size={22} color={t.text} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          className="nav-mobile-dropdown"
          style={{
            background: t.navBg,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: `1px solid ${t.accentBorder}`,
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: active === link ? t.accentBg : "transparent",
                border: `1px solid ${active === link ? t.accentBorder : "transparent"}`,
                cursor: "pointer",
                color: active === link ? t.accent : t.text,
                fontSize: 16,
                fontWeight: 600,
                padding: "12px 18px",
                borderRadius: 10,
                textAlign: "left",
                transition: "all 0.2s",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>{link}</span>
              <ChevronRight size={18} color={active === link ? t.accent : t.textFaint} />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────
function Hero() {
  const t = useTheme();
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section
      id="hero"
      style={{
        ...sectionStyle,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: t.bg,
        padding: "120px 2rem 60px 2rem",
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
              <Palette size={18} /> Creative Graphic Design Studio
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
                height: 52,
                display: "flex",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.2rem, 3.2vw, 2.1rem)",
                  fontWeight: 600,
                  color: t.accent,
                  fontFamily: "monospace",
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
                margin: "0 0 40px",
              }}
            >
              Elevating brand stories through striking visuals — logo design, 
              marketing posters, product packaging, and custom brand identity.
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
                gap: 36,
                marginTop: 56,
                paddingTop: 36,
                borderTop: `1px solid ${t.border}`,
                flexWrap: "wrap",
              }}
            >
              {[
                ["3+", "Years Experience"],
                ["50+", "Projects Delivered"],
                ["20+", "Happy Clients"],
              ].map(([num, label]) => (
                <div key={label}>
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
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: -12,
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: t.cardShadow,
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
                }}
              />
              <div>
                <div
                  style={{
                    color: t.text,
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  VELLIGRAPHICS
                </div>
                <div style={{ color: t.textFaint, fontSize: 11 }}>
                  Brand • Poster • Digital
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

// ─── About ───────────────────────────────────────────────────────────
function About() {
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
      style={{ ...sectionStyle, background: t.bgAlt, padding: "100px 2rem" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
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
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: t.text,
                lineHeight: 1.1,
                margin: "0 0 24px",
                letterSpacing: "-1px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Visual designs that speak for your brand.
            </h2>
            <p
              style={{
                color: t.textMuted,
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              I'm a passionate graphic designer dedicated to crafting powerful 
              visual identities, advertising graphics, and print media. Every design 
              is crafted with care for color, composition, and message.
            </p>
            <p
              style={{
                color: t.textMuted,
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              From commercial product layouts to brand posters, I help 
              businesses stand out in crowded markets with memorable graphics.
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
                  padding: "24px",
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

// ─── Skills ──────────────────────────────────────────────────────────
function SkillsSection() {
  const t = useTheme();

  return (
    <section
      id="skills"
      style={{ ...sectionStyle, background: t.bg, padding: "100px 2rem" }}
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
          02 / SKILLS
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
                padding: "32px",
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
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
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
                    <span
                      style={{ color: t.textMuted, fontSize: 15 }}
                    >
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

// ─── Projects (Selected Work) ────────────────────────────────────────
function Projects() {
  const t = useTheme();

  return (
    <section
      id="projects"
      style={{ ...sectionStyle, background: t.bgAlt, padding: "100px 2rem" }}
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
          {PROJECTS.map((p) => (
            <div
              key={p.title}
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
              {/* Project Image Container */}
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
                }}
              >
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
              </div>

              {/* Project info */}
              <div style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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

// ─── Contact ─────────────────────────────────────────────────────────
function Contact() {
  const t = useTheme();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setSending(true);
    setError("");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setSending(false);
      })
      .catch(() => {
        setError(
          "Something went wrong. Please try again or email me directly."
        );
        setSending(false);
      });
  };

  const inputStyle = {
    width: "100%",
    background: t.inputBg,
    border: `1px solid ${t.border}`,
    borderRadius: 10,
    padding: "14px 18px",
    color: t.text,
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      style={{ ...sectionStyle, background: t.bg, padding: "100px 2rem" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            color: t.accent,
            fontFamily: "monospace",
            fontSize: 13,
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          04 / CONTACT
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: t.text,
            lineHeight: 1.1,
            margin: "0 0 16px",
            letterSpacing: "-1px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Let's create something together.
        </h2>
        <p
          style={{
            color: t.textFaint,
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          Have a design project in mind or need a custom quote? Reach out below.
        </p>

        {sent ? (
          <div
            style={{
              background: t.accentBg,
              border: `1px solid ${t.accentBorder}`,
              borderRadius: 18,
              padding: "40px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
            <div
              style={{
                color: t.accent,
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Message received!
            </div>
            <div style={{ color: t.textFaint, fontSize: 15 }}>
              I'll get back to you within 24 hours.
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              textAlign: "left",
            }}
          >
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "Your name",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "your@email.com",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  style={{
                    color: t.textMuted,
                    fontSize: 13,
                    fontFamily: "monospace",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [id]: e.target.value }))
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = t.accentBorder)
                  }
                  onBlur={(e) => (e.target.style.borderColor = t.border)}
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  color: t.textMuted,
                  fontSize: 13,
                  fontFamily: "monospace",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) =>
                  (e.target.style.borderColor = t.accentBorder)
                }
                onBlur={(e) => (e.target.style.borderColor = t.border)}
              />
            </div>

            {error && (
              <p style={{ color: "#f87171", fontSize: 14, margin: 0 }}>
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={sending}
              style={{
                background: sending ? t.accentBorder : t.accent,
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 15,
                cursor: sending ? "not-allowed" : "pointer",
                fontFamily: "inherit",
                alignSelf: "flex-start",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!sending) e.target.style.background = t.accentLight;
              }}
              onMouseLeave={(e) => {
                if (!sending) e.target.style.background = t.accent;
              }}
            >
              {sending ? "Sending..." : "Send message →"}
            </button>
          </div>
        )}

        <div
          style={{
            marginTop: 80,
            paddingTop: 40,
            display: "flex",
            justifyContent: "center",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          {[
            ["Linktr.ee", "https://linktr.ee/Velli_Graphics"],
            // [
            //   "LinkedIn",
            //   "https://www.linkedin.com/in/olayanju-oluwapelumi-611a0a373?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            // ],
            ["TikTok", "https://www.tiktok.com/@velli.graphics"],
            ["Email", "mailto:erinfolamiabubakir@gmail.com"],
          ].map(([name, href]) => (
            <a
              key={name}
              href={href}
              style={{
                color: t.textFaint,
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "monospace",
              }}
              onMouseEnter={(e) => (e.target.style.color = t.accent)}
              onMouseLeave={(e) => (e.target.style.color = t.textFaint)}
            >
              {name}
            </a>
          ))}
        </div>
        <p
          style={{
            color: t.textFaint,
            fontSize: 12,
            marginTop: 32,
            fontFamily: "monospace",
          }}
        >
          © 2026 VELLIGRAPHICS. All rights reserved.
        </p>
      </div>
    </section>
  );
}

// ─── Main app ────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background = theme.bg;
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.background = theme.bg;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.maxWidth = "100vw";

    const styleTag = document.createElement("style");
    styleTag.textContent = `*, *::before, *::after { box-sizing: border-box; }`;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, [theme.bg]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = NAV_LINKS.find((l) => l.toLowerCase() === id);
            if (match) setActiveSection(match);
          }
        });
      },
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          background: theme.bg,
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
          fontFamily: "'Inter', system-ui, sans-serif",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        <Navbar
          active={activeSection}
          isDark={isDark}
          onToggle={() => setIsDark((d) => !d)}
        />
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}
