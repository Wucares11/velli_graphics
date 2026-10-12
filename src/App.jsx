import { useState, useEffect } from "react";
import { ThemeContext, themes } from "./context/ThemeContext";
import { NAV_LINKS } from "./data/navLinks";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

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
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}
