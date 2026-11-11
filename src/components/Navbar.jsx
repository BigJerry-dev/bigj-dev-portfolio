function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "18px 40px", fontSize: "11px", letterSpacing: "1px", fontWeight: "600", borderBottom: "1px solid #E5DDC8", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <span style={{ fontWeight: "800" }}>BIGJ DEV</span>
      <div style={{ display: "flex", gap: "28px" }}>
        <a href="#work" style={{ color: "#111", textDecoration: "none" }}>WORK</a>
        <a href="#skills" style={{ color: "#111", textDecoration: "none" }}>SKILLS</a>
        <a href="#about" style={{ color: "#111", textDecoration: "none" }}>ABOUT</a>
        <a href="#contact" style={{ color: "#111", textDecoration: "none" }}>CONTACT</a>
      </div>
      <span>STATUS: OPERATIONAL</span>
    </nav>
  );
}
export default Navbar;