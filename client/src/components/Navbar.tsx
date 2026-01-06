import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="text-xl md:text-2xl font-bold font-display tracking-tight cursor-pointer"
        >
          Jaswanth<span className="text-primary">.dev</span>
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              activeClass="text-primary font-semibold"
            >
              {link.name}
            </ScrollLink>
          ))}
          <div className="flex items-center gap-3 ml-4 border-l border-white/10 pl-6">
            <a href="https://github.com/jaswanthkadimisetti" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/kadimisettijaswanth" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-white/5"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <div className="flex gap-4 mt-4">
                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href="https://github.com/jaswanthkadimisetti" target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href="https://linkedin.com/in/kadimisettijaswanth" target="_blank" rel="noreferrer">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
