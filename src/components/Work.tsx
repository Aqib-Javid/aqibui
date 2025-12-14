import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern shopping experience with seamless checkout and real-time inventory management.",
    image: "",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "Intuitive data visualization and analytics platform for financial professionals.",
    image: "",
  },
  {
    title: "Creative Agency Site",
    category: "Branding",
    description: "Bold and expressive web presence for a cutting-edge creative studio.",
    image: "",
  },
  {
    title: "Health & Wellness App",
    category: "Mobile Development",
    description: "Comprehensive wellness tracking with personalized insights and community features.",
    image: "",
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-accent uppercase tracking-widest text-sm font-medium mb-4 block">
            Selected Work
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl">
            Featured <span className="italic text-muted-foreground">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:border-accent hover:text-accent transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
