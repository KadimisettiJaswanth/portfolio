import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  delay?: number;
}

export function ProjectCard({ title, description, tags, links, delay = 0 }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col h-full bg-card rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
            <Code2 className="w-6 h-6" />
          </div>
          <div className="flex gap-2">
            {links?.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                title="View Source Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {links?.demo && (
              <a 
                href={links.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground/80 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
