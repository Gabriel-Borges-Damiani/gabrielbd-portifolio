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

      <main> 
                
        <section id="inicio" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">DESENVOLVEDOR & CRIADOR</p>

            <h1>
              Gabriel
              <span>Borges Damiani.</span>
            </h1>

            <p className="hero-description">
              Transformando ideias em experiências digitais modernas,
              funcionais e memoráveis.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="button button-primary">
                Conheça meu trabalho
                <span>↓</span>
              </a>

              <a href="#contato" className="button button-secondary">
                Entre em contato
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-orbit orbit-one" />
            <div className="photo-orbit orbit-two" />

            <div className="photo-placeholder">
              <span>SUA FOTO</span>
            </div>
          </div>
        </section>

        
        <section id="sobre" className="section about">
          <div className="section-heading">
            <span>01</span>
            <h2>Sobre mim</h2>
          </div>

          <div className="about-content">
            <div className="about-title">
              <p>
                Mais do que escrever código,
                <strong> gosto de criar.</strong>
              </p>
            </div>

            <div className="about-text">
              <p>
                Olá! Eu sou Gabriel Borges Damiani. Sou apaixonado por
                tecnologia, desenvolvimento e pela possibilidade de transformar
                ideias em produtos digitais.
              </p>

              <p>
                Aqui você pode colocar sua trajetória, sua formação, seus
                interesses e aquilo que acredita que diferencia seu trabalho.
              </p>

              <p>
                Este espaço é sobre quem eu sou, o que faço e para onde quero
                levar minha carreira.
              </p>
            </div>
          </div>
        </section>
      </main>
    