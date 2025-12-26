import Container from "../components/layout/Container";
import { site } from "../data/site";
import { scrollToId } from "../utils/scrollToId";

export default function Hero() {
  const goProjects = (e) => {
    e.preventDefault();
    scrollToId("projects");
  };

  const goContact = (e) => {
    e.preventDefault();
    scrollToId("contact");
  };

  return (
    <section
      className="section"
      style={{
        background:
          "radial-gradient(1200px 700px at 25% -10%, rgba(122,167,255,.14), transparent 55%)," +
          "radial-gradient(900px 600px at 90% 10%, rgba(120,255,200,.10), transparent 55%)",
      }}
    >
      <Container>
        <h1 className="heroTitle">{site.role}</h1>

        <p className="heroP">{site.tagline}</p>

        <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn btnPrimary" href="#projects" onClick={goProjects}>
            Ver proyectos
          </a>
          <a className="btn" href="#contact" onClick={goContact}>
            Contactar
          </a>

          <a className="btn" href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn" href={site.links.freelancer} target="_blank" rel="noreferrer">
            Freelancer
          </a>
        </div>

        <div style={{ marginTop: 22, fontSize: 14, color: "var(--muted2)" }}>
          {site.location}
        </div>
      </Container>
    </section>
  );
}
