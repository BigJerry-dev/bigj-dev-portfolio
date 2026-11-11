function Capabilities() {
  return (
    <section id="skills" style={{ padding: "40px", borderBottom: "1px solid #E5DDC8", fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", letterSpacing: "1px", fontWeight: "600" }}>
        <span> CAPABILITIES & COMPETENCIES</span>
        <span>PRODUCT ENGINEER STACK</span>
      </div>
      <div style={{ display: "flex", gap: "40px", marginTop: "24px", fontSize: "14px", lineHeight: "2" }}>
        <div><p style={{ fontWeight: "800" }}>Core Engineering</p><p>React • Next.js • TypeScript<br />React Native • Flutter<br />HTML / CSS • Tailwind</p></div>
        <div><p style={{ fontWeight: "800" }}>UI/UX & Product</p><p>Figma • UI/UX Demos<br />Design Systems • Prototyping<br />Product Thinking • User Flows</p></div>
        <div><p style={{ fontWeight: "800" }}>Delivery</p><p>Git • CI/CD • Vercel<br />Node.js • APIs • Supabase<br />Performance • Accessibility</p></div>
      </div>
    </section>
  );
}
export default Capabilities;