function Hero() {
  return (
    <section style={{ padding: "32px 40px 20px 40px", background: "#FAF6EC", color: "#111", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 24px;
          align-items: start;
          margin-top: 20px;
        }
        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .pill {
          border: 1px solid #111;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          background: #fff;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <img
        src="/Bigjdevlogo.png"
        alt="BigJ dev logo"
        style={{ width: "100%", maxWidth: "560px", height: "auto", display: "block" }}
      />

      <div className="pill-row">
        <span className="pill">PRODUCT ENGINEER</span>
        <span className="pill">FRONT-END HEAVY</span>
        <span className="pill">LAGOS TO THE WORLD</span>
      </div>

      <div className="hero-grid">
        <div>
          <p style={{ fontSize: "20px", lineHeight: "1.6", margin: 0 }}>
            I build full features from start to finish. UI/UX demo, React and Next.js front end, product logic. Not just pixels.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "16px" }}>
            Building Products People Actually Use.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <a href="#work" style={{ background: "#111", color: "#fff", padding: "12px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
              View My Work
            </a>
            <a href="#contact" style={{ border: "1px solid #111", color: "#111", padding: "12px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
              Contact Me
            </a>
          </div>
        </div>

        <div style={{ background: "#111", color: "#FAF6EC", padding: "20px", borderRadius: "16px" }}>
          <p style={{ fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
            <strong>NAME</strong> - Simon Jeremiah Anuoluwapo
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.8", margin: "8px 0 0 0" }}>
            <strong>ROLE</strong> - Product Engineer, Front-End Heavy
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.8", margin: "8px 0 0 0" }}>
            <strong>LOCATION</strong> - Lagos, Nigeria. Remote Worldwide
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.8", margin: "8px 0 0 0" }}>
            <strong>AVAILABILITY</strong> - Open for Contracts
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;