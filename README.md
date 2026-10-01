# Emondadu - Platform Dana RT

Modern React.js dashboard for managing Village Fund (Dana RT) allocation and planning. Built with the latest technologies and best practices.

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features and improved performance
- **Vite 5** - Ultra-fast build tool and dev server
- **Modern CSS** - Custom properties and responsive design
- **ESLint 9** - Code quality and consistency
- **Axios** - Promise-based HTTP client
- **React Router 6** - Client-side routing
- **Lucide React** - Beautiful SVG icons
- **JetBrains Mono** - Professional monospace font

## 📦 Project Structure

```
emondadu/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Alert.jsx
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   ├── Stat.jsx
│   │   ├── Section.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Grid.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── PieChart.jsx
│   │   └── index.js
│   ├── styles/
│   │   ├── index.css      # Global styles and CSS variables
│   │   └── components.css # Component-specific styles
│   ├── App.jsx            # Main application component
│   └── main.jsx           # React entry point
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies
├── .eslintrc.cjs          # ESLint configuration
└── .gitignore             # Git ignore rules
```

## 🎯 Features

✅ **Clean Modern UI** - Professional design with excellent UX
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Component-Based** - Reusable, maintainable components
✅ **Type-Safe** - Ready for TypeScript integration
✅ **Performance Optimized** - Fast load times with Vite
✅ **Accessible** - Following accessibility best practices
✅ **Dark Mode Ready** - CSS variables for theme switching

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm 9+

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

5. Run linter:
```bash
npm run lint
```

6. Fix linting issues:
```bash
npm run lint:fix
```

## 📚 Component API

### Header
Header component with navigation tabs and status indicator.

```jsx
<Header activeTab={activeTab} setActiveTab={setActiveTab} />
```

### Alert
Flexible alert component with multiple types.

```jsx
<Alert type="info">Your message here</Alert>
```

Types: `info`, `success`, `warning`

### Card
Container component for content grouping.

```jsx
<Card hoverable={true} clickable={true}>
  <CardHeader title="Title" subtitle="Subtitle" label="Label" />
  {/* content */}
</Card>
```

### Button
Action button component.

```jsx
<Button variant="primary" size="md" block={false}>
  Click me
</Button>
```

Variants: `primary`, `secondary`
Sizes: `sm`, `md`

### Stat
Statistics display component.

```jsx
<Stat 
  label="Anggaran" 
  value="Rp100.000.000"
  status="Aktif"
  footer="Additional info"
/>
```

### Section
Section header component.

```jsx
<Section number="1" title="Section Title">
  {/* content */}
</Section>
```

### ProfileCard
User profile display component.

```jsx
<ProfileCard 
  name="Name"
  role="Role"
  avatar="AB"
  items={[
    { label: 'Key', value: 'Value' }
  ]}
/>
```

### Grid
Responsive grid layout.

```jsx
<Grid columns="grid-2">
  {/* items */}
</Grid>
```

Columns: `auto-fit`, `grid-2`, `grid-3`

### ProgressBar
Progress indicator.

```jsx
<ProgressBar value={75} label="Progress" showValue={true} />
```

### PieChart
Pie chart visualization.

```jsx
<PieChart segments={segments} />
```

## 🎨 CSS Variables

The design system uses CSS custom properties for consistent theming:

```css
:root {
  --primary: #2563eb;
  --success: #16a34a;
  --warning: #ea580c;
  --danger: #dc2626;
  
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fb;
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}
```

## 🔄 Future Enhancements

- [ ] TypeScript migration
- [ ] Zustand for state management
- [ ] React Query for data fetching
- [ ] Dark mode toggle
- [ ] More chart types
- [ ] Form components
- [ ] Authentication system
- [ ] API integration
- [ ] Testing suite (Vitest)
- [ ] Storybook integration

## 📝 Development

### Code Style

This project uses ESLint for code quality. Run lint checks with:

```bash
npm run lint
npm run lint:fix
```

### Component Guidelines

1. Keep components small and focused
2. Use CSS classes for styling
3. Props should be descriptive
4. Export components from index.js
5. Use semantic HTML

### Adding New Components

1. Create component file in `src/components/`
2. Use functional components with hooks
3. Add to `src/components/index.js`
4. Document props and usage

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag dist/ folder to Netlify
```

## 📄 License

MIT

## 👨‍💻 Contributing

1. Create a feature branch
2. Make your changes
3. Run linter: `npm run lint:fix`
4. Commit with clear messages
5. Push and create a pull request

## 🤝 Support

For issues and questions, please create an issue on GitHub.

---

Made with ❤️ for Indonesia's village development
