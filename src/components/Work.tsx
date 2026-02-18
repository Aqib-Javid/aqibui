import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "HairCut Recommendation",
    image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960",
    href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6",
  },
  {
    title: "Maktab",
    image: "https://framerusercontent.com/images/lS2JBP2RGiWlbMACBoqI59mvtI.png?width=1280&height=960",
    href: "https://usemaktab.com/",
  },
  {
    title: "Sanialarm",
    image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960",
    href: "https://sanialarm.de/",
  },
  {
    title: "Quick Swapper",
    image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960",
    href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en",
  },
  {
    title: "Rapidos Booking",
    image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960",
    href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1",
  },
  {
    title: "MATE Social App",
    image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960",
    href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1",
  },
  {
    title: "Diet Achiever",
    image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960",
    href: "https://dietachiever.com/",
  },
  {
    title: "Donna AI Receptionist",
    image: "https://framerusercontent.com/images/KX5sHXOoo12HjwkGFDsPXUoekIQ.png?width=1280&height=960",
    href: "https://donnaio.ai/",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
            WORK
          </span>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Below are some select projects, case studies and live links are available.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              href={project.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
