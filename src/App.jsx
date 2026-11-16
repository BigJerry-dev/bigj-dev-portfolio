import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectRow from "./components/ProjectRow";
import Capabilities from "./components/Capabilities";
import Ethos from "./components/Ethos";
import Contact from "./components/Contact";
import { projects } from "./data/projects";

function App() {
  return (
    <div style={{ background: "#fff", color: "#111", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <Navbar />
      <Hero />

      <section id="work" style={{ padding: "56px 24px", scrollMarginTop: "60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.02em", margin: 0 }}>
            Selected work<span style={{ color: "var(--yellow)" }}>.</span>
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#555", margin: "12px 0 0 0", maxWidth: "560px" }}>
            Demo showcases to preview UI/UX and Front-End. Live production apps available on CV and Play Store.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "24px", marginTop: "32px" }}>
            {projects.map((p) => <ProjectRow key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <Capabilities />
      <Ethos />
      <Contact />
    </div>
  );
}
export default App;