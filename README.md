# Dilusso - Modern Furniture Ecommerce App

A stunning, modern furniture ecommerce web application with 3D animations built with Next.js, React Three Fiber, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Beautiful, responsive UI with smooth animations
- 🎭 **3D Visualizations** - Interactive 3D furniture models using Three.js
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Performance** - Built with Next.js 14 for optimal performance
- 🎯 **Framer Motion** - Smooth animations and transitions throughout

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero3D.tsx       # 3D hero section
│   ├── Chair3D.tsx      # 3D chair model
│   ├── ProductShowcase.tsx # Product grid
│   ├── ProductCard.tsx  # Product card component
│   ├── FeaturedSection.tsx # Features section
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

