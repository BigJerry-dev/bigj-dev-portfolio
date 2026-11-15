function Capabilities() {
  const groups = [
    {
      title: "Front-End",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Mobile",
      items: ["React Native", "Flutter", "Android deployment"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma to code", "Notion", "Trello"],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "40px",
        borderBottom: "1px solid var(--line)",
        fontFamily: "'Montserrat', Arial, sans-serif",
      }}
    >
      <p style={{ fontSize: "13px", fontWeight: "600", color: "var(--muted)", margin: 0 }}>
        Skills
      </p>
      <h2 style={{ fontSize: "28px", fontWeight: "800", margin: "8px 0 0 0" }}>
        What I work with
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "28px" }}>
        {groups.map((group) => (
          <div key={group.title} style={{ minWidth: "200px" }}>
            <p style={{ fontWeight: "800", fontSize: "15px", margin: "0 0 12px 0" }}>
              {group.title}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    border: "1px solid var(--line)",
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;