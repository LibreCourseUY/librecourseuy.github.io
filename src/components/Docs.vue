<template>
  <div class="docs-page">
    <h1>Documentation</h1>
    <p class="intro">
      Essential resources for your daily development workflow.
    </p>

    <section class="docs-category">
      <h2>Official Documentation</h2>
      <div class="docs-grid">
        <a href="https://developer.mozilla.org/" target="_blank" class="doc-card">
          <h4>MDN Web Docs</h4>
          <p>Complete documentation for HTML, CSS, JavaScript and web APIs</p>
        </a>
        <a href="https://docs.github.com/" target="_blank" class="doc-card">
          <h4>GitHub Docs</h4>
          <p>Everything about Git, GitHub and collaboration</p>
        </a>
        <a href="https://git-scm.com/doc" target="_blank" class="doc-card">
          <h4>Git Docs</h4>
          <p>Official Git documentation</p>
        </a>
        <a href="https://docs.python.org/3/" target="_blank" class="doc-card">
          <h4>Python Docs</h4>
          <p>Official Python documentation</p>
        </a>
        <a href="https://docs.rs/" target="_blank" class="doc-card">
          <h4>Rust Docs</h4>
          <p>Rust programming language documentation</p>
        </a>
        <a href="https://docs.docker.com/" target="_blank" class="doc-card">
          <h4>Docker Docs</h4>
          <p>Containerization platform documentation</p>
        </a>
      </div>
    </section>

    <section class="docs-category">
      <h2>Commit Signing</h2>
      <div class="docs-grid">
        <router-link to="/docs/signing" class="doc-card">
          <h4>Signed Commits Guide</h4>
          <p>Learn why signed commits are mandatory and how to set them up</p>
        </router-link>
        <router-link to="/docs/licensing" class="doc-card">
          <h4>Licensing Guide</h4>
          <p>Understanding open source licenses and their implications</p>
        </router-link>
        <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification" target="_blank" class="doc-card">
          <h4>GitHub Verification Docs</h4>
          <p>Official GitHub documentation on commit signature verification</p>
        </a>
      </div>
    </section>

    <section class="docs-category">
      <h2>API & Reference</h2>
      <div class="docs-grid">
        <a href="https://devdocs.io/" target="_blank" class="doc-card">
          <h4>DevDocs</h4>
          <p>API documentation browser with unified search</p>
        </a>
        <a href="https://hackterms.com/" target="_blank" class="doc-card">
          <h4>HackTerms</h4>
          <p>Dictionary of programming terms</p>
        </a>
        <a href="https://stackoverflow.com/" target="_blank" class="doc-card">
          <h4>Stack Overflow</h4>
          <p>Community Q&A platform</p>
        </a>
        <a href="https://www.postman.com/" target="_blank" class="doc-card">
          <h4>Postman</h4>
          <p>API testing and development platform</p>
        </a>
        <a href="https://rapidapi.com/" target="_blank" class="doc-card">
          <h4>RapidAPI</h4>
          <p>API marketplace for public APIs</p>
        </a>
      </div>
    </section>

    <section class="docs-category">
      <h2>Learning Resources</h2>
      <div class="docs-grid">
        <a href="https://www.freecodecamp.org/" target="_blank" class="doc-card">
          <h4>freeCodeCamp</h4>
          <p>Free coding curriculum and certifications</p>
        </a>
        <a href="https://www.codecademy.com/" target="_blank" class="doc-card">
          <h4>Codecademy</h4>
          <p>Interactive programming courses</p>
        </a>
        <a href="https://www.udemy.com/" target="_blank" class="doc-card">
          <h4>Udemy</h4>
          <p>Online courses platform</p>
        </a>
        <a href="https://www.coursera.org/" target="_blank" class="doc-card">
          <h4>Coursera</h4>
          <p>University-level courses online</p>
        </a>
        <a href="https://exercism.org/" target="_blank" class="doc-card">
          <h4>Exercism</h4>
          <p>Coding exercises with mentorship</p>
        </a>
        <a href="https://leetcode.com/" target="_blank" class="doc-card">
          <h4>LeetCode</h4>
          <p>Programming practice and interview prep</p>
        </a>
      </div>
    </section>

    <section class="docs-category">
      <h2>Tools</h2>
      <div class="docs-grid">
        <a href="https://git-scm.com/book/en/v2" target="_blank" class="doc-card">
          <h4>Pro Git Book</h4>
          <p>Free online book covering everything about Git</p>
        </a>
        <a href="https://github.com/skills" target="_blank" class="doc-card">
          <h4>GitHub Skills</h4>
          <p>Interactive courses from GitHub</p>
        </a>
        <a href="https://learngitbranching.js.org/" target="_blank" class="doc-card">
          <h4>Learn Git Branching</h4>
          <p>Interactive visual git tutorial</p>
        </a>
        <a href="https://regexr.com/" target="_blank" class="doc-card">
          <h4>RegExr</h4>
          <p>Regular expression testing tool</p>
        </a>
        <a href="https://jsonformatter.org/" target="_blank" class="doc-card">
          <h4>JSON Formatter</h4>
          <p>JSON validation and formatting</p>
        </a>
        <a href="https://crontab.guru/" target="_blank" class="doc-card">
          <h4>Crontab Guru</h4>
          <p>Cron schedule expression editor</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Docs'
}
</script>

<style scoped>
.docs-page {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #58a6ff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
}

.docs-category {
  margin-bottom: 3rem;
}

.docs-category h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.doc-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
}

.doc-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.doc-card h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.doc-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}
</style>
