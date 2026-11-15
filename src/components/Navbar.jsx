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
        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 60;
        }
        .backdrop.show {
          opacity: 1;
          pointer-events: auto;
        }
        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          max-width: 80vw;
          height: 100vh;
          background: #fff;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 70;
          box-shadow: -8px 0 24px rgba(0, 0, 0, 0.15);
        }
        .drawer.show {
          transform: translateX(0);
        }
        .drawer a {
          color: #111;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 14px;
          border-radius: 10px;
          background: #FAF6EC;
          border: 1px solid #E5DDC8;
        }
        .drawer-close {
          align-self: flex-end;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 8px;
          width: 32px;
          height: 32px;
          cursor: pointer;
        }
      `}</style>

      <div className="nav-top">
        <a href="#" className="nav-logo">BIGJ DEV</a>

        <div className="nav-right">
          <span className="nav-status">STATUS: OPERATIONAL</span>
          <button className="menu-btn" onClick={() => setOpen(true)}>☰</button>
        </div>
      </div>

      <div className={open ? "backdrop show" : "backdrop"} onClick={() => setOpen(false)}></div>

      <div className={open ? "drawer show" : "drawer"}>
        <button className="drawer-close" onClick={() => setOpen(false)}>X</button>
        <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "#666", margin: "12px 0 4px 0" }}>MY WORK</p>
        <a href="#work" onClick={() => setOpen(false)}>WORK</a>
        <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
        <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "auto" }}>Simon Jeremiah Anuoluwapo - Lagos, Nigeria. Remote Worldwide.</p>
      </div>
    </nav>
  );
}

export default Navbar;