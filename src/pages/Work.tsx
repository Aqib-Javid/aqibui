import { motion } from "framer-motion";
import Shell, { fade, ProjectRow } from "@/components/site/Shell";
import { projects } from "@/data/projects";

const Work = () => (
  <Shell>
    <motion.h1 {...fade(0)} className="text-2xl font-medium">Work</motion.h1>
    <motion.p {...fade(1)} className="mb-12 mt-2 text-muted-foreground">Selected case studies, 2022 — now.</motion.p>
    {projects.map((p, i) => (
      <div key={p.slug} className="flex items-center gap-2">
        <div className="flex-1"><ProjectRow project={p} i={i + 2} /></div>
        <span className="hidden text-sm text-muted-foreground sm:block">{p.year}</span>
      </div>
    ))}
  </Shell>
);

export default Work;
