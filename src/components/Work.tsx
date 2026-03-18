import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import nexifyvpnThumb from "@/assets/nexifyvpn-thumbnail.png";

const projects = [
  {
    title: "NexifyVPN",
    description: "Web App",
    year: "2024",
    image: nexifyvpnThumb,
    href: "https://nexifyvpn.com",
  },
  {
    title: "HairstyleDiscovery",
    description: "UX Design",
    year: "2024",
    image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960",
    href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6",
  },
  {
    title: "Sanialarm",
    description: "Web Design",
    year: "2023",
    image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960",
    href: "https://sanialarm.de/",
  },
  {
    title: "Quick Swapper",
    description: "Mobile App",
    year: "2023",
    image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960",
    href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en",
  },
  {
    title: "MATE Social App",
    description: "UX/UI Design",
    year: "2023",
    image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960",
    href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1",
  },
  {
    title: "Rapidos Booking",
    description: "Mobile App",
    year: "2022",
    image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960",
    href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1",
  },
  {
    title: "Diet Achiever",
    description: "Web App",
    year: "2022",
    image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960",
    href: "https://dietachiever.com/",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      {/* Card */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/30 shadow-[var(--shadow-card)] border border-border/40 group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-500">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-400 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <h3 className="text-primary-foreground font-display font-bold text-xl md:text-2xl text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="text-primary-foreground/70 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {project.description} · {project.year}
          </p>
          <div className="mt-4 w-10 h-10 rounded-full bg-primary-foreground/15 backdrop-blur-md flex items-center justify-center border border-primary-foreground/25 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Info below card */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div>
          <p className="text-foreground font-display font-semibold text-base group-hover:text-primary transition-colors duration-300">
            {project.title}
          </p>
          <p className="text-muted-foreground text-sm mt-0.5">
            {project.description}
          </p>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums">{project.year}</span>
      </div>
    </motion.a>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-[960px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Favourite work
          </h2>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
