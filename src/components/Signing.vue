<template>
  <div class="signing-page">
    <h1>Signed Commits</h1>
    <p class="intro">
      Learn why signed commits are mandatory and how to set them up.
    </p>
    <p class="official-links">
      <span class="official-label">Official GitHub Docs:</span>
      <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key" target="_blank">Generate GPG Key</a>
      <span class="separator">|</span>
      <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits" target="_blank">Signing Commits</a>
    </p>

    <section class="why-signed">
      <h2>Why Signed Commits?</h2>
      <p>
        Signed commits are a security measure that verifies the authenticity of your commits.
        When you sign a commit, you're cryptographically proving that you (and not someone else) made those changes.
      </p>
      
      <div class="benefits-row">
        <div class="benefit-card">
          <span class="benefit-icon">🔒</span>
          <h3>Security</h3>
          <p>Verifies that you are who you claim to be. Prevents impersonation attacks.</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">🛡️</span>
          <h3>Integrity</h3>
          <p>Guarantees the commit wasn't modified after you created it.</p>
        </div>
      </div>
      
      <div class="benefits-row three-cols">
        <div class="benefit-card">
          <span class="benefit-icon">⚖️</span>
          <h3>Legal Protection</h3>
          <p>Provides cryptographic proof of authorship, useful in legal disputes or license compliance.</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">🤝</span>
          <h3>Trust</h3>
          <p>Other contributors know changes genuinely come from you.</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">📈</span>
          <h3>Professionalism</h3>
          <p>Industry best practice for open source projects.</p>
        </div>
      </div>
    </section>

    <section class="legal-protection">
      <h2>Legal Protections</h2>
      <p>
        Signed commits provide important legal protections for both contributors and project maintainers:
      </p>
      <div class="legal-row">
        <div class="legal-item">
          <h4>🔐 Attribution Proof</h4>
          <p>Cryptographic signature proves who wrote or contributed specific code, establishing clear authorship.</p>
        </div>
        <div class="legal-item">
          <h4>📜 License Compliance</h4>
          <p>For projects with specific licenses (MIT, GPL, etc.), signed commits help track who contributed under what terms.</p>
        </div>
      </div>
      <div class="legal-row">
        <div class="legal-item">
          <h4>⚖️ Liability Defense</h4>
          <p>In case of legal disputes, signed commits provide evidence of good-faith contribution practices.</p>
        </div>
        <div class="legal-item">
          <h4>🚫 Anti-Tampering</h4>
          <p>Signature verification ensures code wasn't maliciously modified after submission, protecting users.</p>
        </div>
      </div>
      <p class="legal-note">
        <strong>Note:</strong> While signed commits provide strong technical evidence, they don't replace proper contributor license agreements (CLAs) for large projects. However, for community projects like ours, signed commits are the minimum standard for trust.
      </p>
    </section>

    <section class="verification-status">
      <h2>What Happens Without Signed Commits?</h2>
      <div class="status-info">
        <div class="status-item warning">
          <span class="status-icon">⚠️</span>
          <div>
            <h4>Unverified Commits</h4>
            <p>Commits without signatures show as "Unverified" on GitHub, making it hard to trust the source.</p>
          </div>
        </div>
        <div class="status-item danger">
          <span class="status-icon">🚫</span>
          <div>
            <h4>Rejected Pull Requests</h4>
            <p>Repositories with signed commit requirements will reject unsigned commits.</p>
          </div>
        </div>
        <div class="status-item success">
          <span class="status-icon">✅</span>
          <div>
            <h4>Verified Commits</h4>
            <p>Signed commits show a "Verified" badge, building trust with maintainers.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="setup-guide">
      <h2>Setup GPG Signing</h2>
      <p>Follow these steps to set up signed commits with GPG:</p>

      <div class="step-group">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Install GPG</h4>
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
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Generate GPG Key</h4>
            <div class="code-block">
              <code>gpg --full-generate-key</code>
            </div>
            <p>Choose RSA (option 1), 4096 bits, set expiration (or none), enter your name and email.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Get Your Key ID</h4>
            <div class="code-block">
              <code>gpg --list-secret-keys --keyid-format=long</code>
            </div>
            <p>Look for the line starting with "sec" and copy the key ID after the slash (e.g., 3AA5C34371567BD2)</p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Export Public Key</h4>
            <div class="code-block">
              <code>gpg --armor --export 3AA5C34371567BD2</code>
            </div>
            <p>Copy the output (starts with -----BEGIN PGP PUBLIC KEY BLOCK-----) and add it to GitHub → Settings → SSH and GPG keys → New GPG key.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Configure Git</h4>
            <div class="code-block">
              <code>git config --global gpg.program gpg</code>
            </div>
            <div class="code-block">
              <code>git config --global user.signingkey YOUR_KEY_ID</code>
            </div>
            <div class="code-block">
              <code>git config --global commit.gpgsign true</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="setup-guide ssh-guide">
      <h2>SSH Signing (Alternative)</h2>
      <p>You can also use SSH keys instead of GPG. Both are accepted.</p>

      <div class="step-group">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Generate SSH Key</h4>
            <div class="code-block">
              <code>ssh-keygen -t ed25519 -C "your.email@example.com"</code>
            </div>
            <p>Press Enter to accept the default location. Optionally add a passphrase for extra security.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Start SSH Agent</h4>
            <div class="code-block">
              <code>eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519</code>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Add Public Key to GitHub</h4>
            <div class="code-block">
              <code>cat ~/.ssh/id_ed25519.pub</code>
            </div>
            <p>Copy the output and go to GitHub → Settings → SSH and GPG keys → New SSH key.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Configure Git</h4>
            <div class="code-block">
              <code>git config --global commit.gpgsign true</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="verification">
      <h2>Verifying Your Commits</h2>
      <p>After setting up, your commits will show a "Verified" badge on GitHub.</p>
      
      <div class="code-block">
        <code>git log --show-signature</code>
      </div>
      <p>Run this command locally to see signature verification details.</p>
    </section>

    <section class="help">
      <h2>Need Help?</h2>
      <p>If you encounter issues setting up signed commits, check:</p>
      <ul class="help-list">
        <li>GitHub's <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification" target="_blank">official documentation</a></li>
        <li>Our <router-link to="/git">Git Guide</router-link></li>
        <li>Open an issue on the relevant repository</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Signing'
}
</script>

<style scoped>
.signing-page {
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
  margin-bottom: 1rem;
}

.official-links {
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.official-label {
  color: var(--text-primary);
  font-weight: 500;
}

.official-links a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.official-links a:hover {
  text-decoration: underline;
}

.official-links .separator {
  color: var(--border);
  margin: 0 0.25rem;
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

.benefits-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.benefits-row.three-cols {
  grid-template-columns: repeat(3, 1fr);
}

.benefit-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.benefit-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.benefit-card h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.benefit-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
}

.legal-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.status-info {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.status-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.status-item.warning {
  background: rgba(210, 153, 34, 0.1);
  border-color: var(--warning);
}

.status-item.danger {
  background: rgba(248, 81, 73, 0.1);
  border-color: #f85149;
}

.status-item.success {
  background: rgba(63, 185, 80, 0.1);
  border-color: var(--success);
}

.status-icon {
  font-size: 1.5rem;
}

.status-item h4 {
  margin-bottom: 0.5rem;
}

.status-item p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

.step-group {
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
  margin-bottom: 0.75rem;
}

.step-content p {
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

.code-block {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  max-width: 100%;
  margin-bottom: 0.5rem;
}

.code-block code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.8rem;
  color: var(--text-primary);
  white-space: pre;
  display: block;
  color: var(--text-primary);
  white-space: pre;
}

.gpg-guide {
  margin-top: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.gpg-guide h2 {
  color: var(--primary);
}

.ssh-guide {
  margin-top: 2rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.legal-protection {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.legal-protection > p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.legal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.legal-item {
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 1rem;
}

.legal-item h4 {
  color: var(--primary);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.legal-item p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
}

.legal-note {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.9rem;
}

.legal-note strong {
  color: var(--primary);
}

.help-list {
  list-style: none;
  margin-top: 1rem;
}

.help-list li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
}

.help-list a {
  color: var(--primary);
}
</style>
