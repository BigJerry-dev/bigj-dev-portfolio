function Capabilities() {
  const groups = [
    {
      title: "Front-End",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vite"],
    },
    {
      title: "Mobile",
      items: ["React Native", "Flutter", "Expo", "Android and iOS build"],
    },
    {
      title: "Product",
      items: ["UI/UX demo to build to product logic", "Feature ownership start to finish", "Responsive design"],
    },
    {
      title: "State and Data",
      items: ["Zustand", "Redux", "React Query", "REST API", "Firebase"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Cloudflare Pages", "Netlify", "Figma to code"],
    },
    {
      title: "Experience",
      items: ["4 years, 2022 to 2026", "4 apps live on Play Store", "Lagos, Nigeria", "Remote worldwide"],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "56px 24px",
        borderTop: "1px solid var(--line)",
        scrollMarginTop: "60px",
        fontFamily: "'Montserrat', Arial, sans-serif",
      }}
    >
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: 36px 40px;
          margin-top: 32px;
        }
        .skills-title {
          font-size: 15px;
          font-weight: 800;
          margin: 0 0 12px 0;
        }
        .skills-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skills-chip {
          border: 1px solid var(--line);
          background: #fff;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.02em", margin: 0 }}>
          What I work with<span style={{ color: "var(--yellow)" }}>.</span>
        </h2>

        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="skills-title">{group.title}</p>
              <div className="skills-chips">
                {group.items.map((item) => (
                  <span key={item} className="skills-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;