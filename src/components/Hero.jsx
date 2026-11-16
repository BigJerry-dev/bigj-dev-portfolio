function Hero() {
  const facts = [
    { label: "Name", value: "Simon Jeremiah Anuoluwapo" },
    { label: "Role", value: "Product Engineer, Front-End Heavy" },
    { label: "Location", value: "Lagos, Nigeria. Remote worldwide" },
    { label: "Availability", value: "Open for contracts" },
  ];

  const rise = (delay) => ({ animation: `fadeUp 0.7s ease ${delay}s both` });

  return (
    <section style={{ padding: "0 24px 56px 24px", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <style>{`
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .hero-logo {
          width: 100%;
          max-width: 620px;
          height: auto;
          display: block;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 40px;
          align-items: center;
          margin-top: 28px;
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

        .facts {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 24px;
        }
        .fact-row {
          padding: 14px 0;
        }
        .fact-row + .fact-row {
          border-top: 1px solid var(--line);
        }
        .fact-row:first-child {
          padding-top: 0;
        }
        .fact-row:last-child {
          padding-bottom: 0;
        }
        .fact-label {
          font-size: 12px;
          color: var(--muted);
          font-weight: 600;
        }
        .fact-value {
          font-size: 15px;
          font-weight: 700;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .hero-logo {
            width: calc(100% - 52px);
            margin-top: -60px;
          }
          .facts {
            background: transparent;
            border: none;
            border-top: 1px solid var(--line);
            border-radius: 0;
            padding: 0;
          }
          .fact-row,
          .fact-row:first-child,
          .fact-row:last-child {
            display: flex;
            gap: 16px;
            align-items: baseline;
            padding: 13px 0;
          }
          .fact-label {
            width: 92px;
            flex-shrink: 0;
          }
          .fact-value {
            margin-top: 0;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="hero-inner">
        <img
          src="/Bigjdevlogo.png"
          alt="BigJ dev logo"
          className="hero-logo"
          style={rise(0)}
        />

        <div className="hero-grid">
          <div style={rise(0.15)}>
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

          <div className="facts" style={rise(0.3)}>
            {facts.map((f) => (
              <div key={f.label} className="fact-row">
                <div className="fact-label">{f.label}</div>
                <div className="fact-value">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;