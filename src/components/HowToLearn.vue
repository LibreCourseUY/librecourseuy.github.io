<template>
  <div class="how-to-learn">
    <h1>How to Learn</h1>
    <p class="intro">
      Our philosophy for learning programming effectively.
    </p>

    <section class="deepwiki-intro">
      <div class="deepwiki-header">
        <span class="deepwiki-icon">📚</span>
        <h2>What is DeepWiki?</h2>
      </div>
      <p>
        <a href="https://deepwiki.com" target="_blank" class="deepwiki-link">DeepWiki</a> 
        is an AI-powered documentation tool that automatically generates comprehensive documentation 
        for your codebase. It creates API references, architecture diagrams, and code explanations.
      </p>
      <p>
        We use DeepWiki across all our projects to help you understand the codebase faster. 
        Check the <router-link to="/repos">Projects</router-link> page for DeepWiki links to each repository.
      </p>
      <div class="deepwiki-example">
        <span class="example-label">Why it's useful:</span>
        <p>When you're trying to contribute to a new project, DeepWiki helps you understand the codebase structure, API endpoints, and how different components connect — exactly when you need it.</p>
      </div>
    </section>

    <section class="philosophy">
      <h2>Assisted Autonomy</h2>
      <p>
        We believe in <strong>assisted autonomy</strong> — a learning approach that balances 
        independence with guidance. This method builds real, lasting skills rather than 
        temporary copy-paste knowledge.
      </p>
      
      <p>
        <strong>DeepWiki</strong> (deepwiki.dev) is an AI-powered documentation service 
        that automatically generates comprehensive documentation for GitHub repositories. 
        It analyzes code and creates API references, architecture diagrams, and code explanations — a perfect example of when AI can be useful: when documentation is scarce or nonexistent.
      </p>
    </section>

    <section class="approach">
      <h2>The Approach</h2>
      
      <div class="phase">
        <div class="phase-header">
          <span class="phase-number">01</span>
          <h3>Quick Context</h3>
        </div>
        <p>
          Watch a short tutorial (no more than 2 hours) to understand the basic syntax 
          and structure of the language or tool. Don't try to learn everything — just 
          get enough context to understand what you're looking at.
        </p>
        <div class="example">
          <span class="example-label">Example:</span>
          <p>You want to learn Python. Watch a 1-hour "Python for beginners" video to understand variables, loops, functions, and basic data structures. That's it. Don't finish the entire course.</p>
        </div>
      </div>

      <div class="phase">
        <div class="phase-header">
          <span class="phase-number">02</span>
          <h3>Build Something Real</h3>
        </div>
        <p>
          Find a project to work on or a repository to contribute to. Just start doing it, 
          even if you don't know anything. Learn by <strong>using documentation, forums, 
          and search engines</strong>. No AI. No tutorials. Figure it out yourself.
        </p>
        <div class="example">
          <span class="example-label">Example:</span>
          <p>You want to contribute to fingcomms. Clone the repo, try to understand the code, make a small change, and push it. When you encounter an error, search on Stack Overflow, read the FastAPI docs, ask in the community — but don't use AI.</p>
        </div>
      </div>

      <div class="phase">
        <div class="phase-header">
          <span class="phase-number">03</span>
          <h3>Ask for Help</h3>
        </div>
        <p>
          If you get truly stuck, reach out to more experienced developers through the 
          community groups. This is the "assisted" part of assisted autonomy.
        </p>
        <div class="example">
          <span class="example-label">Example:</span>
          <p>You've been stuck on the same error for 2+ hours. You've searched everywhere and nothing works. That's when you ask for help in the Fingdev Discord or group chats.</p>
        </div>
      </div>
    </section>

    <section class="why-no-ai">
      <h2>Why No AI?</h2>
      <p>
        AI can be a useful tool in specific situations, but for learning, it often does more 
        harm than good:
      </p>
      <ul class="reasons">
        <li>
          <strong>You don't remember what you didn't struggle for</strong> — copy-pasting AI code 
          doesn't build muscle memory or deep understanding
        </li>
        <li>
          <strong>AI gives answers, not skills</strong> — real problem-solving ability comes 
          from figuring things out yourself
        </li>
        <li>
          <strong>You'll hit a wall in interviews</strong> — technical interviews test your 
          actual knowledge, not AI's
        </li>
        <li>
          <strong>You learn how to learn</strong> — the meta-skill of finding answers is 
          more valuable than any specific answer
        </li>
      </ul>
    </section>

    <section class="when-ai">
      <h2>When to Use AI</h2>
      <p>AI is acceptable (even recommended) only when:</p>
      <ul class="when-list">
        <li>Documentation is scarce or non-existent for your specific problem</li>
        <li>You're debugging and need a second pair of "eyes" on complex error messages</li>
        <li>You're working with very niche or outdated technologies</li>
      </ul>
      <div class="example">
        <span class="example-label">Example of valid AI use:</span>
        <p>You're trying to configure a specific library that has almost no documentation. You ask AI for help finding the right configuration options.</p>
      </div>
    </section>

    <section class="resources">
      <h2>Resources</h2>
      <p>Use these to learn (in this order):</p>
      <div class="resource-priority">
        <div class="priority-item">
          <span class="priority">1</span>
          <div>
            <h4>Official Documentation</h4>
            <p>MDN, Python Docs, Rust Docs — always start here</p>
          </div>
        </div>
        <div class="priority-item">
          <span class="priority">2</span>
          <div>
            <h4>Community Forums</h4>
            <p>Stack Overflow, Reddit (r/learnprogramming), community Discord</p>
          </div>
        </div>
        <div class="priority-item">
          <span class="priority">3</span>
          <div>
            <h4>Tutorials</h4>
            <p>Only when you need quick context (limit to 2 hours max)</p>
          </div>
        </div>
        <div class="priority-item">
          <span class="priority">4</span>
          <div>
            <h4>AI</h4>
            <p>Only when documentation is truly nonexistent</p>
          </div>
        </div>
      </div>
    </section>

    <section class="getting-started">
      <h2>Ready to Start?</h2>
      <p>Pick a language and start building:</p>
      <div class="start-options">
        <router-link to="/" class="start-card">
          <span class="start-icon">🎯</span>
          <h4>Personal Challenges</h4>
          <p>Language-agnostic projects to learn coding</p>
        </router-link>
        <router-link to="/repos" class="start-card">
          <span class="start-icon">📂</span>
          <h4>Our Projects</h4>
          <p>Contribute to real Fingdev projects</p>
        </router-link>
        <router-link to="/docs" class="start-card">
          <span class="start-icon">📚</span>
          <h4>Documentation</h4>
          <p>Essential resources and guides</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HowToLearn'
}
</script>

<style scoped>
.how-to-learn {
  max-width: 800px;
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

.deepwiki-intro {
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  border: 1px solid #6366f1;
  border-radius: 16px;
  padding: 2rem;
}

.deepwiki-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.deepwiki-icon {
  font-size: 2.5rem;
}

.deepwiki-intro h2 {
  color: white;
  border: none;
  padding: 0;
  margin: 0;
}

.deepwiki-intro p {
  color: rgba(255,255,255,0.9);
  line-height: 1.7;
}

.deepwiki-intro p:last-of-type {
  margin-bottom: 1.5rem;
}

.deepwiki-link {
  color: #a5b4fc;
  font-weight: 600;
}

.deepwiki-link:hover {
  text-decoration: underline;
}

.deepwiki-example {
  background: rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid #a5b4fc;
}

.deepwiki-example .example-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #a5b4fc;
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.deepwiki-example p {
  font-size: 0.95rem;
  margin: 0;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.philosophy {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.philosophy p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.approach {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.phase {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.phase-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.phase-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.3;
}

.phase-header h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
}

.phase p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.example {
  margin-top: 1.5rem;
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

.example p {
  font-size: 0.95rem;
  margin: 0;
}

.why-no-ai p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.reasons {
  list-style: none;
}

.reasons li {
  padding: 1rem 0;
  padding-left: 2rem;
  position: relative;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}

.reasons li:last-child {
  border-bottom: none;
}

.reasons li::before {
  content: "✗";
  position: absolute;
  left: 0;
  color: #f85149;
}

.when-ai p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.when-list {
  list-style: none;
  margin-bottom: 1.5rem;
}

.when-list li {
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
}

.when-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--success);
}

.resources p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.resource-priority {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.priority-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem 1.5rem;
}

.priority {
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.priority-item h4 {
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.priority-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.getting-started {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.getting-started p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.start-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.start-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
  text-align: center;
}

.start-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.start-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.start-card h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.start-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
}
</style>
