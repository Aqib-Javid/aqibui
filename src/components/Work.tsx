import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import nexifyvpnThumb from "@/assets/nexifyvpn-thumbnail.png";

const projects = [
  {
    title: "NexifyVPN",
    image: nexifyvpnThumb,
    href: "https://nexifyvpn.com",
    category: "Web App",
  },
  {
    title: "HairCut Recommendation",
    image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960",
    href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6",
    category: "UX Design",
  },
  {
    title: "Maktab",
    image: "https://framerusercontent.com/images/lS2JBP2RGiWlbMACBoqI59mvtI.png?width=1280&height=960",
    href: "https://usemaktab.com/",
    category: "Product Design",
  },
  {
    title: "Sanialarm",
    image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960",
    href: "https://sanialarm.de/",
    category: "Web Design",
  },
  {
    title: "Quick Swapper",
    image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960",
    href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en",
    category: "Mobile App",
  },
  {
    title: "Rapidos Booking",
    image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960",
    href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1",
    category: "Mobile App",
  },
  {
    title: "MATE Social App",
    image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960",
    href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1",
    category: "UX/UI Design",
  },
  {
    title: "Diet Achiever",
    image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960",
    href: "https://dietachiever.com/",
    category: "Web App",
  },
  {
    title: "Donna AI Receptionist",
    image: "https://framerusercontent.com/images/KX5sHXOoo12HjwkGFDsPXUoekIQ.png?width=1280&height=960",
    href: "https://donnaio.ai/",
    category: "AI Product",
  },
];

const ProjectItem = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isEven = index % 2 === 0;

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-8 md:py-12 border-b border-border/40 hover:border-foreground/20 transition-colors duration-500 cursor-pointer`}
    >
      {/* Thumbnail */}
      <div className={`md:col-span-7 ${!isEven ? 'md:order-2' : ''} relative overflow-hidden rounded-2xl aspect-[16/10] bg-secondary`}>
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-[-10%] transition-transform duration-700 ease-out group-hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className={`md:col-span-5 ${!isEven ? 'md:order-1 md:text-right' : ''} flex flex-col gap-3`}>
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <div className={`flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 ${!isEven ? 'md:justify-end' : ''}`}>
          <span>View Project</span>
          <motion.span
            className="inline-block"
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 3, y: -3 }}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 md:py-32 relative">
      {/* Dotted background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-lg leading-tight">
            Projects I've crafted with care
          </h2>
        </motion.div>

        {/* Stacked Projects */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
