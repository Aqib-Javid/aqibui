import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Shell, { fade, Artwork } from "@/components/site/Shell";
import { projects, Project } from "@/data/projects";

const panel = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ProjectPanel = ({ p, i }: { p: Project; i: number }) => (
  <motion.article {...panel} className="group grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[1fr_340px]">
    {/* Media — generated artwork, no cover images */}
    <Link to={`/work/${p.slug}`} className="relative flex min-h-[260px] items-center justify-center bg-secondary p-8 sm:p-14" aria-label={`${p.name} case study`}>
      <motion.div
        className="w-full max-w-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:-rotate-1"
      >
        <Artwork project={p} size="lg" />
      </motion.div>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">Read case study →</span>
      </span>
    </Link>

    {/* Info sidebar */}
    <div className="flex flex-col p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg font-medium">{p.name}</h2>
        {p.link !== "#" && (
          <a href={p.link} target="_blank" rel="noreferrer" className="link-underline shrink-0 text-sm text-muted-foreground hover:text-foreground" aria-label={`${p.name} live site`}>
            Visit ↗
          </a>
        )}
      </div>

      <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">About</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.summary}</p>

      <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Summary</p>
      <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
        {p.metrics.map((m) => (
          <li key={m.label} className="flex gap-2">
            <span className="text-muted-foreground">·</span>
            <span>
              <span className="font-medium text-foreground">{m.value}</span> {m.label.toLowerCase()}
            </span>
          </li>
        ))}
      </ul>

      <dl className="mt-auto grid grid-cols-2 gap-4 pt-8 text-sm">
        <div>
          <dt className="text-muted-foreground">Year</dt>
          <dd className="mt-1">{p.year}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Role</dt>
          <dd className="mt-1">{p.role}</dd>
        </div>
      </dl>

      <Link to={`/work/${p.slug}`} className="link-underline mt-6 text-sm font-medium text-foreground">
        View case study →
      </Link>
    </div>
  </motion.article>
);

const Work = () => (
  <Shell>
    <motion.div {...fade(0)} className="mb-10 text-center text-sm text-muted-foreground">
      <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" aria-hidden />
      <Link to="/" className="link-underline hover:text-foreground">Aqib Javid</Link>
      <span className="mx-2" aria-hidden>›</span>
      <span className="text-foreground">Work</span>
    </motion.div>

    {projects.map((p, i) => (
      <div key={p.slug}>
        <ProjectPanel p={p} i={i} />
        {i < projects.length - 1 && (
          <motion.div {...panel} className="py-8 text-center">
            <Link
              to={`/work/${projects[i + 1].slug}`}
              className="link-underline text-sm text-muted-foreground hover:text-foreground"
            >
              Jump to next project ↓
            </Link>
          </motion.div>
        )}
      </div>
    ))}
  </Shell>
);

export default Work;
