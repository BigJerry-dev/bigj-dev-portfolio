function Ethos() {
  return (
    <section
      id="about"
      style={{
        padding: "56px 24px",
        borderTop: "1px solid var(--line)",
        scrollMarginTop: "60px",
        fontFamily: "'Montserrat', Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted)", margin: 0 }}>About</p>
        <h2 style={{ fontSize: "clamp(24px, 3.8vw, 38px)", lineHeight: 1.25, letterSpacing: "-0.02em", maxWidth: "760px", margin: "10px 0 0 0" }}>
          I build interfaces that feel fast, solid, and clear. Building products people actually use<span style={{ color: "var(--yellow)" }}>.</span>
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#555", maxWidth: "620px", margin: "20px 0 0 0" }}>
          I do not just write front-end code. I take the feature from idea to finished product, from UI/UX demo to React build to product logic. So teams get a finished product, not just pixels.
        </p>
      </div>
    </section>
  );
}

export default Ethos;