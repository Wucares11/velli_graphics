import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../context/ThemeContext";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../../data/config";

export function Contact() {
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
      style={{
        width: "100%",
        boxSizing: "border-box",
        scrollMarginTop: "80px",
        background: t.bg,
        padding: "100px 2rem",
      }}
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

