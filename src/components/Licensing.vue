<template>
  <div class="licensing-page">
    <h1>Licensing</h1>
    <p class="intro">
      Understanding open source licenses and their implications.
    </p>
    <p class="official-link">
      <span class="official-label">See all licenses:</span>
      <a href="https://opensource.org/licenses" target="_blank">opensource.org/licenses</a>
    </p>

    <section class="why-licenses">
      <h2>Why Licenses Matter</h2>
      <p>
        Without a license, your code is legally protected by default copyright laws, meaning others 
        cannot use, modify, or distribute your code. Adding a license clarifies what others can 
        and cannot do with your work.
      </p>
    </section>

    <section class="popular-licenses">
      <h2>Popular Open Source Licenses</h2>

      <div class="license-card mit">
        <div class="license-header">
          <h3>MIT License</h3>
          <span class="license-badge">Permissive</span>
        </div>
        <p>The most permissive license. It allows others to do anything with your code with proper attribution and no liability.</p>
        <div class="license-pros-cons">
          <div class="pros">
            <h4>✅ Pros</h4>
            <ul>
              <li>Very simple and permissive</li>
              <li>Highly compatible with other licenses</li>
              <li>Widely understood and accepted</li>
            </ul>
          </div>
          <div class="cons">
            <h4>❌ Cons</h4>
            <ul>
              <li>No patent protection</li>
              <li>No warranty disclaimer (explicit)</li>
            </ul>
          </div>
        </div>
        <div class="license-use">
          <h4>Best for:</h4>
          <p>Most open source projects, especially libraries and tools meant to be widely used.</p>
        </div>
      </div>

      <div class="license-card apache">
        <div class="license-header">
          <h3>Apache 2.0</h3>
          <span class="license-badge">Permissive</span>
        </div>
        <p>Similar to MIT but includes explicit patent rights. Good for projects that may involve patents.</p>
        <div class="license-pros-cons">
          <div class="pros">
            <h4>✅ Pros</h4>
            <ul>
              <li>Includes patent rights</li>
              <li>Strong warranty disclaimer</li>
              <li>Still very permissive</li>
            </ul>
          </div>
          <div class="cons">
            <h4>❌ Cons</h4>
            <ul>
              <li>Slightly more complex than MIT</li>
              <li>Requires NOTICE file for larger projects</li>
            </ul>
          </div>
        </div>
        <div class="license-use">
          <h4>Best for:</h4>
          <p>Projects that may have patent implications or need stronger legal protection.</p>
        </div>
      </div>

      <div class="license-card gpl">
        <div class="license-header">
          <h3>GPLv3</h3>
          <span class="license-badge">Copyleft</span>
        </div>
        <p>Requires that any derivative work also be open source. Strongly promotes sharing code.</p>
        <div class="license-pros-cons">
          <div class="pros">
            <h4>✅ Pros</h4>
            <ul>
              <li>Ensures derivative works stay open source</li>
              <li>Strong copyleft protection</li>
              <li>Protects your code from being "stolen"</li>
            </ul>
          </div>
          <div class="cons">
            <h4>❌ Cons</h4>
            <ul>
              <li>Incompatible with proprietary projects</li>
              <li>Can limit commercial use</li>
              <li>More restrictive</li>
            </ul>
          </div>
        </div>
        <div class="license-use">
          <h4>Best for:</h4>
          <p>Projects where you want to ensure improvements must be shared back with the community.</p>
        </div>
      </div>

      <div class="license-card agpl">
        <div class="license-header">
          <h3>AGPLv3</h3>
          <span class="license-badge">Strong Copyleft</span>
        </div>
        <p>Similar to GPL but includes a clause for network use. If you use the software as a service, you must make source code available to users.</p>
        <div class="license-pros-cons">
          <div class="pros">
            <h4>✅ Pros</h4>
            <ul>
              <li>Covers network use (SaaS)</li>
              <li>Strongest copyleft protection</li>
              <li>Ensures source available even for services</li>
              <li>Protects against "as-a-service" loopholes</li>
            </ul>
          </div>
          <div class="cons">
            <h4>❌ Cons</h4>
            <ul>
              <li>Very restrictive</li>
              <li>Complex and lengthy license</li>
              <li>Many companies avoid it</li>
              <li>May limit adoption</li>
            </ul>
          </div>
        </div>
        <div class="license-use">
          <h4>Best for:</h4>
          <p>Projects where you want to prevent others from offering your software as a service without sharing modifications.</p>
        </div>
      </div>

      <div class="license-card bsd">
        <div class="license-header">
          <h3>BSD 3-Clause</h3>
          <span class="license-badge">Permissive</span>
        </div>
        <p>Similar to MIT but includes a clause preventing use of the author's name for endorsement.</p>
        <div class="license-pros-cons">
          <div class="pros">
            <h4>✅ Pros</h4>
            <ul>
              <li>Simple and permissive</li>
              <li>Prevents name misuse</li>
              <li>Good for attribution</li>
            </ul>
          </div>
          <div class="cons">
            <h4>❌ Cons</h4>
            <ul>
              <li>Less common than MIT</li>
              <li>No patent clause</li>
            </ul>
          </div>
        </div>
        <div class="license-use">
          <h4>Best for:</h4>
          <p>Projects where you want attribution but don't want your name associated with derivatives.</p>
        </div>
      </div>

      <div class="license-card cc0">
        <div class="license-header">
          <h3>CC0 (Public Domain)</h3>
          <span class="license-badge">Public Domain</span>
        </div>
        <p>Waives all copyright and related rights. Essentially puts your work in the public domain.</p>
        <div class="license-pros-cons">
          <div class="pros">
            <h4>✅ Pros</h4>
            <ul>
              <li>Maximum freedom for users</li>
              <li>No attribution required</li>
              <li>No restrictions</li>
            </ul>
          </div>
          <div class="cons">
            <h4>❌ Cons</h4>
            <ul>
              <li>No attribution expected (morally)</li>
              <li>No warranty</li>
              <li>Can't "un-release" once applied</li>
            </ul>
          </div>
        </div>
        <div class="license-use">
          <h4>Best for:</h4>
          <p>Data, assets, or code you genuinely want to be completely free for any use.</p>
        </div>
      </div>
    </section>

    <section class="license-comparison">
      <h2>Quick Comparison</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>License</th>
              <th>Commercial Use</th>
              <th>Modification</th>
              <th>Private Use</th>
              <th>Copyleft</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MIT</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Apache 2.0</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>GPLv3</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅ (strong)</td>
            </tr>
            <tr>
              <td>AGPLv3</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌ (must share)</td>
              <td>✅ (strong)</td>
            </tr>
            <tr>
              <td>BSD 3-Clause</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>CC0</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="our-licenses">
      <h2>Our Projects</h2>
      <p>All LibrecourseUY projects use the <strong>MIT License</strong> unless otherwise specified.</p>
      <p>This choice was made because it:</p>
      <ul class="license-reasons">
        <li>Allows maximum adoption and use</li>
        <li>Is simple and well-understood</li>
        <li>Has minimal legal requirements</li>
        <li>Is compatible with almost all other projects</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Licensing'
}
</script>

<style scoped>
.licensing-page {
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

.official-link {
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

.official-link a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.official-link a:hover {
  text-decoration: underline;
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

.why-licenses p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.license-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.license-card.mit {
  border-left: 4px solid #58a6ff;
}

.license-card.apache {
  border-left: 4px solid #f85149;
}

.license-card.gpl {
  border-left: 4px solid #a371f7;
}

.license-card.bsd {
  border-left: 4px solid #3fb950;
}

.license-card.agpl {
  border-left: 4px solid #f778ba;
}

.license-card.cc0 {
  border-left: 4px solid #d29922;
}

.license-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.license-header h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
}

.license-badge {
  background: var(--bg-tertiary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.license-card > p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.license-pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.pros, .cons {
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 1rem;
}

.pros h4, .cons h4 {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.pros h4 {
  color: var(--success);
}

.cons h4 {
  color: #f85149;
}

.pros ul, .cons ul {
  list-style: none;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.pros li, .cons li {
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
}

.pros li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
  font-size: 0.75rem;
}

.cons li::before {
  content: "✗";
  position: absolute;
  left: 0;
  color: #f85149;
  font-size: 0.75rem;
}

.license-use {
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 1rem;
}

.license-use h4 {
  font-size: 0.85rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.license-use p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.comparison-table {
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.comparison-table th {
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-weight: 600;
}

.comparison-table td:first-child {
  text-align: left;
  font-weight: 500;
  color: var(--text-primary);
}

.our-licenses p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.our-licenses strong {
  color: var(--primary);
}

.license-reasons {
  list-style: none;
  margin-top: 1rem;
}

.license-reasons li {
  padding: 0.75rem 0;
  padding-left: 2rem;
  position: relative;
  color: var(--text-secondary);
}

.license-reasons li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
}

@media (max-width: 768px) {
  .licensing-page h1 {
    font-size: 1.75rem;
  }
  
  .intro {
    font-size: 1rem;
  }
  
  h2 {
    font-size: 1.25rem;
    margin: 0 1rem 1rem;
  }
  
  .license-pros-cons {
    grid-template-columns: 1fr;
  }
  
  .license-card {
    margin: 0 1rem 1rem;
    padding: 1.25rem;
  }
  
  .license-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .comparison-table {
    font-size: 0.85rem;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 0.5rem;
  }
}
</style>
