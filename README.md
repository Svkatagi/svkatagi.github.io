# Shreyas Katagi - Portfolio Website

Personal portfolio website showcasing AI/ML engineering work, projects, and skills.

## 🚀 Live Demo

Visit: [https://svkatagi.github.io](https://svkatagi.github.io)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Svkatagi/svkatagi.github.io.git
   cd svkatagi.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Build & Deploy

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── Skills.tsx     # Skills showcase
│   ├── Projects.tsx   # Projects section
│   ├── Experience.tsx # Work experience
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer component
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── assets/            # Images and static files
```

## 🎨 Customization

### Styling
- Uses Tailwind CSS for styling
- Custom theme configuration in `tailwind.config.ts`
- Component variants using `class-variance-authority`

### Content
- Update personal information in component files
- Replace images in `src/assets/`
- Modify content in respective component files

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at `https://svkatagi.github.io`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Shreyas Katagi
