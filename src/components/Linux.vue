<template>
  <div class="linux-page">
    <h1>Why Linux?</h1>
    <p class="intro">
      Linux is the foundation of modern software development. Here's why you should consider making the switch.
    </p>

    <section class="why-linux">
      <h2>Why Linux is the Standard in Development</h2>
      <div class="reasons-grid">
        <div class="reason-card">
          <div class="reason-icon">🛠️</div>
          <h3>Native Tooling</h3>
          <p>Most development tools, servers, and cloud platforms run on Linux. Using Linux means you're working in the same environment as production servers.</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">⚡</div>
          <h3>Performance</h3>
          <p>Linux is lightweight and fast. You can customize it to use minimal resources, leaving more power for your development work.</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">🔒</div>
          <h3>Security</h3>
          <p>Linux has a strong security model with regular updates. Malware is rare compared to other operating systems.</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">🆓</div>
          <h3>Open Source</h3>
          <p>You can inspect, modify, and contribute to the operating system itself. This aligns perfectly with open source development.</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">🐚</div>
          <h3>Command Line</h3>
          <p>Linux was built around the shell. The command line is a first-class citizen, making automation and scripting natural.</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">📦</div>
          <h3>Package Managers</h3>
          <p>Install software with a single command. Dependencies are handled automatically. No more hunting for installers.</p>
        </div>
      </div>
    </section>

    <section class="what-is-distro">
      <h2>What is a Distribution?</h2>
      <p>
        A <strong>Linux distribution</strong> (or "distro") is a version of Linux that bundles the Linux kernel with a collection of software, utilities, and a desktop environment. Think of it like different "flavors" of Linux, each designed for different use cases and user preferences.
      </p>
      <p>
        Distributions differ in:
      </p>
      <ul class="distro-differences">
        <li><strong>Package manager</strong> - How you install and update software (apt, dnf, pacman, etc.)</li>
        <li><strong>Desktop environment</strong> - The look and feel (GNOME, KDE, XFCE, etc.)</li>
        <li><strong>Default software</strong> - Which apps come pre-installed</li>
        <li><strong>Update frequency</strong> - How often the system receives updates</li>
      </ul>
    </section>

    <section class="recommendations">
      <h2>Recommended Distributions for Beginners</h2>
      <p>These distros are beginner-friendly, stable, and have excellent community support:</p>
      
      <div class="distro-grid">
        <div class="distro-card mint">
          <div class="distro-header">
            <h3>Linux Mint</h3>
            <span class="badge">Most Popular</span>
          </div>
          <p>Based on Ubuntu. Known for its simplicity and "it just works" philosophy. Perfect if you want a familiar, Windows-like experience.</p>
          <ul>
            <li>✓ Very beginner-friendly</li>
            <li>✓ Great hardware support</li>
            <li>✓ Cinnamon desktop (familiar feel)</li>
            <li>✓ Large community</li>
          </ul>
        </div>

        <div class="distro-card cachyos">
          <div class="distro-header">
            <h3>CachyOS</h3>
            <span class="badge performance">Performance</span>
          </div>
          <p>Based on Arch Linux, but with easier setup. Great for users who want bleeding-edge software and maximum performance.</p>
          <ul>
            <li>✓ Rolling releases (always up-to-date)</li>
            <li>✓ Highly optimized</li>
            <li>✓ Arch Wiki (excellent documentation)</li>
            <li>✓ AUR (huge software repository)</li>
          </ul>
        </div>

        <div class="distro-card zorin">
          <div class="distro-header">
            <h3>Zorin OS</h3>
            <span class="badge beautiful">Beautiful</span>
          </div>
          <p>Designed to feel familiar whether you're coming from Windows or macOS. The most polished looking distro for newcomers.</p>
          <ul>
            <li>✓ Stunning default appearance</li>
            <li>✓ Multiple layouts (Windows/macOS style)</li>
            <li>✓ Built-in apps ready to use</li>
            <li>✓ Good for older hardware</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="gaming">
      <h2>Gaming on Linux? Yes!</h2>
      <p>
        Gaming on Linux has never been better. Thanks to <strong>Proton</strong> (built into Steam), most Windows games run on Linux with excellent performance.
      </p>
      <div class="proton-info">
        <div class="proton-icon">🎮</div>
        <div class="proton-content">
          <h3>ProtonDB</h3>
          <p>
            Check <a href="https://www.protondb.com" target="_blank" class="proton-link">protondb.com</a> 
            to see how well your favorite games run on Linux. Thousands of titles are rated "Platinum" or "Gold".
          </p>
        </div>
      </div>
      <div class="gaming-options">
        <div class="gaming-option">
          <h4>Steam</h4>
          <p>Most games work out of the box with Proton</p>
        </div>
        <div class="gaming-option">
          <h4>Lutris</h4>
          <p>Open source game launcher, supports many platforms</p>
        </div>
        <div class="gaming-option">
          <h4>Bottles</h4>
          <p>Easy wine management for Windows apps</p>
        </div>
        <div class="gaming-option">
          <h4>Native Games</h4>
          <p>Many great Linux-native games available</p>
        </div>
      </div>
    </section>

    <section class="why-we-recommend">
      <h2>Why We Recommend Linux</h2>
      <div class="recommend-points">
        <div class="recommend-item">
          <span class="check">✓</span>
          <div>
            <h4>Learn by Doing</h4>
            <p>Linux encourages you to understand how your system works. You'll learn about file systems, processes, networking, and more simply by using it daily.</p>
          </div>
        </div>
        <div class="recommend-item">
          <span class="check">✓</span>
          <div>
            <h4>Dev Environment Match</h4>
            <p>Production servers run Linux. Developing on Linux means fewer "but it works on my machine" problems.</p>
          </div>
        </div>
        <div class="recommend-item">
          <span class="check">✓</span>
          <div>
            <h4>Career Advantage</h4>
            <p>Linux skills are in high demand. System administration, DevOps, cloud computing, and cybersecurity all require Linux knowledge.</p>
          </div>
        </div>
        <div class="recommend-item">
          <span class="check">✓</span>
          <div>
            <h4>Community Support</h4>
            <p>Linux has massive community support. Forums, documentation, and tutorials are freely available for almost any problem.</p>
          </div>
        </div>
        <div class="recommend-item">
          <span class="check">✓</span>
          <div>
            <h4>It's Free</h4>
            <p>No license costs. You can use it on as many machines as you want, modify it, and redistribute it.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="getting-started">
      <h2>Ready to Try Linux?</h2>
      <p>Here's how to get started:</p>
      <div class="steps">
        <div class="step">
          <span class="step-num">1</span>
          <div>
            <h4>Try Live USB</h4>
            <p>Download a distro ISO, create a bootable USB, and try Linux without installing.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num">2</span>
          <div>
            <h4>Dual Boot</h4>
            <p>Install Linux alongside your current OS. This lets you switch between them.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num">3</span>
          <div>
            <h4>Virtual Machine</h4>
            <p>Use VirtualBox or VMware to run Linux inside your current OS. No risk, easy to try.</p>
          </div>
        </div>
      </div>
      <p class="start-note">
        We recommend <strong>Linux Mint</strong> for your first distro. It's forgiving, well-documented, and you'll feel at home quickly.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LinuxPage'
}
</script>

<style scoped>
.linux-page {
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
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.why-linux {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.reason-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.reason-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.reason-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.reason-card h3 {
  color: var(--primary);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.reason-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.what-is-distro {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.what-is-distro p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.distro-differences {
  list-style: none;
  margin-top: 1.5rem;
}

.distro-differences li {
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}

.distro-differences li:last-child {
  border-bottom: none;
}

.distro-differences li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--primary);
}

.recommendations {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.recommendations > p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.distro-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.distro-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.distro-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.distro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.distro-card h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin: 0;
}

.badge {
  background: var(--primary);
  color: white;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
}

.badge.performance {
  background: #10b981;
}

.badge.beautiful {
  background: #8b5cf6;
}

.distro-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.distro-card ul {
  list-style: none;
}

.distro-card li {
  color: var(--text-secondary);
  font-size: 0.8rem;
  padding: 0.3rem 0;
}

.gaming {
  background: linear-gradient(135deg, #0f172a, #1e3a5f);
  border: 1px solid #0ea5e9;
  border-radius: 16px;
  padding: 2rem;
}

.gaming h2 {
  color: #38bdf8;
  border-bottom-color: rgba(56, 189, 248, 0.3);
}

.gaming > p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.proton-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(14, 165, 233, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.proton-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.proton-content h3 {
  color: #38bdf8;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.proton-content p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 0.95rem;
}

.proton-link {
  color: #38bdf8;
  font-weight: 600;
}

.proton-link:hover {
  text-decoration: underline;
}

.gaming-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.gaming-option {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.gaming-option h4 {
  color: #38bdf8;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.gaming-option p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  margin: 0;
}

.why-we-recommend {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.recommend-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recommend-item {
  display: flex;
  gap: 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
}

.check {
  color: var(--success);
  font-size: 1.25rem;
  font-weight: bold;
  flex-shrink: 0;
}

.recommend-item h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.recommend-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.getting-started {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.getting-started > p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-num {
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

.step h4 {
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.step p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.start-note {
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.1), rgba(167, 139, 250, 0.1));
  border: 1px solid var(--primary);
  border-radius: 12px;
  padding: 1.25rem;
  color: var(--text-primary);
}

.start-note strong {
  color: var(--primary);
}

@media (max-width: 768px) {
  .linux-page h1 {
    font-size: 1.75rem;
  }

  .intro {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .reasons-grid,
  .distro-grid,
  .gaming-options {
    grid-template-columns: 1fr;
  }

  .proton-info {
    flex-direction: column;
    text-align: center;
  }

  section,
  .why-linux,
  .what-is-distro,
  .recommendations,
  .gaming,
  .why-we-recommend,
  .getting-started {
    padding: 1.5rem;
    margin: 0 1rem 1.5rem;
  }
}
</style>
