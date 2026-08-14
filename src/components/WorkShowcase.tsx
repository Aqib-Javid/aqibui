import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useRef } from "react";
import nexifyvpnThumb from "@/assets/nexifyvpn-thumbnail.png";

type Project = {
  title: string;
  tag: string;
  year: string;
  metric: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  { title: "NexifyVPN", tag: "Web App", year: "2024", metric: "+58% conversion", image: nexifyvpnThumb, href: "https://nexifyvpn.com/" },
  { title: "HairstyleDiscovery", tag: "UX Design", year: "2024", metric: "3.4x sessions", image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960", href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App" },
  { title: "Sanialarm", tag: "Web Design", year: "2023", metric: "+86% demo requests", image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960", href: "https://sanialarm.de/" },
  { title: "Quick Swapper", tag: "Mobile App", year: "2023", metric: "4.7★ rating", image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960", href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper" },
  { title: "MATE Social App", tag: "UX/UI Design", year: "2023", metric: "+62% saves", image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960", href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design" },
  { title: "Rapidos Booking", tag: "Mobile App", year: "2022", metric: "+39% retention", image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960", href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-" },
  { title: "Diet Achiever", tag: "Web App", year: "2022", metric: "+118% time on site", image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960", href: "https://dietachiever.com/" },
];

const Card = ({ p }: { p: Project }) => (
  <a
    href={p.href}
    target="_blank"
    rel="noreferrer"
    className="group snap-start shrink-0 w-[82vw] sm:w-[60vw] md:w-[46vw] lg:w-[36vw] xl:w-[520px]"
  >
    <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden border border-border bg-secondary">
      <img
        src={p.image}
        alt={`${p.title} — ${p.tag} UI design by Aqib Javid`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-sm mono text-[10px] uppercase tracking-[0.2em] text-foreground">
        {p.tag}
      </span>
      <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-sm text-[12px] font-medium text-foreground">
        {p.metric}
      </span>
      <span className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <ArrowUpRight className="w-5 h-5" />
      </span>
    </div>
    <div className="mt-4 flex items-baseline justify-between gap-4">
      <h3 className="editorial-heading text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
        {p.title}
      </h3>
      <span className="mono text-[11px] tracking-[0.2em] text-muted-foreground tabular-nums">{p.year}</span>
    </div>
  </a>
);

const WorkShowcase = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 560), behavior: "smooth" });
  }, []);

  return (
    <section id="work" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14"
        >
          <div>
            <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Selected work</span>
            <h2 className="editorial-heading text-foreground text-4xl sm:text-5xl md:text-7xl mt-3">
              Products I've <span className="italic text-gradient-primary">shipped</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous projects"
              className="w-11 h-11 rounded-full border border-border bg-card/70 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next projects"
              className="w-11 h-11 rounded-full border border-border bg-card/70 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-6 md:pl-10 xl:pl-[max(2.5rem,calc((100vw-1280px)/2))] scroll-pl-6 md:scroll-pl-10 xl:scroll-pl-[max(2.5rem,calc((100vw-1280px)/2))] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <Card key={p.title} p={p} />
        ))}
        <div className="shrink-0 w-6 md:w-10" aria-hidden />
      </div>
    </section>
  );
};

export default WorkShowcase;
