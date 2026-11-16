function Contact() {
  const links = [
    { label: "Email me", href: "mailto:simonjeremiah360@gmail.com", primary: true },
    { label: "Download CV", href: "/Simon-Jeremiah-CV.pdf", download: "Simon-Jeremiah-CV.pdf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/simonjeremiah" },
    { label: "GitHub", href: "https://github.com/BigJerry-dev" },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "56px 24px 40px 24px",
        borderTop: "1px solid var(--line)",
        scrollMarginTop: "60px",
        fontFamily: "'Montserrat', Arial, sans-serif",
      }}
    >
      <style>{`
        .contact-btn {
          padding: 13px 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          border: 1.5px solid var(--ink);
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .contact-btn-dark {
          background: var(--ink);
          color: #fff;
        }
        .contact-btn-dark:hover {
          background: var(--yellow);
          color: var(--ink);
          border-color: var(--yellow);
        }
        .contact-btn-light {
          background: transparent;
          color: var(--ink);
        }
        .contact-btn-light:hover {
          background: var(--ink);
          color: #fff;
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted)", margin: 0 }}>Contact</p>
        <h2 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", letterSpacing: "-0.02em", margin: "10px 0 0 0" }}>
          Work with me<span style={{ color: "var(--yellow)" }}>.</span>
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#555", margin: "16px 0 0 0" }}>
          Simon Jeremiah Anuoluwapo. Lagos, Nigeria. Remote worldwide.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "28px" }}>
          {links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                download={l.download}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={l.primary ? "contact-btn contact-btn-dark" : "contact-btn contact-btn-light"}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <p style={{ fontSize: "12px", color: "var(--muted)", margin: "56px 0 0 0" }}>
          © {new Date().getFullYear()} BigJ dev
        </p>
      </div>
    </section>
  );
}

export default Contact;