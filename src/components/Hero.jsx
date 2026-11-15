function Hero() {
  const facts = [
    { label: "Name", value: "Simon Jeremiah Anuoluwapo" },
    { label: "Role", value: "Product Engineer, Front-End Heavy" },
    { label: "Location", value: "Lagos, Nigeria. Remote worldwide" },
    { label: "Availability", value: "Open for contracts" },
  ];

  const rise = (delay) => ({ animation: `fadeUp 0.7s ease ${delay}s both` });

  return (
    <section style={{ padding: "48px 24px 56px 24px", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <style>{`
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 40px;
          align-items: center;
          margin-top: 32px;
        }
        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }
        .pill {
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 7px 14px;
          font-size: 13px;
          font-weight: 600;
          background: #fff;
          color: var(--ink);
        }
        .hero-btn {
          padding: 13px 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          border: 1.5px solid var(--ink);
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .hero-btn-dark {
          background: var(--ink);
          color: #fff;
        }
        .hero-btn-dark:hover {
          background: var(--yellow);
          color: var(--ink);
          border-color: var(--yellow);
        }
        .hero-btn-light {
          background: transparent;
          color: var(--ink);
        }
        .hero-btn-light:hover {
          background: var(--ink);
          color: #fff;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>

      <div className="hero-inner">
        <img
          src="/Bigjdevlogo.png"
          alt="BigJ dev logo"
          style={{ width: "100%", maxWidth: "460px", height: "auto", display: "block", ...rise(0) }}
        />

        <div className="pill-row" style={rise(0.15)}>
          <span className="pill">Product engineer</span>
          <span className="pill">Front-end heavy</span>
          <span className="pill">Lagos to the world</span>
        </div>

        <div className="hero-grid">
          <div style={rise(0.3)}>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
              I build full features from start to finish<span style={{ color: "var(--yellow)" }}>.</span>
            </h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#444", margin: "20px 0 0 0", maxWidth: "540px" }}>
              UI/UX demo, React and Next.js front end, product logic. Not just pixels. Building products people actually use.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "28px" }}>
              <a href="#work" className="hero-btn hero-btn-dark">View my work</a>
              <a href="#contact" className="hero-btn hero-btn-light">Contact me</a>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid var(--line)",
              borderRadius: "24px",
              padding: "24px",
              ...rise(0.45),
            }}
          >
            {facts.map((f, i) => (
              <div
                key={f.label}
                style={{
                  paddingTop: i === 0 ? 0 : "14px",
                  marginTop: i === 0 ? 0 : "14px",
                  borderTop: i === 0 ? "none" : "1px solid var(--line)",
                }}
              >
                <div style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 600 }}>{f.label}</div>
                <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "4px" }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;