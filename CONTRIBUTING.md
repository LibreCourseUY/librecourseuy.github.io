# Contributing to fingdev.github.io

Thank you for your interest in improving our website! This guide will help you get started.

## About the Website

This is the official website for Fingdev, built with Vue.js 3. It includes:
- Home page with project overview
- Git & GitHub guide for beginners
- Projects showcase
- Contribution guide

## Tech Stack

- **Vue.js 3** - Frontend framework
- **Vue Router** - Client-side routing
- **Vite** - Build tool

## Development Setup

### Prerequisites

- Node.js 18+
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fingdev/fingdev.github.io.git
cd fingdev.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Project Structure

```
fingdev.github.io/
├── src/
│   ├── components/    # Vue components
│   │   ├── Home.vue       # Homepage
│   │   ├── GitGuide.vue   # Git tutorial
│   │   ├── Repos.vue      # Projects showcase
│   │   └── Contribute.vue # Contribution guide
│   ├── App.vue        # Main app component
│   └── main.js        # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies
```

## Making Changes

1. Create a new branch:
```bash
git checkout -b feature/your-feature
```

2. Make your changes in the Vue components

3. Test your changes locally with `npm run dev`

4. Commit your changes:
```bash
git add .
git commit -m "feat: add new section"
```

5. Push and create Pull Request:
```bash
git push origin feature/your-feature
```

## Code Standards

- Use Vue 3 Composition API (`<script setup>` or `setup()` function)
- Follow existing component structure
- Keep components small and reusable
- Use semantic HTML

## Commit Messages

We follow Conventional Commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring

## Signed Commits (Required)

All commits must be signed. This is a mandatory requirement for contributing.

### Why Signed Commits?

- **Security**: Verifies that you are who you claim to be
- **Integrity**: Guarantees the commit wasn't modified after creation
- **Trust**: Other contributors know changes genuinely come from you
- **Professionalism**: Industry best practice for open source projects

### Setup

Follow our Git Guide to set up your GPG key:
- [GPG Key Setup](https://fingdev.github.io/git)

Configure Git to sign commits by default:
```bash
git config --global commit.gpgsign true
```

## Questions?

Open an issue on GitHub if you have questions!

---

Made with ❤️ by the Fingdev community
