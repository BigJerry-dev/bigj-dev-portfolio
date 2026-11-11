function ProjectRow({ project }) {
  return (
    <div
      className="project-card"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5DDC8",
        borderRadius: "16px",
        overflow: "hidden",
        fontFamily: "'Montserrat', Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      }}
    >
      {/* Top — Demo Preview Area */}
      <div style={{ background: "#DBEAFE", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", letterSpacing: "1px", fontWeight: "700", color: "#2563EB" }}>
        DEMO PREVIEW — {project.title}
      </div>

      {/* Body — Vertical */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        <p style={{ fontSize: "11px", letterSpacing: "1px", fontWeight: "600", color: "#666" }}>DEMO 0{project.id} — {project.role}</p>
        <h3 style={{ fontSize: "22px", fontWeight: "800", margin: "0", lineHeight: "1.2" }}>{project.title}</h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333", margin: "0" }}>{project.desc}</p>
        <p style={{ fontSize: "11px", fontWeight: "600", marginTop: "auto" }}>{project.stack}</p>

        <div style={{ display: "flex", gap: "12px", marginTop: "12px", flexWrap: "wrap" }}>
          <a href={project.demoLink} style={{ background: "#2563EB", color: "#FFF", padding: "10px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", textDecoration: "none" }}>VIEW DEMO →</a>
          <a href={project.uiuxLink} style={{ background: "#FAF6EC", color: "#111", padding: "10px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", textDecoration: "none", border: "1px solid #E5DDC8" }}>UI/UX DEMO</a>
        </div>
        <div style={{ fontSize: "12px" }}>
          <a href={project.githubLink} style={{ color: "#111" }}>GitHub</a>
          {"  •  "}
          <a href={project.videoLink} style={{ color: "#111" }}>Watch Video</a>
        </div>
      </div>
    </div>
  );
}
export default ProjectRow;