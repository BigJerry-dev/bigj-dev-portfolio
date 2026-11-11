import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

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
        .menu-btn {
          display: none;
          background: none;
          border: 1px solid #111;
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 16px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            width: 100%;
            flex-direction: column;
            gap: 12px;
            font-size: 13px;
            margin-top: 12px;
          }
          .nav-links.show {
            display: flex;
          }
          .menu-btn {
            display: block;
          }
          .nav-bar {
            flex-wrap: wrap;
          }
          .nav-status {
            display: none;
          }
        }
      `}</style>

      <div className="nav-bar">
        <a href="#" style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "1px", color: "#111", textDecoration: "none" }}>
          BIGJ DEV
        </a>

        <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "1px" }}>
          STATUS: OPERATIONAL
        </span>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "X" : "☰"}
        </button>

        <div className={open ? "nav-links show" : "nav-links"}>
          <a href="#work" onClick={() => setOpen(false)}>WORK</a>
          <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
          <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
          <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;