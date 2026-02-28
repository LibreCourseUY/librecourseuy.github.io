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
        Check the <router-link to="/repos" class="inline-link">Projects</router-link> page for DeepWiki links to each repository.
      </p>
      <div class="deepwiki-example">
        <span class="example-label">Why it's useful:</span>
        <p>When you're trying to contribute to a new project, DeepWiki helps you understand the codebase structure, API endpoints, and how different components connect, exactly when you need it.</p>
      </div>
    </section>

    <section class="philosophy">
      <h2>Assisted Autonomy</h2>
      <p>
        We believe in <strong>assisted autonomy</strong>, a learning approach that balances 
        independence with guidance. This method builds real, lasting skills rather than 
        temporary copy-paste knowledge.
      </p>
      
      <p>
        <strong>DeepWiki</strong> (deepwiki.dev) is an AI-powered documentation service 
        that automatically generates comprehensive documentation for GitHub repositories. 
        It analyzes code and creates API references, architecture diagrams, and code explanations, a perfect example of when AI can be useful: when documentation is scarce or nonexistent.
      </p>
    </section>

    <section class="scope">
      <h2>What Can You Learn?</h2>
      <p>
        This approach works for <strong>anything</strong> in programming:
      </p>
      <div class="scope-grid">
        <div class="scope-card">
          <div class="card-icon">💻</div>
          <h3>Programming Languages</h3>
          <p>Python, JavaScript, Rust, Go, C, Java, and more</p>
        </div>
        <div class="scope-card">
          <div class="card-icon">🛠️</div>
          <h3>Frameworks</h3>
          <p>React, Vue, FastAPI, Django, Express, Spring, and more</p>
        </div>
        <div class="scope-card">
          <div class="card-icon">🔧</div>
          <h3>Tools & Technologies</h3>
          <p>Git, Docker, PostgreSQL, MongoDB, AWS, Linux, and more</p>
        </div>
      </div>
      <div class="scope-note">
        <span class="note-icon">💡</span>
        <p>The key is: <strong>context first → build real stuff → ask for help when stuck</strong></p>
      </div>
    </section>

    <section class="recommended">
      <h2>Recommended for Beginners</h2>
      <p>Start with these languages and frameworks based on your goals:</p>
      
      <div class="recommend-section">
        <div class="section-header">
          <span class="section-icon">🎯</span>
          <h3>Web Development</h3>
        </div>
        <div class="recommend-grid">
          <div class="recommend-card">
            <div class="card-badge">Popular</div>
            <h4>JavaScript + React</h4>
            <p>Most popular, huge community, infinite resources</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Easy</div>
            <h4>Python + FastAPI</h4>
            <p>Great for APIs, easy syntax, very readable</p>
          </div>
        </div>
      </div>
      
      <div class="recommend-section">
        <div class="section-header">
          <span class="section-icon">🖥️</span>
          <h3>Systems & Low-Level</h3>
        </div>
        <div class="recommend-grid">
          <div class="recommend-card">
            <div class="card-badge">Modern</div>
            <h4>Rust</h4>
            <p>Modern, safe, great for learning systems programming</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Foundation</div>
            <h4>C</h4>
            <p>Foundation of everything, understand how computers work</p>
          </div>
        </div>
      </div>
      
      <div class="recommend-section">
        <div class="section-header">
          <span class="section-icon">📱</span>
          <h3>Mobile Development</h3>
        </div>
        <div class="recommend-grid">
          <div class="recommend-card">
            <div class="card-badge">Cross-platform</div>
            <h4>React Native</h4>
            <p>Use JavaScript for iOS and Android</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Beautiful</div>
            <h4>Flutter (Dart)</h4>
            <p>Google's framework, beautiful UIs</p>
          </div>
        </div>
      </div>
      
      <div class="recommend-section">
        <div class="section-header">
          <span class="section-icon">🤖</span>
          <h3>Data & AI</h3>
        </div>
        <div class="recommend-grid">
          <div class="recommend-card">
            <div class="card-badge">Top</div>
            <h4>Python</h4>
            <p>The language for AI/ML, easiest for data science</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Growing</div>
            <h4>Julia</h4>
            <p>Growing fast in scientific computing</p>
          </div>
        </div>
      </div>
      
      <div class="recommend-section">
        <div class="section-header">
          <span class="section-icon">⚙️</span>
          <h3>Automation & Scripting</h3>
        </div>
        <div class="recommend-grid">
          <div class="recommend-card">
            <div class="card-badge">Versatile</div>
            <h4>Python</h4>
            <p>Scripts, automation, dev tools, APIs, everything</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Browser</div>
            <h4>JavaScript</h4>
            <p>Browser automation, Node.js scripts, web scrapers</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">System</div>
            <h4>Bash</h4>
            <p>Shell scripting, Linux automation, CLI tools</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Fast</div>
            <h4>Go</h4>
            <p>High-performance scripts, CLI tools, automation</p>
          </div>
        </div>
      </div>
      
      <div class="recommend-section">
        <div class="section-header">
          <span class="section-icon">🚀</span>
          <h3>Other Languages</h3>
        </div>
        <div class="recommend-grid">
          <div class="recommend-card">
            <div class="card-badge">Trending</div>
            <h4>Ruby</h4>
            <p>Elegant syntax, great for web development with Rails</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Web</div>
            <h4>TypeScript</h4>
            <p>JavaScript with types, great for large web apps</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Enterprise</div>
            <h4>Java</h4>
            <p>Industry standard, Android, enterprise backends</p>
          </div>
          <div class="recommend-card">
            <div class="card-badge">Game</div>
            <h4>C#</h4>
            <p>Game development (Unity), Windows apps, .NET</p>
          </div>
        </div>
      </div>
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
          and structure of the language or tool. Don't try to learn everything, just 
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
          <p>You want to contribute to fingcomms. Clone the repo, try to understand the code, make a small change, and push it. When you encounter an error, search on Stack Overflow, read the FastAPI docs, ask in the community, but don't use AI.</p>
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
          <p>You've been stuck on the same error for 2+ hours. You've searched everywhere and nothing works. That's when you ask for help in the LibrecourseUY Discord or group chats.</p>
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
          <strong>You don't remember what you didn't struggle for</strong>, copy-pasting AI code 
          doesn't build muscle memory or deep understanding
        </li>
        <li>
          <strong>AI gives answers, not skills</strong>, real problem-solving ability comes 
          from figuring things out yourself
        </li>
        <li>
          <strong>You'll hit a wall in interviews</strong>, technical interviews test your 
          actual knowledge, not AI's
        </li>
        <li>
          <strong>You learn how to learn</strong>, the meta-skill of finding answers is 
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
            <p>MDN, Python Docs, Rust Docs, always start here</p>
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
          <p>Contribute to real LibrecourseUY projects</p>
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
  background: linear-gradient(135deg, #0f172a, #1e3a5f);
  border: 1px solid #0ea5e9;
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
  color: #38bdf8;
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
  color: #38bdf8;
  font-weight: 600;
}

.deepwiki-link:hover {
  text-decoration: underline;
}

.inline-link {
  color: #38bdf8;
  font-weight: 600;
  text-decoration: underline;
  transition: opacity 0.2s;
}

.inline-link:hover {
  opacity: 0.8;
}

.deepwiki-example {
  background: rgba(14, 165, 233, 0.15);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid #38bdf8;
}

.deepwiki-example .example-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #38bdf8;
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

.scope {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.scope p {
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1.5rem;
}

.scope-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.scope-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s;
}

.scope-card:hover {
  border-color: var(--primary);
  transform: translateY(-3px);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.scope-card h3 {
  color: var(--primary);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.scope-card p {
  font-size: 0.85rem;
  margin: 0;
  text-align: center;
}

.scope-note {
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.1), rgba(167, 139, 250, 0.1));
  border: 1px solid var(--primary);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.note-icon {
  font-size: 1.5rem;
}

.scope-note p {
  margin: 0;
  color: var(--text-primary);
  font-size: 1rem;
}

.scope-note strong {
  color: var(--primary);
}

.recommended {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.recommended > p {
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 2rem;
}

.recommend-section {
  margin-bottom: 2rem;
}

.recommend-section:last-child {
  margin-bottom: 0;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.section-icon {
  font-size: 1.5rem;
}

.section-header h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin: 0;
}

.recommend-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.recommend-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;
  transition: all 0.2s;
}

.recommend-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.card-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: var(--primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
}

.recommend-card h4 {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  padding-right: 60px;
}

.recommend-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
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

@media (max-width: 768px) {
  .how-to-learn h1 {
    font-size: 1.75rem;
  }
  
  .intro {
    font-size: 1rem;
  }
  
  h2 {
    font-size: 1.25rem;
    margin: 0 1rem 1rem;
  }
  
  .scope,
  .recommended,
  .philosophy,
  .phase,
  .getting-started {
    padding: 1.5rem;
    margin: 0 1rem 1.5rem;
  }
  
  .scope-grid {
    grid-template-columns: 1fr;
  }
  
  .recommend-grid {
    grid-template-columns: 1fr;
  }
  
  .scope-note {
    flex-direction: column;
    text-align: center;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  
  .phase-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .phase-number {
    font-size: 1.5rem;
  }
  
  .phase-header h3 {
    font-size: 1.1rem;
  }
  
  .reasons li {
    padding-left: 1.5rem;
  }
  
  .priority-item {
    flex-direction: column;
    text-align: center;
  }
  
  .priority {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
  
  .start-options {
    grid-template-columns: 1fr;
  }
}
</style>
