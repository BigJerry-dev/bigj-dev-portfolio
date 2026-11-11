function Hero() {
  return (
    <section style={{ padding: "40px", background: "#FAF6EC", color: "#111", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <p style={{ fontSize: "11px", letterSpacing: "1px", fontWeight: "600" }}>
        PRODUCT ENGINEER - FRONT-END HEAVY - LAGOS TO THE WORLD
      </p>

      <h1 style={{ fontSize: "72px", fontWeight: "800", lineHeight: "1", margin: "16px 0" }}>
        BigJ dev.
      </h1>

      <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={{ maxWidth: "520px" }}>
          <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
            I build full features from start to finish. UI/UX demo, React and Next.js front end, product logic. Not just pixels.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "20px" }}>
            Building Products People Actually Use.
          </p>
        </div>

        <div style={{ background: "#111", color: "#FAF6EC", padding: "20px", borderRadius: "16px", minWidth: "280px" }}>
          <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
            <strong>NAME</strong> - Simon Jeremiah Anuoluwapo
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
            <strong>ROLE</strong> - Product Engineer, Front-End Heavy
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
            <strong>LOCATION</strong> - Lagos, Nigeria. Remote Worldwide
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
            <strong>AVAILABILITY</strong> - Open for Contracts
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;