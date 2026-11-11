import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#FAF6EC", borderBottom: "1px solid #E5DDC8", fontFamily: "'Montserrat', Arial, sans-serif", position: "sticky", top: 0, zIndex: 50 }}>
      <style>{`
        .nav-top {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          white-space: nowrap;
        }
        .nav-logo {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          color: #111;
          text-decoration: none;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-status {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .menu-btn {
          background: #111;
          color: #fff;
          border: none;
          border-radius: 8px;
          width: 36px;
          height: 36px;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-menu {
          display: none;
          flex-direction: column;
          padding: 8px 16px 16px 16px;
          gap: 4px;
          background: #FAF6EC;
          border-top: 1px solid #E5DDC8;
        }
        .nav-menu.show {
          display: flex;
        }
        .nav-menu a {
          color: #111;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          padding: 12px;
          border-radius: 8px;
          background: #fff;
          border: 1px solid #E5DDC8;
        }
      `}</style>

      <div className="nav-top">
        <a href="#" className="nav-logo">BIGJ DEV</a>

        <div className="nav-right">
          <span className="nav-status">STATUS: OPERATIONAL</span>
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? "X" : "☰"}
          </button>
        </div>
      </div>

      <div className={open ? "nav-menu show" : "nav-menu"}>
        <a href="#work" onClick={() => setOpen(false)}>WORK</a>
        <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
        <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
}

export default Navbar;