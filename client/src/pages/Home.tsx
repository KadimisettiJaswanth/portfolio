import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Download, Code2, Database, Terminal, Layout, Cpu, Globe, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";

// Assets
import resumePdf from "@assets/resume.pdf";

const taglines = [
  "Building digital experiences that matter.",
  "Full Stack Developer | Problem Solver | Learner.",
  "Transforming complex problems into elegant code.",
  "Engineering the future, one line of code at a time.",
  "Your vision, engineered to reality."
];

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
              Available for Hire
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-gradient">Kadimisetti Jaswanth</span>
            </h1>
            
            <div className="h-20 md:h-24 mb-6">
              <motion.p 
                key={taglineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
              >
                {taglines[taglineIndex]}
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <ScrollLink to="projects" smooth={true} offset={-80}>
                <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  View Work <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </ScrollLink>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-2 hover:bg-secondary/80">
                  Resume <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-full border-2 border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl -z-10" />
              <Code2 className="w-32 h-32 text-primary/80 animate-pulse" />
              
              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 bg-card border border-white/10 rounded-2xl shadow-xl"
              >
                <Database className="w-8 h-8 text-blue-400" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 p-4 bg-card border border-white/10 rounded-2xl shadow-xl"
              >
                <Terminal className="w-8 h-8 text-green-400" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -12, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-4 p-3 bg-card border border-white/10 rounded-2xl shadow-xl"
              >
                <Layout className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary/20 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeading title="About Me" subtitle="Who I Am" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center"
          >
            <p className="mb-6">
              I am a penultimate-year <strong className="text-foreground">B.Tech Computer Science student</strong> at Mohan Babu University with a strong academic record (GPA 8.94). I combine a solid foundation in algorithms and data structures with practical full-stack development skills.
            </p>
            <p>
              My passion lies in <strong className="text-primary">solving real-world problems through code</strong>, whether it's building web applications or analyzing financial data. I am a growth-oriented learner eager to contribute to innovative teams and build solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Technical Skills" subtitle="My Toolbox" />

          <div className="grid gap-12 max-w-5xl mx-auto">
            {/* Languages */}
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-3">
                <Code2 className="text-primary" /> Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillBadge name="C" icon={<Code2 className="w-4 h-4" />} delay={0.1} />
                <SkillBadge name="Java" icon={<Code2 className="w-4 h-4" />} delay={0.2} />
                <SkillBadge name="Python" icon={<Code2 className="w-4 h-4" />} delay={0.3} />
                <SkillBadge name="SQL" icon={<Database className="w-4 h-4" />} delay={0.4} />
                <SkillBadge name="JavaScript (ES6+)" icon={<Code2 className="w-4 h-4" />} delay={0.5} />
              </div>
            </div>

            {/* Web Technologies */}
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-3">
                <Globe className="text-primary" /> Web Technologies
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillBadge name="HTML5" icon={<Layout className="w-4 h-4" />} delay={0.1} />
                <SkillBadge name="CSS3" icon={<Layout className="w-4 h-4" />} delay={0.2} />
                <SkillBadge name="React.js" icon={<Globe className="w-4 h-4" />} delay={0.3} />
                <SkillBadge name="Tailwind CSS" icon={<Layout className="w-4 h-4" />} delay={0.4} />
                <SkillBadge name="Framer Motion" icon={<Layout className="w-4 h-4" />} delay={0.5} />
              </div>
            </div>

            {/* Tools & Core */}
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-3">
                <Cpu className="text-primary" /> Tools & Concepts
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillBadge name="Git & GitHub" icon={<Terminal className="w-4 h-4" />} delay={0.1} />
                <SkillBadge name="MATLAB" icon={<Cpu className="w-4 h-4" />} delay={0.2} />
                <SkillBadge name="Data Structures" icon={<Database className="w-4 h-4" />} delay={0.3} />
                <SkillBadge name="Algorithms" icon={<Cpu className="w-4 h-4" />} delay={0.4} />
                <SkillBadge name="OOP" icon={<Code2 className="w-4 h-4" />} delay={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Journey So Far" subtitle="Experience & Education" />

          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold font-display text-foreground">B.Tech CSE</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">2023-2027</span>
                </div>
                <p className="text-muted-foreground font-medium">Mohan Babu University</p>
                <p className="text-sm text-muted-foreground/80 mt-2">Current GPA: 8.94</p>
              </div>
            </motion.div>

            {/* Timeline Item 2: Sasi Junior College */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold font-display text-foreground">Intermediate (MPC)</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">2021-2023</span>
                </div>
                <p className="text-muted-foreground font-medium">Sasi Junior College</p>
                <p className="text-sm text-muted-foreground/80 mt-2">Score: 95.1%</p>
              </div>
            </motion.div>

             {/* Timeline Item 4 */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold font-display text-foreground">Schooling</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">2021</span>
                </div>
                <p className="text-muted-foreground font-medium">Good Shephard English Medium School</p>
                <p className="text-sm text-muted-foreground/80 mt-2">Score: 84.5%</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Certifications" subtitle="Professional Growth" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/20 transition-all group"
            >
              <Briefcase className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Software Engineering</h3>
              <p className="text-sm text-muted-foreground">J.P. Morgan Chase & Co. Virtual Experience</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/20 transition-all group"
            >
              <Cpu className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Solutions Architecture</h3>
              <p className="text-sm text-muted-foreground">AWS Virtual Experience</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/20 transition-all group"
            >
              <Terminal className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Code Rush 2K25</h3>
              <p className="text-sm text-muted-foreground">Top 20 Hackathon Finalist</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/20 transition-all group"
            >
              <Layout className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground">HTML & CSS Bootcamp Certification</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Featured Projects" subtitle="What I've Built" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="EasyRide"
              description="A responsive ride-sharing platform concept. Focuses on user-friendly interface design and seamless booking flow simulation."
              tags={["HTML5", "CSS3", "JavaScript", "Responsive Design"]}
              links={{ github: "https://github.com/jaswanthkadimisetti" }}
              delay={0.1}
            />
            <ProjectCard
              title="Financial Data Feed"
              description="Developed a backend system to fetch and process financial data using a REST API during JP Morgan Chase simulation."
              tags={["Python", "REST API", "Data Processing", "Backend"]}
              links={{ github: "https://github.com/jaswanthkadimisetti" }}
              delay={0.2}
            />
            <ProjectCard
              title="Netflix Clone"
              description="A faithful recreation of the Netflix homepage demonstrating advanced layout proficiency and modern CSS techniques."
              tags={["HTML5", "CSS3", "Flexbox", "Grid"]}
              links={{ github: "https://github.com/jaswanthkadimisetti" }}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-secondary/20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Get In Touch" subtitle="Let's Connect" />

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Let's build something amazing together.</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently looking for internships and new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:jasuk05@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-card border border-white/10 group-hover:border-primary group-hover:text-primary transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Me</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">jasuk05@gmail.com</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/kadimisettijaswanth" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-card border border-white/10 group-hover:border-primary group-hover:text-primary transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">Connect on LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
