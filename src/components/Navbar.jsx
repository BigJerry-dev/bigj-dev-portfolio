function Navbar() {
  return (
    <nav style={{ background: "#FAF6EC", borderBottom: "1px solid #E5DDC8", padding: "14px 16px", fontFamily: "'Montserrat', Arial, sans-serif", position: "sticky", top: 0, zIndex: 50 }}>
      <style>{`
        .nav-bar {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          width: 100%;
          white-space: nowrap;
        }
        .nav-logo {
          font-weight: 800;
          font-size: clamp(11px, 3.2vw, 14px);
          letter-spacing: 1px;
          color: #111;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-links {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: clamp(8px, 3vw, 24px);
          font-size: clamp(9px, 2.8vw, 12px);
          font-weight: 600;
          letter-spacing: 1px;
          overflow: hidden;
        }
        .nav-links a {
          color: #111;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-status {
          font-size: clamp(8px, 2.5vw, 12px);
          font-weight: 600;
          letter-spacing: 1px;
          flex-shrink: 0;
        }
      `}</style>

      <div className="nav-bar">
        <a href="#" className="nav-logo">BIGJ DEV</a>

        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>

        <span className="nav-status">STATUS: OPERATIONAL</span>
      </div>
    </nav>
  );
}

export default Navbar;