# 🎨 Emondadu Component Showcase

Visual guide to all available components and how to use them.

---

## 📋 Table of Contents

1. [Header](#header)
2. [Alert](#alert)
3. [Card](#card)
4. [Button](#button)
5. [Stat](#stat)
6. [Section](#section)
7. [ProfileCard](#profilecard)
8. [Grid](#grid)
9. [ProgressBar](#progressbar)
10. [PieChart](#piechart)

---

## Header

Navigation header with tabs and status indicator.

### Visual
```
╔════════════════════════════════════════════════════════════════╗
║ [EM]Emondadu  [Beranda] [Usulan] [Laporan]    🔒 Terkunci ✓  ║
╚════════════════════════════════════════════════════════════════╝
```

### Usage
```jsx
<Header activeTab={activeTab} setActiveTab={setActiveTab} />
```

### Props
- `activeTab` - Currently active tab
- `setActiveTab` - Callback to change tab

---

## Alert

Notification component with multiple types and colors.

### Visual

**Info Alert:**
```
┌──────────────────────────────────────────────────────┐
│ ℹ️  Informasi: Dana RT dikelola dan dipertanggung..  │
└──────────────────────────────────────────────────────┘
```

**Success Alert:**
```
┌──────────────────────────────────────────────────────┐
│ ✓  Berhasil: Perubahan telah disimpan               │
└──────────────────────────────────────────────────────┘
```

**Warning Alert:**
```
┌──────────────────────────────────────────────────────┐
│ ⚠  Peringatan: Parameter tahun terkunci             │
└──────────────────────────────────────────────────────┘
```

### Usage
```jsx
<Alert type="info">
  <strong>Informasi:</strong> Your message here
</Alert>

<Alert type="success">Message here</Alert>
<Alert type="warning">Message here</Alert>
```

### Types
- `info` - Blue background
- `success` - Green background
- `warning` - Orange background

---

## Card

Flexible container for content grouping.

### Visual
```
┌────────────────────────────────────┐
│ Card Title                 [Label] │
│ Card subtitle                      │
│                                    │
│ Your content goes here             │
│                                    │
└────────────────────────────────────┘
```

### Usage
```jsx
<Card hoverable={true} clickable={true}>
  <CardHeader 
    title="Card Title"
    subtitle="Subtitle text"
    label="Active"
  />
  <div>Your content here</div>
</Card>
```

### Props
- `hoverable` - Add hover effect
- `clickable` - Cursor pointer
- `className` - Custom CSS class

---

## Button

Action buttons with variants and sizes.

### Visual

**Primary Button:**
```
┌─────────────────┐
│ Click Me        │
└─────────────────┘
```

**Secondary Button:**
```
┌─────────────────┐
│ Click Me        │
└─────────────────┘
```

**Block Button:**
```
┌──────────────────────────────────┐
│ Full Width Button                │
└──────────────────────────────────┘
```

### Usage
```jsx
<Button variant="primary" size="md">
  Primary Button
</Button>

<Button variant="secondary" size="sm">
  Small Secondary
</Button>

<Button variant="primary" block={true}>
  Full Width Button
</Button>
```

### Props
- `variant` - `primary` or `secondary`
- `size` - `sm` or `md`
- `block` - Full width (default: false)
- `onClick` - Click handler

---

## Stat

Statistics display with label and large value.

### Visual
```
┌─────────────────────────────┐
│ ANGGARAN RT 02              │
│                             │
│ Rp100.000.000               │
│                             │
│ Aktif                       │
│                             │
│ Additional footer info      │
└─────────────────────────────┘
```

### Usage
```jsx
<Stat 
  label="Anggaran RT 02" 
  value="Rp100.000.000"
  status="Aktif"
  footer="Tahun Anggaran 2026"
/>
```

### Props
- `label` - Top label (uppercase)
- `value` - Large number display
- `status` - Optional badge (Aktif, Selesai, etc)
- `footer` - Bottom descriptive text

---

## Section

Section header with numbering.

### Visual
```
┌─────────────────────────────────────┐
│ 1  INFORMASI DANA                   │
└─────────────────────────────────────┘
  [Section content goes here]

┌─────────────────────────────────────┐
│ 2  INFORMASI KEPENDUDUKAN           │
└─────────────────────────────────────┘
  [Section content goes here]

┌─────────────────────────────────────┐
│ 3  STATISTIK DESIL & INFRASTRUKTUR  │
└─────────────────────────────────────┘
  [Section content goes here]

┌─────────────────────────────────────┐
│ 4  PERENCANAAN PEMBANGUNAN DESA     │
└─────────────────────────────────────┘
  [Section content goes here]
```

### Usage
```jsx
<Section number="1" title="Informasi Dana">
  <Grid>
    <Stat label="Budget" value="Rp100M" />
  </Grid>
</Section>
```

### Props
- `number` - Section number (1-9)
- `title` - Section title (auto-uppercase)
- `children` - Section content

---

## ProfileCard

User profile display card.

### Visual
```
┌────────────────────────────────────┐
│ [SD] Pak Sudirman                  │
│      Ketua RT 02 · Sepaso Selatan  │
├────────────────────────────────────┤
│ Kecamatan          Bengalon        │
│ Kabupaten          Kutai Timur     │
│ Pagu RT            Rp100.000.000   │
│ Dasar Hukum        Perbup 13/2025  │
└────────────────────────────────────┘
```

### Usage
```jsx
<ProfileCard 
  name="Pak Sudirman"
  role="Ketua RT 02 · Sepaso Selatan"
  avatar="SD"
  items={[
    { label: "Kecamatan", value: "Bengalon" },
    { label: "Kabupaten", value: "Kutai Timur" },
    { label: "Pagu RT", value: "Rp100.000.000" },
    { label: "Dasar Hukum", value: "Perbup 13/2025" }
  ]}
/>
```

### Props
- `name` - User's full name
- `role` - User's role/position
- `avatar` - Avatar initials (2 chars)
- `items` - Array of { label, value } pairs

---

## Grid

Responsive layout system.

### Visual

**Grid Auto-Fit (3 columns):**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │
│ Item 1   │  │ Item 2   │  │ Item 3   │
│          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘
┌──────────┐
│          │
│ Item 4   │
│          │
└──────────┘
```

**Grid 2 Columns:**
```
┌─────────────────────┐  ┌─────────────────────┐
│                     │  │                     │
│ Item 1              │  │ Item 2              │
│                     │  │                     │
└─────────────────────┘  └─────────────────────┘
```

### Usage
```jsx
<Grid columns="auto-fit">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

<Grid columns="grid-2">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</Grid>

<Grid columns="grid-3">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</Grid>
```

### Props
- `columns` - `auto-fit`, `grid-2`, `grid-3`
- `className` - Additional CSS class

---

## ProgressBar

Progress indicator with label and percentage.

### Visual

**With Label:**
```
Jalan Utama                        100%
████████████████████████████ 100%

Jembatan                            60%
████████████████                 60%

Sarana Air Bersih                   75%
██████████████████████           75%

Sarana Kesehatan                    45%
█████████████                    45%
```

**Without Label:**
```
████████████████████████████░░░░░░░░ 70%
```

### Usage
```jsx
<ProgressBar 
  value={75} 
  label="Sarana Air Bersih"
  showValue={true}
/>

<ProgressBar value={60} showValue={false} />
```

### Props
- `value` - Progress percentage (0-100)
- `label` - Optional label text
- `showValue` - Show percentage (default: true)

---

## PieChart

Data visualization with pie chart and legend.

### Visual
```
       ┌─────────────┐
       │    ◆ 125    │
       │    ◆ 340    │ ← Legend
       │    ◆ 216    │
       └─────────────┘

    ╱─────────────╲
  ╱               ╲
 ╱   ┌─────────┐   ╲
│    │   DESIL │    │
│    │   1741  │    │ ← Donut chart
│    │  total  │    │
 ╲   └─────────┘   ╱
  ╲               ╱
    ╲─────────────╱

Desil 1-3:  125 rumah  (7%)  ████░░░░░░
Desil 4-7:  340 rumah  (20%) ██████████████░░░░░░
Desil 8-10: 216 rumah  (12%) ████████░░░░░░░░░░░░
```

### Usage
```jsx
<PieChart segments={[
  { 
    color: '#2563eb', 
    dash: 78.5, 
    offset: 0, 
    label: 'Desil 1-3 (Prasejahtera): 125 rumah' 
  },
  { 
    color: '#60a5fa', 
    dash: 62.8, 
    offset: -78.5, 
    label: 'Desil 4-7 (Sejahtera): 340 rumah' 
  },
  { 
    color: '#dbeafe', 
    dash: 50, 
    offset: -141.3, 
    label: 'Desil 8-10 (Maju): 216 rumah' 
  }
]} />
```

### Props
- `segments` - Array of segment objects:
  - `color` - CSS color
  - `dash` - SVG stroke-dasharray value
  - `offset` - SVG stroke-dashoffset value
  - `label` - Legend label

---

## 🎨 Color Reference

### Primary Colors
```css
--primary: #2563eb;              /* Actions, highlights */
--primary-hover: #1d4ed8;        /* Hover state */
--primary-light: #eff6ff;        /* Light background */
--primary-lighter: #f0f9ff;      /* Lighter background */
```

### Status Colors
```css
--success: #16a34a;              /* Positive states */
--success-light: #f0fdf4;        /* Success background */

--warning: #ea580c;              /* Warnings */
--warning-light: #fff7ed;        /* Warning background */

--danger: #dc2626;               /* Errors */
--danger-light: #fef2f2;         /* Error background */
```

### Neutral Colors
```css
--text-primary: #1a202c;         /* Heading text */
--text-secondary: #4a5568;       /* Body text */
--text-tertiary: #8a92a6;        /* Muted text */

--bg-primary: #ffffff;           /* Main background */
--bg-secondary: #f8f9fb;         /* Secondary bg */
--bg-tertiary: #f0f2f7;          /* Tertiary bg */

--border-color: #e2e8f0;         /* Borders */
```

---

## 📐 Spacing Scale

```
Padding/Margin sizes (in pixels):
xs: 4px   → Tight spacing
sm: 8px   → Small spacing
md: 16px  → Default spacing
lg: 24px  → Large spacing
xl: 32px  → Extra large
2xl: 64px → Double extra large
```

---

## 🎯 Border Radius

```
--radius-sm: 6px        → Small buttons, inputs
--radius-md: 10px       → Most elements
--radius-lg: 14px       → Cards, modals
--radius-xl: 18px       → Large cards
```

---

## 📱 Responsive Design

### Desktop (1024px+)
- Full grid layouts
- Multi-column designs
- Optimal spacing

### Tablet (768px - 1023px)
- 2-column layouts
- Adjusted spacing
- Touch-friendly

### Mobile (<768px)
- Single column
- Larger touch targets
- Optimized padding

---

## 🎓 Best Practices

### Component Usage
1. **Always use Grid for layouts** - Responsive by default
2. **Card for grouping** - Organize related content
3. **Section for structure** - Clear information hierarchy
4. **Alert for feedback** - User notifications
5. **Button for actions** - Clear call-to-action

### Styling
1. Use CSS variables for colors
2. Rely on Flexbox for alignment
3. Mobile-first responsive design
4. Consistent spacing scale
5. Clear visual hierarchy

### Performance
1. Import only needed components
2. Use lazy loading for charts
3. Memoize heavy components
4. Optimize images and assets
5. Monitor bundle size

---

## 💡 Examples

### Profile Section
```jsx
<ProfileCard 
  name="User Name"
  role="Title"
  avatar="UN"
  items={[
    { label: "Location", value: "Jakarta" },
    { label: "Status", value: "Active" }
  ]}
/>
```

### Statistics Grid
```jsx
<Grid columns="grid-3">
  <Stat label="Total" value="1,234" />
  <Stat label="Active" value="890" status="Aktif" />
  <Stat label="Pending" value="344" />
</Grid>
```

### Section with Content
```jsx
<Section number="1" title="Finance">
  <Alert type="info">Information message</Alert>
  <Grid>
    <Card>Content</Card>
  </Grid>
</Section>
```

### Full Card Example
```jsx
<Card hoverable clickable>
  <CardHeader 
    title="Title"
    subtitle="Subtitle"
    label="Badge"
  />
  <div>Content goes here</div>
  <ProgressBar value={75} label="Progress" />
</Card>
```

---

## 🚀 Ready to Use

All components are:
- ✅ Production-ready
- ✅ Responsive
- ✅ Accessible
- ✅ Documented
- ✅ Tested

Start building amazing UIs with Emondadu components!

---

**Last Updated**: 2026-10-01  
**Status**: ✅ Complete
