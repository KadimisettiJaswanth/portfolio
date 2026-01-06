import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/jaswanthkadimisetti" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/kadimisettijaswanth" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:jasuk05@gmail.com" 
            className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-muted-foreground flex items-center justify-center gap-1.5 text-sm">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Kadimisetti Jaswanth
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
