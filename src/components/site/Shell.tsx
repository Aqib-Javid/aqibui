import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { ReactNode } from "react";
import { Project } from "@/data/projects";
import avatar from "@/assets/aqib-avatar.png";

export const EMAIL = "aqib.uidesign@gmail.com";

export const fade = (i = 0) => ({
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
});

export const Label = ({ children }: { children: ReactNode }) => (
  <p className="mb-5 text-sm text-muted-foreground">{children}</p>
);

/** Generated artwork instead of project covers. */
export const Artwork = ({ project, size = "sm" }: { project: Project; size?: "sm" | "lg" }) => (
  <span
    className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl ${size === "lg" ? "h-56 w-full md:h-72" : "h-11 w-11"}`}
    style={{ background: `linear-gradient(140deg, hsl(${project.hue} 80% 92%), hsl(${project.hue} 70% 80%))` }}
  >
    <motion.span
      className={`${size === "lg" ? "text-7xl md:text-8xl" : "text-lg"}`}
      style={{ color: `hsl(${project.hue} 60% 35%)` }}
      animate={size === "lg" ? { rotate: [0, 8, 0], y: [0, -6, 0] } : undefined}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {project.glyph}
    </motion.span>
  </span>
);

export const ProjectRow = ({ project, i }: { project: Project; i: number }) => (
  <motion.div {...fade(i)}>
    <Link
      to={`/work/${project.slug}`}
      className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary"
    >
      <span className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Artwork project={project} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-foreground">{project.name}</span>
        <span className="block truncate text-sm text-muted-foreground">{project.tagline}</span>
      </span>
      <span className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
    </Link>
  </motion.div>
);

const Shell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="mx-auto flex max-w-[640px] items-center justify-between px-6 pt-10">
      <Link to="/" className="font-medium">Aqib Javid</Link>
      <nav className="flex gap-5 text-sm text-muted-foreground">
        {[["/", "Home"], ["/work", "Work"]].map(([to, l]) => (
          <NavLink key={to} to={to} end className={({ isActive }) => `link-underline transition-colors hover:text-foreground ${isActive ? "text-foreground" : ""}`}>{l}</NavLink>
        ))}
        <a href={`mailto:${EMAIL}`} className="link-underline transition-colors hover:text-foreground">Email</a>
      </nav>
    </header>
    <main className="mx-auto max-w-[640px] px-6 pb-16 pt-20">{children}</main>
    <footer className="mx-auto flex max-w-[640px] items-center justify-between gap-4 border-t border-border px-6 py-8 text-sm text-muted-foreground">
      <span className="flex items-center gap-3">
        <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
        <span>Aqib Javid © {new Date().getFullYear()} · Copyright</span>
      </span>
      <span>Working worldwide</span>
    </footer>
  </div>
);

export default Shell;
