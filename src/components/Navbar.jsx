import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)", fontFamily: "'Montserrat', Arial, sans-serif", position: "sticky", top: 0, zIndex: 50 }}>
      <style>{`
        .nav-top {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          white-space: nowrap;
        }
        .nav-logo {
          font-weight: 800;
          font-size: 18px;
          color: var(--ink);
          text-decoration: none;
        }
        .nav-logo span {
          color: var(--yellow);
        }
        .menu-btn {
          background: var(--ink);
          color: #fff;
          border: none;
          border-radius: 999px;
          width: 40px;
          height: 40px;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .menu-btn:hover {
          background: var(--yellow);
          color: var(--ink);
        }
        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
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
          width: 300px;
          max-width: 85vw;
          height: 100vh;
          background: #fff;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 70;
          box-shadow: -8px 0 24px rgba(0, 0, 0, 0.1);
        }
        .drawer.show {
          transform: translateX(0);
        }
        .drawer a {
          color: var(--ink);
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
          padding: 14px 16px;
          border-radius: 12px;
          transition: background 0.25s ease;
        }
        .drawer a:hover {
          background: var(--cream);
        }
        .drawer-close {
          align-self: flex-end;
          background: var(--ink);
          color: #fff;
          border: none;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          cursor: pointer;
        }
      `}</style>

      <div className="nav-top">
        <a href="#" className="nav-logo">BigJ dev<span>.</span></a>

        <button className="menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}>☰</button>
      </div>

      <div className={open ? "backdrop show" : "backdrop"} onClick={() => setOpen(false)}></div>

      <div className={open ? "drawer show" : "drawer"}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: "12px 16px 4px 16px" }}>Menu</p>
        <a href="#work" onClick={() => setOpen(false)}>Work</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "auto", lineHeight: 1.6 }}>
          Simon Jeremiah Anuoluwapo<br />Lagos, Nigeria. Remote worldwide.
        </p>
      </div>
    </nav>
  );
}

export default Navbar;