import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-neural-network.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with Neural Network */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 bg-gradient-mesh"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-gradient-primary">Shreyas</span>
              <br />
              <span className="text-foreground">Katagi</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              AI/ML Engineer | Full-stack AI Product Builder | Zoom + Slack Bot Architect
            </h2>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl prose-portfolio">
              "Building intelligent systems that listen, understand, and act in real-time."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg shadow-glow-strong animate-glow-pulse"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com/Svkatagi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-elegant hover:shadow-glow group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://linkedin.com/in/shreyaskatagi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-elegant hover:shadow-glow group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="mailto:svkatagi18@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth shadow-elegant hover:shadow-glow group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('projects')}
            className="animate-float"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-smooth" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;