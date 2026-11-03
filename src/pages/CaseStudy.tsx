import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Shell, { Artwork, fade, Label } from "@/components/site/Shell";
import { getProject, projects } from "@/data/projects";
import NotFound from "./NotFound";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const p = getProject(slug);
  useEffect(() => window.scrollTo(0, 0), [slug]);
  if (!p) return <NotFound />;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];

  return (
    <Shell>
      <motion.div {...fade(0)}><Link to="/work" className="link-underline text-sm text-muted-foreground hover:text-foreground">← All work</Link></motion.div>
      <motion.h1 {...fade(1)} className="mt-8 text-3xl font-medium">{p.name}</motion.h1>
      <motion.p {...fade(2)} className="mt-2 text-lg text-muted-foreground">{p.summary}</motion.p>

      <motion.div {...fade(3)} className="mt-10"><Artwork project={p} size="lg" /></motion.div>

      <motion.dl {...fade(4)} className="mt-8 grid grid-cols-3 gap-4 text-sm">
        {[["Role", p.role], ["Year", p.year], ["Platform", p.platform]].map(([k, v]) => (
          <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="mt-1">{v}</dd></div>
        ))}
      </motion.dl>

      <motion.div {...reveal} className="mt-12 grid grid-cols-2 gap-3">
        {p.metrics.map((m) => (
          <div key={m.label} className="rounded-2xl bg-secondary p-5">
            <p className="text-2xl font-medium text-primary">{m.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.section {...reveal} className="mt-14"><Label>The challenge</Label><p className="leading-relaxed text-foreground/85">{p.challenge}</p></motion.section>

      <motion.section {...reveal} className="mt-12">
        <Label>What I did</Label>
        <ol className="space-y-4">
          {p.approach.map((a, i) => (
            <li key={i} className="flex gap-4 leading-relaxed text-foreground/85"><span className="text-muted-foreground">0{i + 1}</span>{a}</li>
          ))}
        </ol>
      </motion.section>

      <motion.section {...reveal} className="mt-12"><Label>The result</Label><p className="leading-relaxed text-foreground/85">{p.outcome}</p></motion.section>

      <motion.blockquote {...reveal} className="mt-12 border-l-2 border-primary pl-5 text-xl">“{p.learned}”</motion.blockquote>

      {p.link !== "#" && (
        <motion.a {...reveal} href={p.link} target="_blank" rel="noreferrer" className="mt-10 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-transform hover:-translate-y-0.5">
          See it live ↗
        </motion.a>
      )}

      <Link to={`/work/${next.slug}`} className="group mt-20 flex items-center justify-between border-t border-border pt-8">
        <span><span className="block text-sm text-muted-foreground">Next</span><span className="text-lg font-medium">{next.name}</span></span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </Shell>
  );
};

export default CaseStudy;
