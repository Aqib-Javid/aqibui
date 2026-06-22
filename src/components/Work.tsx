import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import nexifyvpnThumb from "@/assets/nexifyvpn-thumbnail.png";

const projects = [
  { title: "NexifyVPN", category: "Web App", year: "2024", description: "Marketing site and dashboard for a privacy-first VPN product.", image: nexifyvpnThumb, href: "https://nexifyvpn.com" },
  { title: "HairstyleDiscovery", category: "UX Design", year: "2024", description: "Discovery-led web app helping users explore curated hairstyles.", image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960", href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6" },
  { title: "Sanialarm", category: "Web Design", year: "2023", description: "Healthcare alarm system landing with a calm, trustworthy tone.", image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960", href: "https://sanialarm.de/" },
  { title: "Quick Swapper", category: "Mobile App", year: "2023", description: "Native Android utility with a focused, gesture-driven UI.", image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960", href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en" },
  { title: "MATE Social App", category: "UX/UI Design", year: "2023", description: "Community-driven social platform with rich profile interactions.", image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960", href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1" },
  { title: "Rapidos Booking", category: "Mobile App", year: "2022", description: "Multi-city ride and delivery booking experience.", image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960", href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1" },
  { title: "Diet Achiever", category: "Web App", year: "2022", description: "Goal-tracking nutrition platform with a friendly visual system.", image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960", href: "https://dietachiever.com/" },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const alt = index % 2 === 1;
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center ${alt ? "md:[direction:rtl]" : ""}`}
    >
      {/* Image */}
      <div className="md:col-span-8 [direction:ltr]">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-card border border-border/60">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/80">{project.category}</span>
            <span className="text-xs tabular-nums text-foreground/80">{project.year}</span>
          </div>
          <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="md:col-span-4 [direction:ltr]">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px flex-1 bg-border" />
          <span>{project.year}</span>
        </div>
        <h3 className="editorial-heading text-3xl md:text-4xl text-foreground mb-3 group-hover:text-gradient-primary transition-all">
          {project.title}
        </h3>
        <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">{project.category}</p>
        <p className="text-muted-foreground text-[15px] leading-relaxed">{project.description}</p>
      </div>
    </motion.a>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-28 md:py-40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Selected — 2022 / 2024</span>
            <h2 className="editorial-heading text-foreground text-6xl md:text-8xl mt-4">
              Featured <span className="italic font-light text-gradient-primary">work</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
            A handpicked selection of projects spanning product, web and mobile — each one a story
            of detail, craft and intent.
          </p>
        </motion.div>

        <div className="space-y-28 md:space-y-40">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
