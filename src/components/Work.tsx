import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import nexifyvpnThumb from "@/assets/nexifyvpn-thumbnail.png";

const projects = [
  {
    title: "NexifyVPN",
    subtitle: "NexifyVPN",
    description: "Web App",
    year: "2024",
    image: nexifyvpnThumb,
    href: "https://nexifyvpn.com",
    large: true,
  },
  {
    title: "HairCut Recommendation",
    subtitle: "HairstyleDiscovery",
    description: "UX Design",
    year: "2024",
    image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960",
    href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6",
  },
  {
    title: "Maktab",
    subtitle: "Maktab",
    description: "Product Design",
    year: "2024",
    image: "https://framerusercontent.com/images/lS2JBP2RGiWlbMACBoqI59mvtI.png?width=1280&height=960",
    href: "https://usemaktab.com/",
  },
  {
    title: "Donna AI Receptionist",
    subtitle: "Donna AI",
    description: "AI Product",
    year: "2024",
    image: "https://framerusercontent.com/images/KX5sHXOoo12HjwkGFDsPXUoekIQ.png?width=1280&height=960",
    href: "https://donnaio.ai/",
    large: true,
  },
  {
    title: "Sanialarm",
    subtitle: "Sanialarm",
    description: "Web Design",
    year: "2023",
    image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960",
    href: "https://sanialarm.de/",
  },
  {
    title: "Quick Swapper",
    subtitle: "Quick Swapper",
    description: "Mobile App",
    year: "2023",
    image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960",
    href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en",
  },
  {
    title: "MATE Social App",
    subtitle: "MATE",
    description: "UX/UI Design",
    year: "2023",
    image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960",
    href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1",
  },
  {
    title: "Rapidos Booking",
    subtitle: "Rapidos",
    description: "Mobile App",
    year: "2022",
    image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960",
    href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1",
  },
  {
    title: "Diet Achiever",
    subtitle: "Diet Achiever",
    description: "Web App",
    year: "2022",
    image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960",
    href: "https://dietachiever.com/",
    large: true,
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
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group block relative rounded-3xl overflow-hidden ${
        project.large ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
      }`}
    >
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-primary-foreground/60 text-xs font-medium tracking-wide mb-1">
              {project.description} · {project.year}
            </p>
            <h3 className="text-primary-foreground font-display font-bold text-xl md:text-2xl leading-tight">
              {project.subtitle}
            </h3>
          </div>
          <motion.div
            initial={false}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center border border-primary-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
          >
            <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Favourite work
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
