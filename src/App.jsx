import "./App.css";

const projects = [
  {
    title: "Hyper Power Store",
    description:
      "Um e-commerce completo desenvolvido para simular uma experiência real de compra, com catálogo de produtos, navegação entre páginas, gerenciamento de estado e diferentes fluxos de interação.",
    image: "/hyper-power-store.png",
    link: "https://hyper-power-store-wbfo.vercel.app/menu",
    technologies: [
      "React",
      "JavaScript",
      "API REST",
      "JSON Server",
      "Context API",
    ],
  },
  {
    title: "Jornada Viagens",
    description:
      "Uma interface desenvolvida com foco em uma experiência simples, acessível e adaptável, garantindo uma boa navegação tanto em dispositivos móveis quanto em telas maiores.",
    image: "/jornada-viagens.png",
    link: "https://gabriel-borges-damiani.github.io/jornada-viagens/",
    technologies: ["Acessibilidade", "Responsividade", "Mobile First"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Context API",
  "Node.js",
  "Java",
  "API REST",
  "JSON Server",
  "SQL",
  "Tailwind CSS",
  "Styled Components",
  "Figma",
  "Git",
  "GitHub",
  "Acessibilidade",
  "Responsividade",
  "Mobile First",
];

const qualities = [
  {
    title: "Motivação",
    short: "Minha base para seguir em frente.",
    long: "Minha família, minha fé em Jesus Cristo e o desejo de construir uma vida profissional próspera são algumas das principais coisas que me motivam. Busco crescer não apenas como desenvolvedor, mas também como pessoa, construindo um futuro do qual eu possa me orgulhar.",
  },
  {
    title: "Criatividade",
    short: "Ideias antes de soluções.",
    long: "Sempre gostei de desenhar, imaginar coisas e pensar em novas ideias. Levo essa criatividade para o desenvolvimento, buscando diferentes maneiras de transformar uma ideia em uma interface interessante, intuitiva e visualmente agradável.",
  },
  {
    title: "Aprendizado",
    short: "Sempre existe algo novo para descobrir.",
    long: "Tenho curiosidade para entender como as coisas funcionam e gosto de aprender na prática. A tecnologia está sempre evoluindo, então procuro estudar, experimentar novas ferramentas e transformar cada projeto em uma oportunidade de aprendizado.",
  },
  {
    title: "Responsabilidade",
    short: "Compromisso com aquilo que faço.",
    long: "Quando assumo uma tarefa, procuro levar o trabalho a sério e entregar o melhor resultado que estiver ao meu alcance. Gosto de prestar atenção aos detalhes, cumprir minhas responsabilidades e aprender com os desafios que aparecem no caminho.",
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
            <p className="hero-role">DESENVOLVEDOR FRONTEND</p>

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
              <a
                href="/gabriel-borges-curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Baixar currículo
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-orbit orbit-one" />
            <div className="photo-orbit orbit-two" />

            <div className="photo-placeholder">
              <img src="/profile.png" alt="Gabriel Borges Damiani" />
            </div>
          </div>
        </section>

        <section id="sobre" className="section about">
          <div className="section-heading">
            <span>01</span>
            <h2>Quem sou</h2>
          </div>

          <div className="about-content">
            <div className="about-title">
              <p>
                Desenvolvedor Frontend,
                <strong> curioso por natureza.</strong>
              </p>
            </div>

            <div className="about-text">
              <p>
                Meu nome é Gabriel Borges Damiani e sou desenvolvedor Frontend,
                apaixonado por tecnologia e pela criação de experiências
                digitais. Gosto de transformar ideias em interfaces funcionais,
                bem estruturadas e agradáveis de usar.
              </p>

              <p>
                Minha jornada na programação também é uma jornada de
                aprendizado. Gosto de entender como as coisas funcionam,
                experimentar novas tecnologias e buscar maneiras melhores de
                resolver problemas.
              </p>

              <p>
                Atualmente, busco uma oportunidade profissional onde eu possa
                colocar meus conhecimentos em prática, aprender com uma equipe e
                continuar evoluindo como desenvolvedor.
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
              Minha formação como desenvolvedor vai além do domínio de
              tecnologias. Busco construir interfaces com código organizado,
              atenção à experiência do usuário e preocupação com acessibilidade,
              responsividade e Mobile First. Também valorizo princípios de
              desenvolvimento como organização, reutilização de componentes,
              manutenção do código e boas práticas, utilizando diferentes
              ferramentas e tecnologias de acordo com as necessidades de cada
              projeto.
            </p>

            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill" key={skill}>
                  <span>{skill}</span>
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
            <p className="eyebrow">EM BUSCA DE NOVAS OPORTUNIDADES</p>

            <h2>
              Pronto para o<span>próximo desafio.</span>
            </h2>

            <p>
              Estou em busca de uma oportunidade como desenvolvedor Frontend,
              onde possa aplicar meus conhecimentos, continuar evoluindo
              profissionalmente e contribuir para projetos e equipes que
              valorizem tecnologia, aprendizado e boas práticas de
              desenvolvimento.
            </p>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/gabriel-borgesd"
                className="contact-link"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>

              <a href="https://wa.me/5511995691993" className="contact-link">
                <span>WhatsApp</span>
                <span>↗</span>
              </a>

              <a
                href="mailto:damiani.gabri70@gmail.com"
                className="contact-link"
              >
                <span>E-mail</span>
                <span>↗</span>
              </a>

              <a
                href="https://github.com/Gabriel-Borges-Damiani"
                className="contact-link"
              >
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
