# Rishabh Gupta Portfolio

A modern, elegant portfolio website showcasing the architectural and spatial design work of Rishabh Gupta. Built with React, TypeScript, and Vite, featuring smooth animations and a minimalist design aesthetic.

## 🎨 About

This portfolio website presents Rishabh Gupta's work as an architect and interior/spatial designer. It features a collection of residential projects, competition entries, and academic work, along with a comprehensive profile section detailing education, experience, and professional background.

## ✨ Features

- **Project Gallery**: Browse through a curated collection of architectural and design projects
- **Project Details**: View detailed project pages with image galleries
- **Profile Section**: Comprehensive profile including education, work experience, internships, and extracurricular activities
- **Smooth Animations**: Elegant page transitions and hover effects powered by Framer Motion
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Lazy Loading**: Optimized image loading for better performance
- **Modern UI**: Clean, minimalist design with a focus on showcasing the work

## 🛠️ Technologies

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework (via inline styles/classes)

## 📁 Project Structure

```
rishabh-gupta-portfolio/
├── components/          # Reusable React components
│   ├── LazyImage.tsx   # Lazy-loaded image component
│   └── Navbar.tsx      # Navigation component
├── views/              # Page components
│   ├── Home.tsx        # Project gallery homepage
│   ├── ProjectDetail.tsx # Individual project detail page
│   └── Profile.tsx     # Profile/about page
├── src/
│   └── assets/
│       └── images/     # Project images organized by project
├── data.ts             # Project and profile data
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── vite.config.ts      # Vite configuration
```

## 🎯 Key Features Implementation

### Routing
The application uses React Router with HashRouter for compatibility with static hosting services. Routes include:
- `/` - Home page with project gallery
- `/work/:slug` - Individual project detail pages
- `/profile` - Profile and about page

### Image Management
Project images are organized in the `src/assets/images/` directory, with each project having its own folder containing:
- `thumbnail.jpg` - Project thumbnail for the gallery
- `image-1.jpg`, `image-2.jpg`, etc. - Gallery images for project detail pages

### Data Management
All project and profile data is centralized in `data.ts`, making it easy to update content without modifying component code.

## 📄 License

This project is private and created for Rishabh Gupta's portfolio.

## 👤 About Rishabh Gupta

Rishabh Gupta is an architect and Interior and Spatial Designer currently pursuing a Master of Science in Interior and Spatial Design at Politecnico di Milano (2023-2025). With a Bachelor of Architecture from Babu Banarasi Das University (2015-2020), Rishabh has worked on numerous residential, commercial, and industrial projects, and co-founded VEUM Atelier in 2021.

---

Built with ❤️ for showcasing architectural excellence.
