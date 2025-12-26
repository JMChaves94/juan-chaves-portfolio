// src/data/site.js

export const site = {
  name: "Juan Marcelo Chaves",
  role: "Frontend Developer (Web & Apps)",
  tagline:
    "Desarrollo interfaces modernas y productos web con foco en UI, performance y entrega real.",
  location: "Buenos Aires, Argentina",
  links: {
    email: "juan.chaves.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-marcelo-chaves",
    freelancer: "https://www.freelancer.com/u/LittleSomber",
    github: "https://github.com/JMChaves94",
  },
};

export const projects = [
  {
    id: "kalmares",
    title: "Kalmáres",
    subtitle: "Sitio web en producción",
    description:
      "Diseño y desarrollo de sitio web responsive para centro de rehabilitación. Enfoque en identidad visual, claridad comercial y experiencia de usuario.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind"],
    links: { demo: "https://kalmares.com.ar" },
    featured: true,
  },
  {
    id: "izi",
    title: "IZI Studios",
    subtitle: "Emprendimiento propio (Frontend)",
    description:
      "Diseño y desarrollo del sitio web del emprendimiento. Trabajo integral en identidad visual, UI y despliegue.",
    stack: ["React", "CSS", "Vite"],
    links: { demo: "https://www.izistudios.com" },
    featured: true,
  },
  {
  id: "cluster-moron",
  title: "Cluster Morón",
  subtitle: "Sitio web institucional del clúster",
  description:
    "Diseño y desarrollo del sitio web para el Clúster Energético y Minero de Morón, plataforma de presentación institucional con secciones de misión, rubros, empresas y contacto.",
  stack: ["HTML", "CSS", "JavaScript", "UI", "Responsive"],
  links: { demo: "https://clustermoron.com/", repo: "" },
  featured: true,
},

  // ───── Secundarios ─────

  {
    id: "cutflow",
    title: "CutFlow",
    subtitle: "Software / Web App",
    description:
      "Participación en el rediseño de interfaz y funcionalidades orientadas a la operación diaria.",
    stack: ["Blazor", "C#", ".NET", "SQL"],
    links: {},
    featured: false,
  },
  {
    id: "laiadesk",
    title: "LaiaDesk",
    subtitle: "Full Stack + IA",
    description:
      "Desarrollo de funcionalidades web e integración de IA para automatización de tareas.",
    stack: ["Laravel", "PHP", "Livewire", "MySQL", "IA"],
    links: {},
    featured: false,
  },
  {
    id: "noiric",
    title: "Noiric",
    subtitle: "Frontend / UI (Excel Add-in)",
    description:
      "Trabajo de interfaz y experiencia de usuario para complemento de Excel.",
    stack: ["UI", "JavaScript", "Frontend"],
    links: {},
    featured: false,
  },
  {
    id: "diariohuellas",
    title: "Diario Huellas",
    subtitle: "Web Designer (WordPress)",
    description:
      "Diseño y mantenimiento en WordPress, mejoras de SEO y rendimiento.",
    stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    links: { demo: "https://www.diariohuellas.com.ar" },
    featured: false,
  },
];
