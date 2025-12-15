import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  country?: string;
  description: string;
  image: string;
  index: number;
  href?: string;
}

const ProjectCard = ({ title, category, country, description, image, index, href = "#" }: ProjectCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-card mb-4">
        <div 
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Category and Country row */}
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground/70 text-xs uppercase tracking-[0.15em] font-normal">
            {category}
          </span>
          {country && (
            <span className="text-muted-foreground/60 text-xs font-normal">
              {country}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed font-normal">
          {description}
        </p>

        {/* View case link */}
        <div className="pt-1">
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
            View case
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
