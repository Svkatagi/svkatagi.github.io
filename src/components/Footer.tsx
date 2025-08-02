import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient-primary mb-2">Shreyas Katagi</h3>
            <p className="text-muted-foreground">
              Building intelligent systems that shape the future
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Svkatagi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-smooth group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://linkedin.com/in/shreyaskatagi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-smooth group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="mailto:svkatagi18@gmail.com"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-smooth group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Shreyas Katagi. Built with 
            <Heart className="w-4 h-4 text-red-500" />
            and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;