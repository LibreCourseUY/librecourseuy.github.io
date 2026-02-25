<template>
  <div class="contribute">
    <h1>How to Contribute</h1>
    <p class="intro">
      We welcome contributions from everyone! Whether you're a beginner or experienced developer, 
      there's a place for you in Fingdev.
    </p>

    <section class="why-contribute">
      <h2>Why Contribute?</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <span class="benefit-icon">📚</span>
          <h3>Learn New Skills</h3>
          <p>Work with real technologies used in the industry: Python, FastAPI, Vue.js, Git, and more.</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">💼</span>
          <h3>Build Your Portfolio</h3>
          <p>Add meaningful open source contributions to your CV and GitHub profile.</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">🤝</span>
          <h3>Join the Community</h3>
          <p>Connect with other students and developers who share your interests.</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">🎓</span>
          <h3>Help Others</h3>
          <p>Your contributions help incoming students navigate their engineering journey.</p>
        </div>
      </div>
    </section>

    <section class="getting-started">
      <h2>Getting Started</h2>
      <p>New to open source? Here's how to start:</p>
      
      <div class="license-note">
        <span class="note-icon">📜</span>
        <p><strong>Important:</strong> Before contributing, read and make sure you agree with the license of the repository you want to contribute to. Each project has its own license that defines how you can use, modify, and distribute the code. You can find it in the LICENSE file in the repository.</p>
      </div>
      
      <div class="steps">
        <div class="step">
          <div class="step-header">
            <span class="step-number">1</span>
            <h3>Explore the Projects</h3>
          </div>
          <p>Visit our <router-link to="/repos">Projects</router-link> page to understand what we build. Pick a project that interests you!</p>
        </div>
        
        <div class="step">
          <div class="step-header">
            <span class="step-number">2</span>
            <h3>Learn the Basics</h3>
          </div>
          <p>Check our <router-link to="/git">Git Guide</router-link> to learn how to use Git and GitHub properly.</p>
        </div>
        
        <div class="step">
          <div class="step-header">
            <span class="step-number">3</span>
            <h3>Find an Issue</h3>
          </div>
          <p>Look for issues labeled "good first issue" on our GitHub repositories. These are beginner-friendly tasks.</p>
        </div>
        
        <div class="step">
          <div class="step-header">
            <span class="step-number">4</span>
            <h3>Ask Questions</h3>
          </div>
          <p>Don't hesitate to ask questions in the Issues section. We're here to help you learn!</p>
        </div>
      </div>
    </section>

    <section class="contribution-process">
      <h2>Contribution Process</h2>
      <p>Follow these steps to make your first contribution:</p>
      
      <div class="stacked-cards">
        <div class="stacked-card">
          <div class="card-number">01</div>
          <div class="card-content">
            <h4>Fork the Repository</h4>
            <p>Click the "Fork" button on the GitHub repository to create your own copy of the project.</p>
          </div>
        </div>
        
        <div class="stacked-card">
          <div class="card-number">02</div>
          <div class="card-content">
            <h4>Clone Your Fork</h4>
            <p>Download your forked repository to your local machine.</p>
            <code>git clone https://github.com/YOUR_USERNAME/project.git</code>
          </div>
        </div>
        
        <div class="stacked-card">
          <div class="card-number">03</div>
          <div class="card-content">
            <h4>Create a Branch</h4>
            <p>Create a new branch for your changes. Don't work directly on main!</p>
            <code>git checkout -b feature/your-feature</code>
          </div>
        </div>
        
        <div class="stacked-card">
          <div class="card-number">04</div>
          <div class="card-content">
            <h4>Make Changes</h4>
            <p>Edit the code, add features, or fix bugs. Make sure your changes work correctly.</p>
          </div>
        </div>
        
        <div class="stacked-card">
          <div class="card-number">05</div>
          <div class="card-content">
            <h4>Commit Your Changes</h4>
            <p>Save your changes with a descriptive commit message.</p>
            <code>git add . && git commit -m "feat: description of changes"</code>
          </div>
        </div>
        
        <div class="stacked-card">
          <div class="card-number">06</div>
          <div class="card-content">
            <h4>Push to GitHub</h4>
            <p>Upload your changes to your forked repository.</p>
            <code>git push origin feature/your-feature</code>
          </div>
        </div>
        
        <div class="stacked-card">
          <div class="card-number">07</div>
          <div class="card-content">
            <h4>Create Pull Request</h4>
            <p>Go to the original repository and create a Pull Request. Describe your changes and submit!</p>
          </div>
        </div>
      </div>
    </section>

    <section class="guidelines">
      <h2>Contribution Guidelines</h2>
      
      <div class="guideline-section">
        <h3>Code Standards</h3>
        <ul>
          <li>Write clean, readable code</li>
          <li>Add comments for complex logic</li>
          <li>Follow existing code style conventions</li>
          <li>Test your changes before submitting</li>
        </ul>
      </div>

      <div class="guideline-section">
        <h3>Any Language is Welcome</h3>
        <p>
          You don't have to use the same languages already in the project! Want to add a Rust API to fingcomms (built with FastAPI)? Go ahead! Want to create a Python CLI tool for fingmap (built with Vue)? Be our guest!
        </p>
        <p>
          We believe in <strong>polyglot development</strong>. If your language or framework is better suited for the job, use it. We'll figure out how to integrate it.
        </p>
        <div class="example">
          <span class="example-label">Example:</span>
          <p>fingcomms is built with FastAPI (Python) + Vue.js, but if you want to add a Rust microservice for image processing or a Go CLI tool for data export, that's exactly what we want to see!</p>
        </div>
      </div>
      
      <div class="guideline-section">
        <h3>Commit Messages</h3>
        <p>We use Conventional Commits format:</p>
        <code>type: description</code>
        <ul>
          <li><code>feat:</code> New feature</li>
          <li><code>fix:</code> Bug fix</li>
          <li><code>docs:</code> Documentation</li>
          <li><code>refactor:</code> Code restructuring</li>
        </ul>
      </div>
      
      <div class="guideline-section">
        <h3>Signed Commits (Required)</h3>
        <p class="signed-warning">
          All commits must be signed. This is a <strong>mandatory requirement</strong> for contributing.
        </p>
        <div class="signed-why">
          <h4>Why Signed Commits?</h4>
          <ul>
            <li><strong>Security</strong>: Verifies that you are who you claim to be</li>
            <li><strong>Integrity</strong>: Guarantees the commit wasn't modified after creation</li>
            <li><strong>Trust</strong>: Other contributors know changes genuinely come from you</li>
            <li><strong>Professionalism</strong>: Industry best practice for open source projects</li>
          </ul>
        </div>
        <p>Set up your SSH key following our <router-link to="/git">Git Guide</router-link>.</p>
        <code>git config --global commit.gpgsign true</code>
      </div>
      
      <div class="guideline-section">
        <h3>Pull Request Requirements</h3>
        <ul>
          <li>Describe what you changed and why</li>
          <li>Include screenshots for UI changes</li>
          <li>Test that everything works</li>
          <li>Be responsive to feedback</li>
        </ul>
      </div>
    </section>

    <section class="questions">
      <h2>Have Questions?</h2>
      <p>We're here to help! You can:</p>
      <div class="question-options">
        <a href="https://github.com/fingdev/fingcomms/issues" target="_blank" class="question-card">
          <span>💬</span>
          <h4>Open an Issue</h4>
          <p>Ask questions on GitHub</p>
        </a>
        <a href="https://github.com/fingdev" target="_blank" class="question-card">
          <span>🐙</span>
          <h4>GitHub</h4>
          <p>Visit our organization</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contribute'
}
</script>

<style scoped>
.contribute h1 {
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

section {
  margin-bottom: 3rem;
}

.getting-started {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.license-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.1), rgba(167, 139, 250, 0.1));
  border: 1px solid var(--primary);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.note-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.license-note p {
  color: var(--text-primary);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.getting-started .steps {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.getting-started .step {
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 1.25rem;
}

.getting-started .step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.getting-started .step-number {
  width: 28px;
  height: 28px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.getting-started .step h3 {
  color: var(--text-primary);
  margin: 0;
  font-size: 1.1rem;
}

.getting-started .step p {
  margin: 0;
  font-size: 0.9rem;
}

.getting-started a {
  color: var(--primary);
  font-weight: 500;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

a {
  color: var(--primary);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.benefit-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.benefit-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  margin-bottom: 0.5rem;
}

.contribution-process {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.stacked-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.stacked-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
  transition: all 0.2s;
}

.stacked-card:hover {
  border-color: var(--primary);
  transform: translateX(4px);
}

.stacked-card .card-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.5;
  min-width: 40px;
}

.card-content h4 {
  color: var(--text-primary);
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.card-content p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.card-content code {
  display: block;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.75rem;
  color: var(--primary);
  overflow-x: auto;
}

.process-card code {
  display: block;
  background: var(--bg-tertiary);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--primary);
  text-align: left;
}

.process-arrow {
  color: var(--primary);
  font-size: 2rem;
  padding: 0.5rem 0;
}

.guidelines {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.guideline-section {
  margin-bottom: 1.5rem;
}

.guideline-section:last-child {
  margin-bottom: 0;
}

.guideline-section h3 {
  margin-bottom: 0.5rem;
}

.guideline-section code {
  display: inline-block;
  background: var(--bg-tertiary);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.signed-warning {
  background: var(--bg-tertiary);
  border: 1px solid var(--warning);
  border-radius: 8px;
  padding: 1rem;
  color: var(--text-primary);
}

.signed-warning strong {
  color: var(--warning);
}

.signed-why {
  margin: 1rem 0;
}

.signed-why h4 {
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.example {
  margin-top: 1rem;
  padding: 1rem;
  background: var(--bg-tertiary);
  border-radius: 8px;
  border-left: 3px solid var(--primary);
}

.example-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.signed-why ul {
  list-style: none;
}

.signed-why li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
}

.signed-why li::before {
  content: "✓";
  color: var(--success);
  margin-right: 0.5rem;
}

.guideline-section ul {
  list-style: none;
  margin-top: 0.5rem;
}

.guideline-section li {
  padding: 0.3rem 0;
  color: var(--text-secondary);
}

.guideline-section li::before {
  content: "✓";
  color: var(--success);
  margin-right: 0.5rem;
}

.beginner-list {
  list-style: none;
  margin-top: 1rem;
}

.beginner-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
}

.beginner-list li::before {
  content: "⭐";
  position: absolute;
  left: 0;
}

.question-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.question-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
}

.question-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.question-card span {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.question-card h4 {
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.question-card p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stacked-cards {
    gap: 0.5rem;
  }
  
  .stacked-card {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
  
  .stacked-card .card-number {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contribute h1 {
    font-size: 1.75rem;
  }
  
  .intro {
    font-size: 1rem;
  }
  
  h2 {
    font-size: 1.3rem;
  }
  
  .step-number {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
  
  .process-vertical {
    padding: 0 1rem;
  }
  
  .process-step {
    padding: 1.25rem 1rem;
  }
  
  .process-step h4 {
    font-size: 1rem;
  }
  
  .process-step code {
    font-size: 0.75rem;
  }
  
  .flow-arrow {
    font-size: 1.25rem;
  }
  
  .guidelines {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .guideline-section {
    padding: 0;
  }
  
  .question-options {
    grid-template-columns: 1fr;
  }
  
  .signed-warning {
    margin: 0 1rem;
  }
}

@media (max-width: 480px) {
  .contribute h1 {
    font-size: 1.75rem;
  }
  
  .intro {
    font-size: 1rem;
  }
  
  h2 {
    font-size: 1.3rem;
  }
}
</style>
