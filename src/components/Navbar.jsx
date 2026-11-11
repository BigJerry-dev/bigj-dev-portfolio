function Navbar() {
  return (
    <nav style={{ background: "#FAF6EC", borderBottom: "1px solid #E5DDC8", padding: "16px 40px", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <style>{`
        .nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .nav-links {
          display: flex;
          gap: 24px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .nav-links a {
          color: #111;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .nav-bar {
            flex-wrap: wrap;
          }
          .nav-links {
            width: 100%;
            justify-content: flex-start;
            gap: 16px;
            font-size: 11px;
            order: 3;
          }
          .nav-status {
            font-size: 11px;
          }
        }
      `}</style>

      <div className="nav-bar">
        <a href="#" style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "1px", color: "#111", textDecoration: "none" }}>
          BIGJ DEV
        </a>

        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>

        <span className="nav-status" style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "1px" }}>
          STATUS: OPERATIONAL
        </span>
      </div>
    </nav>
  );
}

export default Navbar;