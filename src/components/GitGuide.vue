<template>
  <div class="git-guide">
    <h1>Git & GitHub Guide</h1>
    <p class="intro">
      A beginner-friendly guide to understanding Git and GitHub, essential tools for every developer.
    </p>

    <section class="what-is-git">
      <h2>What is Git?</h2>
      <p>
        <strong>Git</strong> is a version control system that helps you track changes in your code. 
        Think of it as a time machine for your projects, you can go back to any previous version, 
        see who made what changes, and collaborate with others without conflicts.
      </p>
      <div class="key-points">
        <div class="point">
          <span class="icon">📸</span>
          <div>
            <h4>Snapshot History</h4>
            <p>Git takes "snapshots" of your project, so you can always return to a previous version.</p>
          </div>
        </div>
        <div class="point">
          <span class="icon">🌿</span>
          <div>
            <h4>Branching</h4>
            <p>Create separate "branches" to work on features without affecting the main project.</p>
          </div>
        </div>
        <div class="point">
          <span class="icon">🤝</span>
          <div>
            <h4>Collaboration</h4>
            <p>Multiple people can work on the same project simultaneously.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="what-is-github">
      <h2>What is GitHub?</h2>
      <p>
        <strong>GitHub</strong> is a cloud platform that hosts Git repositories. It provides:
      </p>
      <ul class="github-features">
        <li>A web interface to view your code</li>
        <li>Tools for code review (Pull Requests)</li>
        <li>Issue tracking for bugs and features</li>
        <li>Project management tools</li>
        <li>Collaboration features (wikis, discussions)</li>
      </ul>
    </section>

    <section class="installation">
      <h2>Installing Git</h2>
      
      <div class="install-group">
        <h3>Debian-based (Ubuntu, Debian, Linux Mint)</h3>
        <div class="code-block">
          <code>sudo apt update
sudo apt install git</code>
        </div>
      </div>

      <div class="install-group">
        <h3>Arch-based (Arch Linux, Manjaro, EndeavourOS)</h3>
        <div class="code-block">
          <code>sudo pacman -S git</code>
        </div>
      </div>

      <div class="install-group">
        <h3>Fedora</h3>
        <div class="code-block">
          <code>sudo dnf install git</code>
        </div>
      </div>

      <div class="install-group">
        <h3>Verify Installation</h3>
        <div class="code-block">
          <code>git --version</code>
        </div>
      </div>

      <div class="install-group">
        <h3>Configure Git</h3>
        <div class="code-block">
          <code>git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"</code>
        </div>
      </div>
    </section>

    <section class="ssh-setup">
      <h2>GPG Key Setup</h2>
      <p class="mandatory-badge">Mandatory for Contributing</p>
      <p class="warning">
        A GPG key is <strong>required</strong> to contribute to our repositories. It signs your commits cryptographically.
      </p>

      <div class="install-group">
        <h3>Install GPG</h3>
        <p class="install-label">Debian/Ubuntu:</p>
        <div class="code-block">
          <code>sudo apt install gnupg</code>
        </div>
        <p class="install-label">Arch:</p>
        <div class="code-block">
          <code>sudo pacman -S gnupg</code>
        </div>
        <p class="install-label">Fedora:</p>
        <div class="code-block">
          <code>sudo dnf install gnupg</code>
        </div>
      </div>

      <div class="install-group">
        <h3>Generate GPG Key</h3>
        <div class="code-block">
          <code>gpg --full-generate-key</code>
        </div>
        <p>Choose RSA (option 1), 4096 bits, set expiration, enter your name and email.</p>
      </div>

      <div class="install-group">
        <h3>Get Your Key ID</h3>
        <div class="code-block">
          <code>gpg --list-secret-keys --keyid-format=long</code>
        </div>
        <p>Copy the key ID after the slash (e.g., 3AA5C34371567BD2)</p>
      </div>

      <div class="install-group">
        <h3>Add to GitHub</h3>
        <div class="code-block">
          <code>gpg --armor --export 3AA5C34371567BD2</code>
        </div>
        <p>Copy the output and go to GitHub → Settings → SSH and GPG keys → New GPG key.</p>
      </div>

      <div class="install-group">
        <h3>Configure Git</h3>
        <div class="code-block">
          <code>git config --global gpg.program gpg
git config --global user.signingkey 3AA5C34371567BD2
git config --global commit.gpgsign true</code>
        </div>
      </div>

      <p class="signed-commits-note">
        <router-link to="/docs/signing">Learn more about signed commits and why they are required</router-link>
      </p>

      <p class="recommendation">
        <strong>Also recommended:</strong> Set up an SSH key for password-free authentication. 
        See <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh" target="_blank">GitHub SSH Guide</a>.
      </p>
    </section>

    <section class="basic-commands">
      <h2>Basic Git Commands</h2>
      
      <div class="command-group">
        <h3>1. Starting a Project</h3>
        <div class="code-block">
          <code>git clone https://github.com/USERNAME/REPOSITORY_NAME.git
git init</code>
        </div>
      </div>

      <div class="command-group">
        <h3>2. Making Changes</h3>
        <div class="code-block">
          <code>git status
git diff
git add filename.py
git add .
git commit -m "Description of what you changed"</code>
        </div>
      </div>

      <div class="command-group">
        <h3>3. Working with Branches</h3>
        <div class="code-block">
          <code>git checkout -b feature/my-new-feature
git checkout branch-name
git branch
git branch -d branch-name</code>
        </div>
      </div>

      <div class="command-group">
        <h3>4. Syncing with GitHub</h3>
        <div class="code-block">
          <code>git push origin branch-name
git pull origin branch-name
git push -u origin branch-name</code>
        </div>
      </div>
    </section>

    <section class="workflow">
      <h2>Standard Workflow: Fork & PR</h2>
      <p>This is the typical workflow for contributing to open source projects:</p>
      
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Fork the Repository</h4>
            <p>Click the "Fork" button on GitHub to create your own copy of the project.</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Clone Your Fork</h4>
            <p>Download your forked repository to your computer:</p>
            <code>git clone https://github.com/YOUR_USERNAME/fingcomms.git</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Create a Branch</h4>
            <p>Never work on the main branch! Create a new branch for your changes:</p>
            <code>git checkout -b fix/bug-description</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Make Changes & Commit</h4>
            <p>Edit files, then save your changes:</p>
            <code>git add .
git commit -m "fix: description of fix"</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Push to GitHub</h4>
            <code>git push origin fix/bug-description</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">6</div>
          <div class="step-content">
            <h4>Create Pull Request</h4>
            <p>Go to your fork on GitHub and click "Create Pull Request". Explain your changes and submit!</p>
          </div>
        </div>
      </div>
    </section>

    <section class="commit-messages">
      <h2>Commit Message Conventions</h2>
      <p>We follow the Conventional Commits format:</p>
      <div class="code-block">
        <code>type: description

# Examples:
feat: add user login feature
fix: resolve login error message
docs: update installation instructions
refactor: simplify authentication code</code>
      </div>
      <table class="commit-types">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>feat:</code></td><td>New feature</td></tr>
          <tr><td><code>fix:</code></td><td>Bug fix</td></tr>
          <tr><td><code>docs:</code></td><td>Documentation</td></tr>
          <tr><td><code>style:</code></td><td>Code formatting</td></tr>
          <tr><td><code>refactor:</code></td><td>Code restructuring</td></tr>
          <tr><td><code>test:</code></td><td>Adding tests</td></tr>
          <tr><td><code>chore:</code></td><td>Maintenance tasks</td></tr>
        </tbody>
      </table>
    </section>

    <section class="resources">
      <h2>Additional Resources</h2>
      <div class="resource-links">
        <a href="https://git-scm.com/book/en/v2" target="_blank" class="resource-card">
          <h4>Pro Git Book</h4>
          <p>Free online book covering everything about Git</p>
        </a>
        <a href="https://github.com/skills" target="_blank" class="resource-card">
          <h4>GitHub Skills</h4>
          <p>Interactive courses from GitHub</p>
        </a>
        <a href="https://learngitbranching.js.org/" target="_blank" class="resource-card">
          <h4>Learn Git Branching</h4>
          <p>Interactive visual git tutorial</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GitGuide'
}
</script>

<style scoped>
.git-guide {
  max-width: 900px;
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

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

h3 {
  color: var(--primary);
  margin: 1.5rem 0 0.5rem;
}

p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.point {
  display: flex;
  gap: 1rem;
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.point .icon {
  font-size: 2rem;
}

.point h4 {
  margin-bottom: 0.3rem;
}

.github-features {
  list-style: none;
  margin-top: 1rem;
}

.github-features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.github-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
}

.command-group {
  margin-bottom: 2rem;
}

.code-block {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  color: var(--text-primary);
  white-space: pre;
  display: block;
  line-height: 1.8;
}

.steps {
  margin-top: 1.5rem;
}

.step {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h4 {
  margin-bottom: 0.5rem;
}

.step-content code {
  display: block;
  margin-top: 0.5rem;
  background: var(--bg-tertiary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.85rem;
}

.commit-types {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}

.commit-types th,
.commit-types td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

.commit-types th {
  background: var(--bg-secondary);
}

.commit-types code {
  background: var(--bg-tertiary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.installation {
  margin-bottom: 3rem;
}

.install-group {
  margin-bottom: 1.5rem;
}

.install-group h3 {
  color: var(--primary);
  margin-bottom: 0.75rem;
}

.install-group p {
  margin-top: 0.5rem;
  color: var(--text-secondary);
}

.signed-commits-note {
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.signed-commits-note a {
  color: var(--primary);
  font-weight: 500;
}

.recommendation {
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.recommendation strong {
  color: var(--text-primary);
}

.recommendation a {
  color: var(--primary);
}

.ssh-setup {
  margin-bottom: 3rem;
}

.mandatory-badge {
  display: inline-block;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.install-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  margin-top: 0.75rem;
}

.install-label:first-of-type {
  margin-top: 0;
}

.ssh-setup .warning {
  background: var(--bg-secondary);
  border: 1px solid var(--warning);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.ssh-setup .warning strong {
  color: var(--warning);
}

.steps-list {
  list-style: none;
  margin-top: 1rem;
}

.steps-list li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
}

.steps-list .code-block {
  margin: 0.5rem 0;
}

.resource-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.resource-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
}

.resource-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.resource-card h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.resource-card p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .git-guide h1 {
    font-size: 1.75rem;
  }
  
  .intro {
    font-size: 1rem;
  }
  
  section {
    padding: 0 1rem;
  }
  
  section h2 {
    font-size: 1.25rem;
  }
  
  h3 {
    font-size: 1.1rem;
  }
  
  .key-points {
    grid-template-columns: 1fr;
  }
  
  .code-block {
    padding: 1rem;
    font-size: 0.85rem;
    overflow-x: auto;
  }
  
  .step {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
  }
  
  .step-number {
    width: 32px;
    height: 32px;
  }
  
  .commit-types {
    font-size: 0.85rem;
  }
  
  .commit-types th,
  .commit-types td {
    padding: 0.5rem;
  }
  
  .resource-links {
    grid-template-columns: 1fr;
  }
  
  .install-group {
    padding: 0 1rem;
  }
}
</style>
