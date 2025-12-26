import Container from "../components/layout/Container";
import { projects } from "../data/site";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <Container>
        <h2 style={{ fontSize: 28, margin: "0 0 12px" }}>Proyectos</h2>

        <p style={{ color: "var(--muted)", margin: "0 0 18px" }}>
          Proyectos destacados con foco en frontend y entrega en producción.
        </p>

        {featured.length > 0 && (
          <div className="grid grid2" style={{ marginBottom: 26 }}>
            {featured.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            <h3 style={{ fontSize: 18, margin: "26px 0 12px", color: "var(--muted)" }}>
              Más proyectos
            </h3>
            <div className="grid">
              {rest.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}

function ProjectCard({ p }) {
  const { title, subtitle, description, stack, links } = p;

  return (
    <article className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
        <div>
          <h4 style={{ fontSize: 20, margin: 0 }}>{title}</h4>
          <div style={{ color: "var(--muted)", marginTop: 4 }}>{subtitle}</div>
        </div>

        
      </div>

      <p style={{ marginTop: 12, color: "var(--muted)" }}>{description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
        {stack?.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
        {links?.demo ? (
          <a className="btn btnPrimary" href={links.demo} target="_blank" rel="noreferrer">
            Ver demo
          </a>
        ) : null}
        {links?.repo ? (
          <a className="btn" href={links.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        ) : null}
        {links?.case ? (
          <a className="btn" href={links.case} target="_blank" rel="noreferrer">
            Caso
          </a>
        ) : null}
      </div>
    </article>
  );
}

