# Emondadu React Project - Setup & Getting Started

## 🎉 Welcome!

Your Emondadu dashboard has been converted to a modern React 19 project with Vite. This guide will help you get started.

## ✅ What's Installed

### Latest Technologies
- **React 19** - Latest concurrent React features
- **Vite 5** - Lightning-fast build tool (10-100x faster than webpack)
- **React Router 6** - Modern client-side routing
- **Axios** - Promise-based HTTP client
- **ESLint 9** - Code quality and consistency
- **Lucide React** - Beautiful icons (ready to use)

### Project Features
- ✅ Fully responsive design
- ✅ Modern component architecture
- ✅ CSS custom properties for theming
- ✅ Dark mode ready
- ✅ TypeScript ready
- ✅ Production-optimized build

## 🚀 Quick Start

### 1. Install Dependencies (Already Done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
This opens the app at `http://localhost:5173` with hot module replacement.

### 3. Build for Production
```bash
npm run build
```
Creates optimized `dist/` folder for deployment.

### 4. Preview Production Build
```bash
npm run preview
```
Test the production build locally.

## 📂 Project Structure

```
emondadu/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Alert.jsx         # Alert notifications
│   │   ├── Card.jsx          # Card container
│   │   ├── Button.jsx        # Action buttons
│   │   ├── Stat.jsx          # Statistics display
│   │   ├── Section.jsx       # Section headers
│   │   ├── ProfileCard.jsx   # User profile display
│   │   ├── Grid.jsx          # Responsive grid layout
│   │   ├── ProgressBar.jsx   # Progress indicators
│   │   ├── PieChart.jsx      # Chart visualization
│   │   └── index.js          # Component exports
│   ├── styles/
│   │   ├── index.css         # Global styles & CSS variables
│   │   └── components.css    # Component-specific styles
│   ├── App.jsx               # Main app component
│   └── main.jsx              # React entry point
├── index.html                # HTML template
├── vite.config.js            # Vite config
├── package.json              # Dependencies
├── .eslintrc.cjs             # Linting rules
├── .gitignore                # Git ignore patterns
├── README.md                 # Full documentation
└── SETUP.md                  # This file
```

## 🧩 Components Overview

### Header
Navigation header with tabs and status indicator.
```jsx
<Header activeTab={activeTab} setActiveTab={setActiveTab} />
```

### Alert
Flexible notifications (info, success, warning).
```jsx
<Alert type="info">Message here</Alert>
```

### Card & Grid
Container components for layout.
```jsx
<Grid columns="grid-2">
  <Card>Content</Card>
  <Card>Content</Card>
</Grid>
```

### Stat
Display statistics with labels and values.
```jsx
<Stat label="Budget" value="Rp100.000.000" status="Aktif" />
```

### Section
Section headers with numbering.
```jsx
<Section number="1" title="Finance">Content</Section>
```

### Button
Action buttons with variants.
```jsx
<Button variant="primary" block={true}>
  Click Me
</Button>
```

## 🎨 Customizing Colors

All colors are CSS variables in `src/styles/index.css`:

```css
:root {
  --primary: #2563eb;
  --success: #16a34a;
  --warning: #ea580c;
  --danger: #dc2626;
  /* ... more colors ... */
}
```

To change theme colors, simply update these variables.

## 📝 Adding New Components

1. Create file: `src/components/YourComponent.jsx`
```jsx
export default function YourComponent({ prop1, prop2 }) {
  return (
    <div className="card">
      {/* content */}
    </div>
  )
}
```

2. Export from `src/components/index.js`:
```jsx
export { default as YourComponent } from './YourComponent'
```

3. Import in App.jsx:
```jsx
import { YourComponent } from './components'
```

## 🔧 npm Scripts

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm run preview       # Preview production build

# Code Quality
npm run lint          # Check code quality
npm run lint:fix      # Fix linting issues automatically
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📚 Resources

- [React 19 Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [React Router](https://reactrouter.com)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill
npm run dev
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run lint:fix  # Fix linting issues first
npm run build     # Try building again
```

## 💡 Next Steps

1. ✅ Review the component structure
2. ✅ Customize colors in CSS variables
3. ✅ Add new features using components
4. ✅ Connect to your API using Axios
5. ✅ Deploy to production

## 📧 Questions?

Refer to README.md for detailed documentation or check the official documentation links above.

Happy coding! 🎉
