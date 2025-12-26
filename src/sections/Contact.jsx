import Container from "../components/layout/Container";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <h2 style={{ fontSize: 26, margin: "0 0 10px" }}>Contacto</h2>

        <div style={{ display: "grid", gap: 8, fontSize: 15, color: "var(--muted)" }}>
          <div>Email: <a href={`mailto:${site.links.email}`}>{site.links.email}</a></div>
          <div>LinkedIn: <a href={site.links.linkedin} target="_blank" rel="noreferrer">Perfil</a></div>
          <div>GitHub: <a href={site.links.github} target="_blank" rel="noreferrer">Repos</a></div>
          <div>Freelancer: <a href={site.links.freelancer} target="_blank" rel="noreferrer">Perfil</a></div>
        </div>
      </Container>
    </section>
  );
}
