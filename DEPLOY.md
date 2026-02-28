# Deployment Guide for fingdev.github.io

This guide explains how to host the Fingdev website on GitHub Pages.

## Option 1: Automatic Deployment (Recommended)

### Step 1: Fork the Repository

1. Go to: https://github.com/LibrecourseUY/fingdev.github.io
2. Click the "Fork" button
3. Select your GitHub account

### Step 2: Rename the Repository (Optional)

If you want the site to appear at `yourusername.github.io`:

1. Go to your forked repository Settings
2. Rename to `yourusername.github.io`
3. The site will be live at `https://yourusername.github.io`

### Step 3: Enable GitHub Pages

1. Go to Repository Settings
2. Navigate to "Pages" (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main" (or "master")
   - **Folder**: Select "/ (root)"
4. Click Save

Wait 1-2 minutes, then your site will be live at `https://yourusername.github.io`

---

## Option 2: Using GitHub Actions (Automatic)

This method automatically deploys when you push to main.

### Step 1: Create GitHub Actions Workflow

Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Step 2: Enable GitHub Pages

1. Go to Settings → Pages
2. Source: Select "GitHub Actions"

---

## Option 3: Deploy under fingdev.github.io

To deploy under the official `fingdev.github.io`:

1. **Transfer Ownership** (requires admin access):
   - Go to repository Settings
   - Click "Transfer ownership"
   - Transfer to `fingdev` organization

2. **Update Base URL** (if needed):
   - Edit `vite.config.js` and set `base: '/'`
   
3. **Enable Pages**:
   - Go to Settings → Pages
   - Select "main" branch, root folder

---

## Custom Domain (Optional)

If you want a custom domain:

1. Go to Settings → Pages
2. Enter your custom domain under "Custom domain"
3. Create the appropriate DNS records with your domain provider

---

## Troubleshooting

### Build Errors

```bash
# Test build locally
npm run build
```

Check for:
- Missing dependencies: `npm install`
- Vue syntax errors
- Missing imports

### 404 Errors After Deploy

- Check that the `base` in vite.config.js matches your deployment URL
- Ensure the `dist` folder was created

### Cache Issues

Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

---

## Quick Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview build locally
npm run preview
```
