<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <span class="logo-icon">🎓</span>
          <span class="logo-text">Fingdev</span>
        </router-link>
        <div class="nav-links" :class="{ 'nav-open': menuOpen }">
          <router-link to="/" @click="menuOpen = false">Home</router-link>
          <div class="nav-dropdown">
            <button class="dropdown-trigger" @click="dropdownOpen = !dropdownOpen">
              Learn <span class="dropdown-arrow">▾</span>
            </button>
            <div class="dropdown-menu" :class="{ 'dropdown-open': dropdownOpen }">
              <router-link to="/learn" @click="menuOpen = false">How to Learn</router-link>
              <router-link to="/learn/linux" @click="menuOpen = false">Linux Guide</router-link>
              <router-link to="/git" @click="menuOpen = false">Git Guide</router-link>
              <router-link to="/docs/signing" @click="menuOpen = false">Signed Commits</router-link>
              <router-link to="/docs/licensing" @click="menuOpen = false">Licensing</router-link>
            </div>
          </div>
          <router-link to="/repos" @click="menuOpen = false">Projects</router-link>
          <router-link to="/docs" @click="menuOpen = false">Docs</router-link>
          <router-link to="/contribute" @click="menuOpen = false">Contribute</router-link>
          <router-link to="/CLA" @click="menuOpen = false">CLA</router-link>
          <a href="https://fing.ego-services.com/fingcomms/" target="_blank">Fingcomms</a>
          <a href="https://github.com/fingdev" target="_blank" class="github-link" title="GitHub Organization">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <button class="hamburger" @click="menuOpen = !menuOpen; if(!menuOpen) dropdownOpen = false" :class="{ 'hamburger-open': menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>Made with ❤️ by Fingdev Community</p>
      <p>Open Source projects for Engineering Students at UdelaR</p>
      <p class="license">Licensed under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
      dropdownOpen: false
    }
  }
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
  gap: 1.5rem;
  align-items: center;
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

.nav-dropdown {
  position: relative;
}

.dropdown-trigger {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0;
  font-family: inherit;
  transition: color 0.2s;
}

.dropdown-trigger:hover {
  color: var(--primary);
}

.dropdown-arrow {
  font-size: 0.8rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem 0;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s;
  z-index: 100;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.6rem 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: all 0.15s;
}

.dropdown-menu a:hover {
  background: var(--bg-tertiary);
  color: var(--primary);
}

.github-link {
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  transition: color 0.2s;
}

.github-link:hover {
  color: var(--primary);
}

.hamburger {
  display: none;
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

.footer .license {
  font-size: 0.85rem;
}

.footer .license a {
  color: var(--primary);
  text-decoration: none;
}

.footer .license a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
    flex-wrap: wrap;
  }
  
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 101;
  }
  
  .hamburger span {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s;
  }
  
  .hamburger-open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger-open span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger-open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  
  .nav-links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg-primary);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    z-index: 100;
  }
  
  .nav-links.nav-open {
    display: flex;
  }
  
  .nav-links a,
  .dropdown-trigger {
    font-size: 1.25rem;
    padding: 0.75rem 1rem;
  }
  
  .nav-dropdown {
    position: static;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .dropdown-trigger {
    width: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    padding: 0.75rem 1rem;
  }
  
  .dropdown-menu {
    position: static;
    opacity: 0;
    visibility: hidden;
    transform: none;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 0.25rem 0.75rem;
    margin-top: 0.5rem;
    min-width: 200px;
    max-width: 300px;
    display: none;
    backdrop-filter: blur(10px);
  }
  
  .dropdown-menu.dropdown-open {
    opacity: 1;
    visibility: visible;
    display: block;
  }
  
  .dropdown-menu a {
    padding: 0.85rem 1rem;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    margin: 0.25rem 0;
    transition: all 0.2s;
  }
  
  .dropdown-menu a:last-child {
    border-bottom: none;
  }
  
  .dropdown-menu a:hover {
    background: rgba(88, 166, 255, 0.15);
    color: var(--primary);
    padding-left: 1.25rem;
  }
  
  .main-content {
    padding: 1.5rem 1rem;
  }
}
</style>
