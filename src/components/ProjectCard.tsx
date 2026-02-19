import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  index: number;
  href?: string;
}

const ProjectCard = ({ title, image, index, href = "#" }: ProjectCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.35, ease: "easeOut" } }}
      className="group block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary shadow-md group-hover:shadow-2xl transition-shadow duration-500 border border-border/30 group-hover:border-primary/20">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </motion.div>
        </div>
      </div>

      {/* Title */}
      <p className="mt-4 text-center text-foreground font-medium text-sm tracking-wide group-hover:text-primary transition-colors duration-300">
        {title}
      </p>
    </motion.a>
  );
};

export default ProjectCard;
