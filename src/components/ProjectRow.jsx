function ProjectRow({ project }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #E5DDC8", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#DBEAFE", padding: "60px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "#2563EB", margin: 0 }}>
          DEMO PREVIEW - {project.title}
        </p>
      </div>

      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1px", color: "#666", margin: 0 }}>
          PRODUCT ENGINEER - DEMO SHOWCASE
        </p>

        <h3 style={{ fontSize: "22px", fontWeight: "800", margin: 0, lineHeight: "1.2" }}>
          {project.title}
        </h3>

        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333", margin: 0 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <a href={project.live} target="_blank" rel="noreferrer" style={{ background: "#111", color: "#fff", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
            View Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" style={{ border: "1px solid #111", color: "#111", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;