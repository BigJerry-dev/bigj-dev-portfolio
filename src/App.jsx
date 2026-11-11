import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectRow from "./components/ProjectRow";
import Capabilities from "./components/Capabilities";
import { projects } from "./data/projects";

function App() {
  return (
    <div style={{ background: "#FAF6EC", color: "#111", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <Navbar />
      <Hero />
      <section id="work" style={{ padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", letterSpacing: "1px", fontWeight: "600" }}>
          <span>DEMO SHOWCASES</span>
          <span>THEME-STYLE PREVIEWS</span>
        </div>
        <p style={{ fontSize: "12px", marginTop: "8px" }}>Demo showcases to preview UI/UX and Front-End. Live production apps available on CV and Play Store.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
          {projects.map((p) => <ProjectRow key={p.id} project={p} />)}
        </div>
      </section>
      <Capabilities />
      <section id="about" style={{ padding: "40px", borderBottom: "1px solid #E5DDC8" }}>
        <p style={{ fontSize: "11px", letterSpacing: "1px", fontWeight: "600" }}>DESIGN AND ENGINEERING ETHOS</p>
        <h2 style={{ fontSize: "32px", fontWeight: "800", lineHeight: "1.3", maxWidth: "700px" }}>
          I build interfaces that feel fast, solid, and clear. Building Products People Actually Use.
        </h2>
        <p style={{ maxWidth: "600px", lineHeight: "1.7" }}>I do not just write front-end code. I take the feature from idea to finished product, from UI/UX demo to React build to product logic. So teams get a finished product, not just pixels.</p>
      </section>
      <section id="contact" style={{ padding: "40px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "1px", fontWeight: "600" }}>INQUIRIES</p>
        <h2 style={{ fontSize: "32px", fontWeight: "800" }}>Work with me - Simon Jeremiah Anuoluwapo</h2>
        <p>GitHub | LinkedIn | X (Twitter) | Email</p>
      </section>
    </div>
  );
}
export default App;