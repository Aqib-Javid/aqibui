import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary shadow-lg group-hover:shadow-xl transition-shadow duration-500">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Title */}
      <motion.p
        className="mt-4 text-center text-foreground font-medium text-sm tracking-wide"
      >
        {title}
      </motion.p>
    </motion.a>
  );
};

export default ProjectCard;
