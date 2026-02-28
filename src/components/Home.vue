<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to LibrecourseUY</h1>
      <p class="hero-subtitle">
        Open Source projects made by students, for students.
      </p>
      <div class="hero-buttons">
        <router-link to="/learn" class="btn btn-primary">Start to Learn</router-link>
        <router-link to="/contribute" class="btn btn-secondary">Start Contributing</router-link>
      </div>
    </section>

    <section class="english-section">
      <h2>¿Por qué todo está en inglés?</h2>
      <p>
        Puede parecer raro ver todo en ingl&eacute;s en un sitio para estudiantes uruguayos. 
        Te explicamos porqu&eacute;:
      </p>
      <ul class="english-reasons">
        <li>
          <strong>El inglés es el idioma de la programación</strong>: 
          La mayoría de la documentación, tutoriales y recursos están en inglés. 
          Dominarlo te abre puertas a nivel mundial.
        </li>
        <li>
          <strong>Buscar soluciones en inglés</strong>: 
          Cuando tengas un error, el 90% de las respuestas están en Stack Overflow / Reddit y documentación en inglés.
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
        LibrecourseUY aims to help incoming computer engineering students at UdelaR:
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
        Want to learn to code but don't know where to begin? These challenges are language-agnostic, 
        pick any programming language and start learning:
      </p>
      <div class="challenges-grid">
        <div class="challenge-card">
          <h3>Challenge 1: Hello World</h3>
          <p>
            Write a program that prints "Hello, World!" to the screen. 
            This is the classic first program in any language. Research why this tradition exists.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 2: Calculator</h3>
          <p>
            Build a simple calculator that can add, subtract, multiply, and divide two numbers.
            Learn about functions, user input, and basic arithmetic operations.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 3: Number Guessing Game</h3>
          <p>
            Create a game where the computer picks a random number and you have to guess it.
            Learn about loops, conditionals, and generating random numbers.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 4: Todo List</h3>
          <p>
            Build a todo list application. Learn about arrays/lists, adding/removing items,
            and storing data. Start simple and add features as you learn.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 5: Palindrome Checker</h3>
          <p>
            Write a program that checks if a word is a palindrome (reads the same forwards and backwards).
            Learn about strings, loops, and string manipulation.
          </p>
        </div>
        <div class="challenge-card">
          <h3>Challenge 6: FizzBuzz</h3>
          <p>
            The classic coding interview question. Print numbers 1-100, but for multiples of 3 print "Fizz",
            for multiples of 5 print "Buzz", and for both print "FizzBuzz". Learn about modulo and conditionals.
          </p>
        </div>
      </div>
    </section>

    <section class="quick-links">
      <h2>Our Projects</h2>
      <div class="links-grid">
        <a href="https://github.com/fingdev/fingdev.github.io" target="_blank" class="link-card">
          <h4>fingdev.github.io</h4>
          <p>This website - The LibrecourseUY community portal</p>
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

    <router-link to="/contribute" class="contribute-popup">
      <span>👀</span> See something you don't like? Contribute and change it!
    </router-link>
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
  .hero {
    padding: 2rem 0;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    padding: 0 1rem;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
  
  .features {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .mission {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .english-section {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .challenges-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .docs-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .feature-card,
  .challenge-card,
  .doc-card,
  .link-card {
    padding: 1rem;
  }
}

.contribute-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--primary);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  z-index: 100;
}

.contribute-popup:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .contribute-popup {
    bottom: 10px;
    right: 10px;
    left: 10px;
    justify-content: center;
    font-size: 0.8rem;
  }
}
</style>
