# fingdev.github.io

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/LibrecourseUY/fingdev.github.io)

The official website for LibrecourseUY - Open Source projects for Engineering students at UdelaR.

## About

This website serves as the central hub for the LibrecourseUY project, providing:
- Information about our mission and projects
- A beginner-friendly Git & GitHub tutorial
- Contribution guides
- Project showcases

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Client-side routing
- **Vite** - Next-generation frontend build tool

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/LibrecourseUY/fingdev.github.io.git
cd fingdev.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 to view the website.

## Building for Production

```bash
npm run build
```

This generates optimized files in the `dist/` folder, ready for deployment.

## Project Structure

```
fingdev.github.io/
├── src/
│   ├── components/
│   │   ├── Home.vue        # Landing page
│   │   ├── GitGuide.vue    # Git tutorial
│ Repos.vue         │   ├── # Projects showcase
│   │   └── Contribute.vue  # Contribution guide
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

Learn more about deployment in our [Deployment Guide](#).

## License

MIT License - see [LICENSE](LICENSE)

---

Made with ❤️ by the LibrecourseUY community
