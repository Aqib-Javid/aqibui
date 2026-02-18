import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary mb-4">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground/50 text-[11px] uppercase tracking-[0.15em]">
            {category}
          </span>
          {country && (
            <span className="text-muted-foreground/40 text-[11px]">
              {country}
            </span>
          )}
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
        </h3>

        <p className="text-muted-foreground/70 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
