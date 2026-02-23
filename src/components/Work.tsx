import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import nexifyvpnThumb from "@/assets/nexifyvpn-thumbnail.png";

const projects = [
  {
    title: "NexifyVPN",
    image: nexifyvpnThumb,
    href: "https://nexifyvpn.com",
    category: "Web App",
    height: "tall",
  },
  {
    title: "HairCut Recommendation",
    image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960",
    href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6",
    category: "UX Design",
    height: "short",
  },
  {
    title: "Maktab",
    image: "https://framerusercontent.com/images/lS2JBP2RGiWlbMACBoqI59mvtI.png?width=1280&height=960",
    href: "https://usemaktab.com/",
    category: "Product Design",
    height: "medium",
  },
  {
    title: "Donna AI Receptionist",
    image: "https://framerusercontent.com/images/KX5sHXOoo12HjwkGFDsPXUoekIQ.png?width=1280&height=960",
    href: "https://donnaio.ai/",
    category: "AI Product",
    height: "tall",
  },
  {
    title: "Sanialarm",
    image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960",
    href: "https://sanialarm.de/",
    category: "Web Design",
    height: "medium",
  },
  {
    title: "Quick Swapper",
    image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960",
    href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en",
    category: "Mobile App",
    height: "short",
  },
  {
    title: "MATE Social App",
    image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960",
    href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1",
    category: "UX/UI Design",
    height: "medium",
  },
  {
    title: "Rapidos Booking",
    image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960",
    href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1",
    category: "Mobile App",
    height: "tall",
  },
  {
    title: "Diet Achiever",
    image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960",
    href: "https://dietachiever.com/",
    category: "Web App",
    height: "short",
  },
];

const sizeMap: Record<string, string> = {
  tall: "col-span-1 row-span-2",
  medium: "col-span-1 row-span-2",
  short: "col-span-1 row-span-1",
};

const ProjectTile = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${sizeMap[project.height]} relative rounded-2xl overflow-hidden cursor-pointer group block min-h-[200px]`}
    >
      {/* Image */}
      <motion.div
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom gradient — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/5 to-transparent" />

      {/* Hover overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-foreground/30 backdrop-blur-[2px]"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        <motion.span
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0.6, y: isHovered ? 0 : 6 }}
          transition={{ duration: 0.3, delay: 0.04 }}
          className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/70 font-medium mb-1"
        >
          {project.category}
        </motion.span>
        <div className="flex items-end justify-between gap-2">
          <motion.h3
            animate={{ y: isHovered ? 0 : 3 }}
            transition={{ duration: 0.3 }}
            className="text-primary-foreground font-semibold text-lg md:text-xl leading-tight"
          >
            {project.title}
          </motion.h3>
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.5,
              rotate: isHovered ? 0 : -45,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-foreground/20 backdrop-blur-md flex items-center justify-center border border-primary-foreground/20"
          >
            <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

const Work = () => {
  // Split projects into 3 columns for masonry
  const columns: (typeof projects)[] = [[], [], []];
  projects.forEach((project, i) => {
    columns[i % 3].push(project);
  });

  return (
    <section id="work" className="py-20 md:py-32 relative">
      {/* Dotted background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-3 block">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight">
              Projects I've crafted
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-[200px] text-right">
            Hover to explore, click to visit
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] gap-4">
          {projects.map((project, index) => (
            <ProjectTile key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
