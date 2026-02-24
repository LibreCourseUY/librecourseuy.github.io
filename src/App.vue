<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <span class="logo-icon">🎓</span>
          <span class="logo-text">Fingdev</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/learn">Learn</router-link>
          <router-link to="/git">Git Guide</router-link>
          <router-link to="/repos">Projects</router-link>
          <router-link to="/docs">Docs</router-link>
          <router-link to="/contribute">Contribute</router-link>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>Made with ❤️ by Fingdev Community</p>
      <p>Open Source projects for Engineering Students at UdelaR</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #58a6ff;
  --primary-dark: #1f6feb;
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-tertiary: #21262d;
  --text-primary: #f0f6fc;
  --text-secondary: #8b949e;
  --border: #30363d;
  --success: #3fb950;
  --purple: #a78bfa;
  --warning: #d29922;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.5rem;
}

.logo-icon {
  font-size: 1.8rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary);
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  width: 100%;
}

.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 2rem;
  text-align: center;
  color: var(--text-secondary);
}

.footer p {
  margin: 0.3rem 0;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .main-content {
    padding: 2rem 1rem;
  }
}
</style>
