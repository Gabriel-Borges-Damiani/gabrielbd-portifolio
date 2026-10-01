import "./App.css";

const projects = [
  {
    title: "Projeto",
    description: ".",
    image: "",
    link: "#",
    technologies: ["React", "JavaScript"],
  },
  {
    title: "Projeto",
    description: ".",
    image: "",
    link: "#",
    technologies: ["React", "CSS"],
  },
  {
    title: "Projeto",
    description: ".",
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
              Transformando ideias em experiências digitais modernas, funcionais
              e memoráveis.
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

        <section id="projetos" className="section projects">
          <div className="section-heading">
            <span>02</span>
            <h2>Projetos</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Preview do projeto ${project.title}`}
                    />
                  ) : (
                    <div className="image-placeholder">
                      <span>PROJECT {String(index + 1).padStart(2, "0")}</span>
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <div className="project-top">
                    <h3>{project.title}</h3>

                    <a
                      href={project.link}
                      aria-label={`Ver projeto ${project.title}`}
                    >
                      ↗
                    </a>
                  </div>

                  <p>{project.description}</p>

                  <div className="technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="competencias" className="section skills">
          <div className="section-heading">
            <span>03</span>
            <h2>Competências</h2>
          </div>

          <div className="skills-content">
            <p className="skills-intro">
              Ferramentas e tecnologias que fazem parte da minha jornada.
            </p>

            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill" key={skill}>
                  <span>{skill}</span>
                  <span className="skill-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section qualities">
          <div className="section-heading">
            <span>04</span>
            <h2>Por que me contratar?</h2>
          </div>

          <p className="qualities-intro">
            Algumas características que levo para cada projeto.
          </p>

          <div className="qualities-grid">
            {qualities.map((quality) => (
              <article className="quality-card" key={quality.title}>
                <div className="quality-short">
                  <span className="quality-icon">✦</span>
                  <h3>{quality.title}</h3>
                  <p>{quality.short}</p>
                </div>

                <div className="quality-expanded">
                  <h3>{quality.title}</h3>
                  <p>{quality.long}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section contact">
          <div className="contact-inner">
            <p className="eyebrow">VAMOS CONVERSAR?</p>

            <h2>
              Tem uma ideia?
              <span>Vamos construir.</span>
            </h2>

            <p>
              Estou aberto a novos projetos, oportunidades e conversas sobre
              tecnologia.
            </p>

            <div className="contact-links">
              <a href="#" className="contact-link">
                <span>LinkedIn</span>
                <span>↗</span>
              </a>

              <a href="#" className="contact-link">
                <span>WhatsApp</span>
                <span>↗</span>
              </a>

              <a href="mailto:seuemail@email.com" className="contact-link">
                <span>E-mail</span>
                <span>↗</span>
              </a>

              <a href="#" className="contact-link">
                <span>GitHub</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-logo">GBD</div>

        <p>© {new Date().getFullYear()} Gabriel Borges Damiani.</p>

        <a href="#inicio" aria-label="Voltar ao início">
          ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
