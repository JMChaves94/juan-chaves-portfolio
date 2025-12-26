import Container from "./Container";

export default function Footer() {
  return (
    <footer style={{ padding: "26px 0", borderTop: "1px solid #2a2a2a", marginTop: 40 }}>
      <Container>
        <div style={{ fontSize: 13, opacity: 0.8 }}>
          © {new Date().getFullYear()} Juan Marcelo Chaves — Portfolio
        </div>
      </Container>
    </footer>
  );
}
