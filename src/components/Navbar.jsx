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
          top: calc(12px + env(safe-area-inset-top));
          right: 12px;
          width: 220px;
          max-width: 62vw;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transform: translateX(calc(100% + 24px));
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 70;
        }
        .drawer.show {
          transform: translateX(0);
        }
        .drawer-card {
          background: #fff;
          border-radius: 24px;
          padding: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .drawer a {
          color: var(--ink);
          text-decoration: none;
          font-size: 17px;
          font-weight: 700;
          padding: 12px 14px;
          border-radius: 14px;
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), background 0.25s ease;
        }
        .drawer.show a {
          opacity: 1;
          transform: translateX(0);
        }
        .drawer.show a:nth-of-type(1) { transition-delay: 0.15s; }
        .drawer.show a:nth-of-type(2) { transition-delay: 0.22s; }
        .drawer.show a:nth-of-type(3) { transition-delay: 0.29s; }
        .drawer.show a:nth-of-type(4) { transition-delay: 0.36s; }
        .drawer a:hover {
          background: var(--cream);
        }
        .drawer-note {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .drawer.show .drawer-note {
          opacity: 1;
          transition-delay: 0.45s;
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
        <div className="drawer-card">
          <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
          <p style={{ fontSize: "13px", color: "var(--muted)", margin: "4px 14px" }}>Menu</p>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>

        <div className="drawer-card drawer-note">
          <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--ink)", margin: 0 }}>Simon Jeremiah Anuoluwapo</p>
          <p style={{ fontSize: "12px", color: "var(--muted)", margin: "4px 0 0 0", lineHeight: 1.6 }}>
            Lagos, Nigeria. Remote worldwide.
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;