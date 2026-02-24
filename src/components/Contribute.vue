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
      
      <div class="process-vertical">
        <div class="step-with-arrow">
          <div class="process-step">
            <div class="step-number">01</div>
            <h4>Fork</h4>
            <p>Click "Fork" on GitHub to create your own copy</p>
          </div>
          <div class="flow-arrow">↓</div>
        </div>
        
        <div class="step-with-arrow">
          <div class="process-step">
            <div class="step-number">02</div>
            <h4>Clone</h4>
            <p>Download your fork to local machine</p>
            <code>git clone https://github.com/YOUR_USERNAME/project.git</code>
          </div>
          <div class="flow-arrow">↓</div>
        </div>
        
        <div class="step-with-arrow">
          <div class="process-step">
            <div class="step-number">03</div>
            <h4>Branch</h4>
            <p>Create a new branch for your changes</p>
            <code>git checkout -b feature/your-feature</code>
          </div>
          <div class="flow-arrow">↓</div>
        </div>
        
        <div class="step-with-arrow">
          <div class="process-step">
            <div class="step-number">04</div>
            <h4>Edit</h4>
            <p>Make your changes in the code and test them</p>
          </div>
          <div class="flow-arrow">↓</div>
        </div>
        
        <div class="step-with-arrow">
          <div class="process-step">
            <div class="step-number">05</div>
            <h4>Commit</h4>
            <p>Save your changes with a descriptive message</p>
            <code>git add . && git commit -m "feat: add new feature"</code>
          </div>
          <div class="flow-arrow">↓</div>
        </div>
        
        <div class="step-with-arrow">
          <div class="process-step">
            <div class="step-number">06</div>
            <h4>Push</h4>
            <p>Upload your changes to GitHub</p>
            <code>git push origin feature/your-feature</code>
          </div>
          <div class="flow-arrow">↓</div>
        </div>
        
        <div class="process-step">
          <div class="step-number">07</div>
          <h4>Pull Request</h4>
          <p>Go to your fork on GitHub and click "Create Pull Request". Fill in the template and submit!</p>
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

.steps {
  margin-top: 1.5rem;
}

.step {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.step-number {
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.step h3 {
  margin: 0;
}

.process-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: 2rem;
}

.step-with-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flow-arrow {
  color: var(--primary);
  font-size: 1.5rem;
  padding: 0.25rem 0;
}

.process-step {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem 2.5rem;
  text-align: center;
  width: 100%;
  max-width: 700px;
  transition: all 0.2s;
}

.process-step:hover {
  border-color: var(--primary);
  transform: translateY(-3px);
}

.process-step .step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.4;
  margin-bottom: 0.5rem;
}

.process-step h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.process-step p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.process-step code {
  display: block;
  background: var(--bg-tertiary);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--primary);
  text-align: left;
  overflow-x: auto;
  white-space: pre;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.75rem;
  margin-top: 2rem;
  overflow-x: auto;
}

.process-grid .process-step {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 140px;
  transition: all 0.2s;
}

.process-grid .process-step:hover {
  border-color: var(--primary);
  transform: translateY(-3px);
}

.process-grid .step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.6;
}

.process-grid .step-body h4 {
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.process-grid .step-body p {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  line-height: 1.4;
}

.process-grid .step-body code {
  display: block;
  background: var(--bg-tertiary);
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: pre;
  color: var(--primary);
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.process-step-old {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
}

.process-step-old h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.process-step-old code {
  display: block;
  background: var(--bg-tertiary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  white-space: pre-wrap;
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
</style>
