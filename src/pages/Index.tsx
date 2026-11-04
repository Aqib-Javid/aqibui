import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Shell, { EMAIL, fade, Label, ProjectRow, Artwork } from "@/components/site/Shell";
import { projects } from "@/data/projects";
import avatar from "@/assets/aqib-avatar.png";

const connect = [
  { href: `mailto:${EMAIL}`, title: EMAIL, sub: "Email" },
  { href: "https://www.linkedin.com/in/aqibjavid/", title: "aqibjavid", sub: "LinkedIn" },
  { href: "https://dribbble.com/", title: "Dribbble", sub: "Shots" },
];

/** Collage of project artwork — stands in for a cover image, echoes the "View work" panel. */
const WorkPanel = () => (
  <motion.div {...fade(2)} className="relative">
    <Link
      to="/work"
      className="group relative block overflow-hidden rounded-3xl border border-border bg-secondary p-6 sm:p-8"
      aria-label="View all work"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {projects.slice(0, 6).map((p, i) => (
          <motion.div
            key={p.slug}
            className="overflow-hidden rounded-xl"
            animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
            transition={{ duration: 5 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Artwork project={p} />
            <span className="mt-2 block truncate px-0.5 text-xs text-muted-foreground">{p.name}</span>
          </motion.div>
        ))}
      </div>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-3xl bg-background/0 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-background/70 group-hover:opacity-100">
        <span className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-500 group-hover:scale-105">
          View work <span aria-hidden>→</span>
        </span>
      </span>
    </Link>
  </motion.div>
);

const Section = ({ title, i, children }: { title: string; i: number; children: React.ReactNode }) => (
  <motion.section {...fade(i)} className="mt-16">
    <div className="mb-6 flex items-center gap-4">
      <span className="text-sm text-muted-foreground">{title}</span>
      <span className="flex-1 border-t border-dotted border-border" aria-hidden />
    </div>
    {children}
  </motion.section>
);

const Index = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Shell>
      {/* Intro: bio left, work visual right */}
      <div className="grid gap-10 md:grid-cols-[1fr_minmax(0,1.1fr)] md:items-start md:gap-14">
        <div>
          <motion.h1 {...fade(0)} className="text-2xl font-medium">
            Aqib Javid
          </motion.h1>
          <motion.p {...fade(1)} className="mt-1 text-lg text-muted-foreground">
            Product Designer
          </motion.p>
          <motion.div {...fade(2)} className="mt-8 space-y-4 leading-relaxed text-foreground/80">
            <p className="text-lg text-foreground">Simple on the surface. Thoughtful underneath.</p>
            <p>
              I help startups and growing teams turn messy ideas into products people actually enjoy
              using — across web, mobile and SaaS.
            </p>
            <p>
              I care about the small things: the label that removes a doubt, the step nobody misses
              once it's gone.
            </p>
            <p>
              The rest? It's on{" "}
              <a
                href="https://www.linkedin.com/in/aqibjavid/"
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1 text-foreground"
              >
                LinkedIn
              </a>
              .
            </p>
          </motion.div>
        </div>
        <WorkPanel />
      </div>

      <Section title="Featured" i={3}>
        {featured.map((p, i) => (
          <ProjectRow key={p.slug} project={p} i={i} />
        ))}
      </Section>

      <Section title="Projects" i={4}>
        {rest.map((p, i) => (
          <ProjectRow key={p.slug} project={p} i={i + 1} />
        ))}
        <Link
          to="/work"
          className="link-underline mt-5 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          View all work →
        </Link>
      </Section>

      <Section title="Connect" i={5}>
        <div className="grid gap-1 sm:grid-cols-3">
          {connect.map((c) => (
            <a
              key={c.sub}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group -mx-3 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary"
            >
              <span className="block truncate font-medium transition-transform group-hover:translate-x-0.5">
                {c.title}
              </span>
              <span className="text-sm text-muted-foreground">{c.sub}</span>
            </a>
          ))}
        </div>
      </Section>
    </Shell>
  );
};

export default Index;
