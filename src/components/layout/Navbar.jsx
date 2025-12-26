import Container from "./Container";
import { site } from "../../data/site";
import { scrollToId } from "../../utils/scrollToId";

export default function Navbar() {
  const go = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header className="navbar">
      <Container>
        <div className="navInner">
          <strong>{site.name}</strong>

          <nav className="navLinks">
            <a href="#projects" onClick={go("projects")}>Proyectos</a>
            <a href="#contact" onClick={go("contact")}>Contacto</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
