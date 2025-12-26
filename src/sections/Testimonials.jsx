import Container from "../components/layout/Container";

const testimonials = [
  {
    quote:
      "Juan did an amazing job on my Elementor WordPress site! He found the perfect template and finished everything beautifully. I'm thoroughly impressed and highly recommend him!",
    author: "Stephane P.",
    meta: "Montreal, Canada",
    footer: "5.0 ★ Freelancer · Multiple projects",
  },
  {
    quote:
      "Juan Marcelo is a serious and responsible employee, he meets the agreed goals to develop and provide correct maintenance and updates to the website. Excellent worker, proactive and independent. Highly recommended.",
    author: "Daniel F.",
    meta: "Director · Diario Huellas",
    footer: "Referencia directa",
  },
  {
    quote:
      "Excelente profesional, siempre mantuvo el canal de comunicación abierto, enviaba prototipos hasta conseguir el resultado buscado.",
    author: "Lilian",
    meta: "Coquimbo, Chile",
    footer: "Proyecto: ChiqanAbogados · WordPress",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ fontSize: 28, margin: "0 0 12px" }}>
          Referencias profesionales
        </h2>

        <p style={{ color: "var(--muted)", margin: "0 0 24px", maxWidth: 760 }}>
          Opiniones verificadas (Freelancer) y referencias directas de equipos con los que trabajé en producción.
        </p>

        <div className="grid grid2 grid3">
          {testimonials.map((t, idx) => (
            <article key={idx} className="card">
              <p style={{ margin: 0, lineHeight: 1.6 }}>&ldquo;{t.quote}&rdquo;</p>

              <div style={{ marginTop: 14, color: "var(--muted2)", fontSize: 14 }}>
                — {t.author} · {t.meta}
                <br />
                <small>{t.footer}</small>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <a
            className="btn"
            href="https://www.freelancer.com/u/LittleSomber"
            target="_blank"
            rel="noreferrer"
          >
            Ver perfil en Freelancer
          </a>
        </div>
      </Container>
    </section>
  );
}
