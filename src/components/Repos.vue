<template>
  <div class="repos">
    <h1>Our Projects</h1>
    <p class="intro">
      Explore the open source projects developed by the LibrecourseUY community.
    </p>

    <div class="repos-grid">
      <div v-for="repo in repos" :key="repo.name" class="repo-card">
        <div class="repo-header">
          <span class="repo-icon">{{ repo.icon }}</span>
          <h3>{{ repo.name }}</h3>
        </div>
        <p class="repo-description">{{ repo.description }}</p>
        
        <div class="repo-tech">
          <span v-for="tech in repo.tech" :key="tech" class="tech-badge">{{ tech }}</span>
        </div>
        
        <div class="repo-features">
          <h4>Features</h4>
          <ul>
            <li v-for="feature in repo.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        
        <div class="repo-links">
          <a :href="repo.github" target="_blank" class="repo-link">
            <span>📂</span> GitHub
          </a>
          <a v-if="repo.demo" :href="repo.demo" target="_blank" class="repo-link">
            <span>🚀</span> Demo
          </a>
          <a v-if="repo.deepwiki" :href="repo.deepwiki" target="_blank" class="repo-link deepwiki">
            <span>📚</span> DeepWiki
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repos',
  data() {
    return {
      repos: [
        {
          name: 'fingdev.github.io',
          icon: '🌐',
          description: 'The official LibrecourseUY community portal. This website you are visiting right now.',
          tech: ['Vue.js 3', 'Vue Router', 'Vite', 'JavaScript'],
          features: [
            'Community portal',
            'Git & GitHub guide',
            'Documentation resources',
            'Contribution guide'
          ],
          github: 'https://github.com/LibrecourseUY/fingdev.github.io',
          demo: 'https://librecourseuy.github.io',
          deepwiki: 'https://deepwiki.com/LibrecourseUY/fingdev.github.io'
        },
        {
          name: 'fingcomms',
          icon: '👥',
          description: 'A directory for student groups and study partners at the Faculty of Engineering.',
          tech: ['FastAPI', 'Vue.js', 'SQLite', 'Docker'],
          features: [
            'Search and filter groups',
            'Admin panel for management',
            'Fuzzy search for better results',
            'Important links section'
          ],
          github: 'https://github.com/LibrecourseUY/fingcomms',
          demo: null,
          deepwiki: 'https://deepwiki.com/LibrecourseUY/fingcomms'
        },
        {
          name: 'fingDB',
          icon: '🗄️',
          description: 'Centralized database API containing course information, prerequisites, and career data.',
          tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
          features: [
            'Interactive prerequisite graph',
            'Course and career management',
            'RESTful API design',
            'Admin authentication'
          ],
          github: 'https://github.com/LibrecourseUY/fingdb',
          demo: null,
          deepwiki: 'https://deepwiki.com/LibrecourseUY/fingDB'
        },
        {
          name: 'fingmap',
          icon: '🗺️',
          description: 'Interactive map of the Faculty of Engineering campus to help new students navigate.',
          tech: ['Vue.js 3', 'Leaflet', 'Vite', 'JavaScript'],
          features: [
            'Interactive campus map',
            'Location markers',
            'Room information',
            'Mobile responsive'
          ],
          github: 'https://github.com/LibrecourseUY/fingmap',
          demo: null,
          deepwiki: 'https://deepwiki.com/LibrecourseUY/fingmap'
        }
      ]
    }
  }
}
</script>

<style scoped>
.repos h1 {
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

.repos-grid {
  display: grid;
  gap: 2rem;
}

.repo-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s, border-color 0.2s;
}

.repo-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

.repo-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.repo-icon {
  font-size: 2.5rem;
}

.repo-header h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
}

.repo-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.repo-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background: var(--bg-tertiary);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.repo-features {
  margin-bottom: 1.5rem;
}

.repo-features h4 {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.repo-features ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.repo-features li {
  padding: 0.3rem 0;
  padding-left: 1.2rem;
  position: relative;
  color: var(--text-secondary);
}

.repo-features li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary);
}

.repo-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.repo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 6px;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.2s;
}

.repo-link:hover {
  background: var(--primary);
  border-color: var(--primary);
}

.repo-link.deepwiki {
  background: #6366f1;
  border-color: #6366f1;
}

.repo-link.deepwiki:hover {
  background: #4f46e5;
  border-color: #4f46e5;
}

@media (max-width: 768px) {
  .repos h1 {
    font-size: 1.75rem;
  }
  
  .intro {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .repo-card {
    padding: 1.25rem;
  }
  
  .repo-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .repo-icon {
    font-size: 2rem;
  }
  
  .repo-header h3 {
    font-size: 1.25rem;
  }
  
  .repo-description {
    font-size: 1rem;
  }
  
  .repo-tech {
    gap: 0.4rem;
  }
  
  .tech-badge {
    font-size: 0.8rem;
    padding: 0.25rem 0.6rem;
  }
  
  .repo-features ul {
    grid-template-columns: 1fr;
  }
  
  .repo-links {
    flex-direction: column;
  }
  
  .repo-link {
    justify-content: center;
  }
}
</style>
