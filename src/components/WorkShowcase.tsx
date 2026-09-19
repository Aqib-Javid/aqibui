import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import nexifyvpnThumb from "@/assets/nexifyvpn-thumbnail.png";

const projects = [
  { title: "NexifyVPN", tag: "Product design", year: "2024", metric: "+58% conversion", image: nexifyvpnThumb, href: "https://nexifyvpn.com/" },
  { title: "HairstyleDiscovery", tag: "UX design", year: "2024", metric: "3.4× sessions", image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960", href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App" },
  { title: "Sanialarm", tag: "Web design", year: "2023", metric: "+86% demo requests", image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960", href: "https://sanialarm.de/" },
  { title: "Quick Swapper", tag: "Mobile app", year: "2023", metric: "4.7★ rating", image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960", href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper" },
];

const Project = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const reverse = index % 2 === 1;

  return (
    <motion.a ref={ref} href={project.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12%" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="group grid items-center gap-7 md:grid-cols-12 md:gap-10">
      <div className={`relative aspect-[16/10] overflow-hidden bg-secondary md:col-span-8 ${reverse ? "md:order-2 md:col-start-5" : ""}`}>
        <motion.img src={project.image} alt={`${project.title} product design project`} loading={index === 0 ? "eager" : "lazy"} style={{ y: imageY, scale: 1.1 }} className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-[1.14] group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
        <span className="absolute right-4 top-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-background text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      <div className={`md:col-span-3 ${reverse ? "md:order-1" : "md:col-start-10"}`}>
        <p className="mb-4 text-xs font-semibold uppercase text-primary">0{index + 1} / {project.tag}</p>
        <h3 className="text-4xl font-black uppercase leading-[0.9] text-foreground md:text-5xl">{project.title}</h3>
        <div className="mt-7 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
          <span>{project.metric}</span><span>{project.year}</span>
        </div>
        <span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase text-foreground">
          View project <i className="h-px w-8 bg-foreground transition-all duration-300 group-hover:w-14" />
        </span>
      </div>
    </motion.a>
  );
};

const WorkShowcase = () => (
  <section id="work" className="border-t border-border px-5 py-24 md:px-10 md:py-32">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-20 flex items-end justify-between md:mb-28">
        <div><p className="mb-3 text-xs font-semibold uppercase text-primary">Selected work</p><h2 className="text-5xl font-black uppercase leading-none text-foreground md:text-7xl">Built to<br />perform.</h2></div>
        <span className="hidden text-xs font-semibold uppercase text-muted-foreground sm:block">04 projects · scroll to explore</span>
      </div>
      <div className="space-y-28 md:space-y-44">{projects.map((project, index) => <Project key={project.title} project={project} index={index} />)}</div>
    </div>
  </section>
);

export default WorkShowcase;