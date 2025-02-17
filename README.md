# Acrylic Art Gallery Platform

![Project Banner](/public/globe.svg)

A modern web platform for showcasing acrylic artwork, built with Next.js 14. Features responsive design, interactive components, and seamless navigation.

## ✨ Features

- **Immersive Gallery Experience**
  - Dynamic artwork display with hover effects
  - Responsive image grids
  - Animated transitions between pages
- **Modern UI Components**
  - Custom dropdown navigation
  - Interactive contact form
  - Animated banners and hero sections
  - Responsive footer layout
- **Performance Optimized**
  - Static site generation
  - Fast refresh development
  - Optimized image loading

## 🛠 Technologies

- **Core**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
- **Animation**
  - Framer Motion
  - CSS Transitions
- **Icons**
  - SVG imports
  - Custom illustrations

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+ or yarn
- Git (for version control)

### Installation
1. Clone repository
```bash
git clone https://github.com/your-username/acrylic-art-gallery.git
```
2. Install dependencies
```bash
npm install
# or
yarn
```
3. Start development server
```bash
npm run dev
# or
yarn dev
```
4. Open http://localhost:3000 in your browser

## 📁 Project Structure

```bash
my-app/
├── app/
│   ├── acrylic/            # Artwork gallery page
│   │   └── page.tsx
│   ├── contact/            # Contact form page
│   │   └── page.tsx
│   ├── component/          # Reusable components
│   │   ├── banner.tsx      # Animated hero section
│   │   ├── dropdown.tsx    # Interactive navigation
│   │   ├── footer.tsx      # Page footer
│   │   ├── nav.tsx         # Main navigation
│   │   └── image-holder.tsx# Artwork container
│   └── page.tsx            # Home page
├── public/                 # Static assets
│   ├── globe.svg          # Main logo
│   └── next.svg           # Framework logo
```

## 🎨 Key Components Documentation

### `app/component/banner.tsx`
- Handles hero section animations
- Props:
  - `images`: Array of image URLs for gallery
  - `title`: Main heading text
  - `ctaText`: Call-to-action button text
- Uses Framer Motion for smooth transitions

### `app/component/dropdown.tsx`
- Responsive navigation dropdown
- Features:
  - Mobile-friendly toggle
  - Nested menu support
  - Keyboard navigation
  - Auto-positioning based on viewport

### `app/acrylic/page.tsx`
- Main artwork gallery page
- Implements:
  - Masonry-style grid layout
  - Image lazy loading
  - Hover zoom effects
  - Dynamic routing for artwork details

## 🛠 Development Scripts

```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run start   # Start production server
npm run lint    # Run TypeScript and ESLint checks
```

## 🌍 Deployment

### Vercel (Recommended)
1. Push your code to GitHub/GitLab
2. Import project in Vercel dashboard
3. Automatic deployments on push

### Alternative Hosting
1. Build production assets:
```bash
npm run build
```
2. Deploy `.next` folder to your preferred hosting:
   - Netlify
   - AWS Amplify
   - Docker container

## 🤝 Contributing

1. Fork the repository
2. Create feature branch:
```bash
git checkout -b feature/your-feature
```
3. Commit changes:
```bash
git commit -m 'feat: add amazing feature'
```
4. Push to branch:
```bash
git push origin feature/your-feature
``` 
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [Framer Motion Guide](https://www.framer.com/motion/)

> **Note**: Create `.env.local` file for environment variables when integrating backend services.