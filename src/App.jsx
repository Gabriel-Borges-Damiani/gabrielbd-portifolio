import "./App.css";

const projects = [
  {
    title: "Projeto",
    description:
      ".",
    image: "",
    link: "#",
    technologies: ["React", "JavaScript"],
  },
  {
    title: "Projeto",
    description:
      ".",
    image: "",
    link: "#",
    technologies: ["React", "CSS"],
  },
  {
    title: "Projeto",
    description:
      ".",
    image: "",
    link: "#",
    technologies: ["JavaScript", "API"],
  },
];

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "UI/UX",
  "Responsividade",
];

const qualities = [
  {
    title: "Motivação",
    short: ".",
    long: ".",
  },
  {
    title: "Criatividade",
    short: ".",
    long: ".",
  },
  {
    title: "Aprendizado",
    short: ".",
    long: ".",
  },
  {
    title: "Responsabilidade",
    short: ".",
    long: ".",
  },
];

function App() {
  return (
    <div className="app">
      <div className="stars" aria-hidden="true">
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
      </div>

      <header className="header">
        <a href="#inicio" className="logo" aria-label="GBD - início">
          GBD
        </a>

        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#competencias">Competências</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main></main>