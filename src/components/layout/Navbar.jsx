import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS } from "../../data/navLinks";
import { ThemeToggle } from "../common/ThemeToggle";
import logoImg from "../../assets/logo.jpg";

export function Navbar({ active, isDark, onToggle }) {
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
              fontSize: "clamp(16px, 4vw, 20px)",
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

