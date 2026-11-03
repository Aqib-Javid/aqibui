import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Shell, { EMAIL, fade, Label, ProjectRow } from "@/components/site/Shell";
import { projects } from "@/data/projects";
import avatar from "@/assets/aqib-avatar.png";

const connect = [
  { href: `mailto:${EMAIL}`, title: EMAIL, sub: "Email" },
  { href: "https://www.linkedin.com/in/aqibjavid/", title: "aqibjavid", sub: "LinkedIn" },
  { href: "https://dribbble.com/", title: "Dribbble", sub: "Shots" },
];

const Index = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured).slice(0, 4);
  return (
    <Shell>
      <motion.img {...fade(0)} src={avatar} alt="Aqib Javid" className="mb-8 h-14 w-14 rounded-full object-cover" />
      <motion.h1 {...fade(1)} className="text-2xl font-medium">Aqib Javid</motion.h1>
      <motion.p {...fade(2)} className="text-muted-foreground">Product Designer</motion.p>

      <motion.div {...fade(3)} className="mt-10 space-y-4 leading-relaxed text-foreground/80">
        <p className="text-lg text-foreground">Simple on the surface. Thoughtful underneath.</p>
        <p>I help startups and growing teams turn messy ideas into products people actually enjoy using — across web, mobile and SaaS.</p>
        <p>I care about the small things: the label that removes a doubt, the step nobody misses once it's gone.</p>
      </motion.div>

      <section className="mt-16">
        <Label>Featured</Label>
        {featured.map((p, i) => <ProjectRow key={p.slug} project={p} i={i + 4} />)}
      </section>

      <section className="mt-12">
        <Label>Projects</Label>
        {rest.map((p, i) => <ProjectRow key={p.slug} project={p} i={i + 6} />)}
        <Link to="/work" className="link-underline mt-4 inline-block text-sm text-muted-foreground hover:text-foreground">View all work →</Link>
      </section>

      <section className="mt-16">
        <Label>Connect</Label>
        <div className="grid gap-1 sm:grid-cols-3">
          {connect.map((c) => (
            <a key={c.sub} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group -mx-3 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary">
              <span className="block truncate font-medium transition-transform group-hover:translate-x-0.5">{c.title}</span>
              <span className="text-sm text-muted-foreground">{c.sub}</span>
            </a>
          ))}
        </div>
      </section>
    </Shell>
  );
};

export default Index;
