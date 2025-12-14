import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
  href?: string;
}

const ProjectCard = ({ title, category, description, image, index, href = "#" }: ProjectCardProps) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-card mb-6">
        {/* Image placeholder with gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary to-muted transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
        
        {/* Project number */}
        <span className="absolute top-6 left-6 font-display text-6xl text-foreground/10 group-hover:text-accent/30 transition-colors duration-500">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Arrow */}
        <motion.div
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="space-y-2">
        <span className="text-accent text-sm uppercase tracking-wider">{category}</span>
        <h3 className="font-display text-2xl md:text-3xl group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
