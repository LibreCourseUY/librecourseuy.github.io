<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Fingdev</h1>
      <p class="hero-subtitle">
        Open Source projects made by students, for students at the Faculty of Engineering (UdelaR)
      </p>
      <div class="hero-buttons">
        <router-link to="/repos" class="btn btn-primary">Explore Projects</router-link>
        <router-link to="/git" class="btn btn-secondary">Learn Git</router-link>
      </div>
    </section>

    <section class="english-section">
      <h2>¿Por qué todo está en inglés?</h2>
      <p>
        Puede parecer raro ver todo en ingl&eacute;s en un sitio para estudiantes uruguayos. 
        Aqu&iacute; te explicamos el razonamiento:
      </p>
      <ul class="english-reasons">
        <li>
          <strong>El inglés es el idioma de la programación</strong>: 
          La mayoría de la documentación, tutoriales y recursos están en inglés. 
          Dominarlo te abre puertas a nivel mundial.
        </li>
        <li>
          <strong>Buscar soluciones en inglés</strong>: 
          Cuando tengas un error, el 90% de las respuestas están en Stack Overflow y documentación en inglés.
        </li>
        <li>
          <strong>Preparación profesional</strong>: 
          Las empresas tech contratan personas que pueden trabajar en inglés. 
          Es una habilidad fundamental.
        </li>
        <li>
          <strong>Comunidad global</strong>: 
          Al contribuir a proyectos open source, vas a interactuar con personas de todo el mundo.
        </li>
      </ul>
      <p class="english-tip">
        <em>💡 Consejo: No necesitas ser fluido. Con poder leer y escribir lo básico ya es suficiente para empezar.</em>
      </p>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Learn by Doing</h3>
        <p>Contribute to real projects and learn industry-standard tools like Git, GitHub, and modern frameworks.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🤝</div>
        <h3>Community Driven</h3>
        <p>Built by students, for students. Join a community of learners and help others just like you.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3>Build Your Portfolio</h3>
        <p>Get real-world experience and add meaningful projects to your developer portfolio.</p>
      </div>
    </section>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>
        Fingdev aims to help incoming engineering students at UdelaR:
      </p>
      <ul class="mission-list">
        <li>Learn to use Git and GitHub professionally</li>
        <li>Contribute to open source projects</li>
        <li>Build practical skills for their future careers</li>
        <li>Connect with other students and form study groups</li>
      </ul>
    </section>

    <section class="challenges">
      <h2>Personal Challenges</h2>
      <p>
        Want to start contributing but don't know where to begin? These challenges are code-agnostic, 
        they work with any language or technology:
      </p>
      <div class="challenges-grid">
        <div class="challenge-card">
          <h3>Challenge 1: README Translator</h3>
          <p>
            Pick an open source project you like and translate its README to Spanish. 
            It's a great way to contribute and learn about the project.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 2: Bug Hunter</h3>
          <p>
            Browse the "Issues" tab of any repository. Try to reproduce a bug 
            and if you can, suggest a solution. You don't need code to get started.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 3: Documentation Hero</h3>
          <p>
            Find something in a project that isn't documented and add a usage example 
            or explain how it works. Documentation always needs improvements.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 4: First Issue</h3>
          <p>
            Look for Issues with labels "good first issue" or "help wanted" in any repository. 
            These are problems designed for beginners. Start with something small.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 5: Your Own Project</h3>
          <p>
            Have an idea? Create a repository, write a good README, and publish your code. 
            It doesn't have to be perfect, it just has to exist.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 6: Code Review</h3>
          <p>
            Ask for read access to a repository and review others' code. 
            You don't need to approve everything, suggesting improvements helps too.
          </p>
        </div>
      </div>
    </section>

    <section class="quick-links">
      <h2>Our Projects</h2>
      <div class="links-grid">
        <a href="https://github.com/fingdev/fingdev.github.io" target="_blank" class="link-card">
          <h4>fingdev.github.io</h4>
          <p>This website - The Fingdev community portal</p>
        </a>
        <a href="https://github.com/fingdev/fingcomms" target="_blank" class="link-card">
          <h4>fingcomms</h4>
          <p>Directory of Fing student groups</p>
        </a>
        <a href="https://github.com/fingdev/fingdb" target="_blank" class="link-card">
          <h4>fingDB</h4>
          <p>Central database with course information</p>
        </a>
        <a href="https://github.com/fingdev/fingmap" target="_blank" class="link-card">
          <h4>fingmap</h4>
          <p>Interactive campus map</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #58a6ff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.feature-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s, border-color 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
}

.mission {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.mission h2 {
  margin-bottom: 1rem;
}

.mission-list {
  list-style: none;
  margin-top: 1rem;
}

.mission-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.mission-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
}

.english-section {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.english-section h2 {
  margin-bottom: 1rem;
}

.english-section > p {
  margin-bottom: 1rem;
}

.english-reasons {
  list-style: none;
  margin: 1rem 0;
}

.english-reasons li {
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.english-reasons li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--primary);
}

.english-tip {
  margin-top: 1.5rem;
  color: var(--text-secondary);
}

.challenges {
  margin: 2rem 0;
}

.challenges h2 {
  margin-bottom: 1rem;
}

.challenges > p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.challenge-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.challenge-card:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}

.challenge-card h3 {
  color: var(--primary);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.challenge-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

.documentation {
  margin: 2rem 0;
}

.documentation h2 {
  margin-bottom: 1rem;
}

.documentation > p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.doc-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.25rem;
  text-decoration: none;
  transition: all 0.2s;
}

.doc-card:hover {
  border-color: var(--primary);
  transform: translateX(4px);
}

.doc-card h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.doc-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
}

.quick-links h2 {
  margin-bottom: 1.5rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.link-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
}

.link-card:hover {
  border-color: var(--primary);
  transform: translateX(4px);
}

.link-card h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.link-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>
