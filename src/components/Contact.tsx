import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Email", href: "mailto:contact@aqibjavid.com", value: "contact@aqibjavid.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aqibdesigns/", value: "@aqibdesigns" },
  { name: "Behance", href: "https://www.behance.net/aqib_designs", value: "@aqib_designs" },
  { name: "Dribbble", href: "https://dribbble.com/aqib_design", value: "@aqib_design" },
  { name: "Resume", href: "https://drive.google.com/file/d/1lqmkKM-55OerkPbyQ6ZvzQcdW0FcKeZq/view?usp=sharing", value: "Download PDF" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-[150px] pointer-events-none"
           style={{ background: "radial-gradient(circle, hsl(255 92% 55% / 0.5), transparent 70%)" }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Get in touch</span>
          <h2 className="editorial-heading text-foreground text-6xl md:text-8xl lg:text-9xl mt-6 leading-[0.9]">
            Let's build <br />
            <span className="italic font-light text-gradient-primary">something</span><br />
            exceptional.
          </h2>
        </motion.div>

        <motion.a
          href="mailto:contact@aqibjavid.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="mt-12 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
        >
          Start a project
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>

        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-x-12 border-t border-border/40">
          {links.map((l, i) => (
            <motion.a
              key={l.name}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group flex items-center justify-between py-6 border-b border-border/40 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-20">{l.name}</span>
                <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-gradient-primary transition-all">
                  {l.value}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
