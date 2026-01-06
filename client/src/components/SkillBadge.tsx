import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SkillBadgeProps {
  name: string;
  icon?: ReactNode;
  delay?: number;
}

export function SkillBadge({ name, icon, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 border border-white/5 hover:border-primary/50 hover:bg-secondary transition-all cursor-default"
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span className="font-medium text-secondary-foreground">{name}</span>
    </motion.div>
  );
}
