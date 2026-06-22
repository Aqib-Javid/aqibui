import { motion } from "framer-motion";

const experiences = [
  { period: "2025 — Now", role: "Sr Product Designer", company: "Algorithm", current: true },
  { period: "2022 — Present", role: "Senior Product Designer", company: "Fiverr & Upwork · Freelance" },
  { period: "2023 — 2024", role: "Senior UI UX Designer", company: "ItecExperts Pvt Ltd" },
  { period: "2022 — 2023", role: "UI UX Designer", company: "ItecExperts Pvt Ltd" },
  { period: "2021 — 2022", role: "UI UX Designer", company: "Appick · Remote" },
  { period: "2020 — 2021", role: "Designer", company: "Beta Byte Technology" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 md:py-40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Career</span>
          <h2 className="editorial-heading text-5xl md:text-7xl mt-4 text-foreground">
            The <span className="italic font-light text-gradient-primary">journey</span> so far.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[120px] md:left-[200px] top-0 bottom-0 w-px bg-border" aria-hidden />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-8 md:py-10 border-b border-border/40 hover:border-primary/30 transition-colors"
            >
              <div className="text-xs md:text-sm font-mono uppercase tracking-wider text-muted-foreground pt-1">
                {exp.period}
              </div>
              <div className="relative pl-8 md:pl-12">
                <span className={`absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full ring-4 ring-background ${exp.current ? "bg-primary" : "bg-border group-hover:bg-primary/60"} transition-colors`} />
                <h3 className="editorial-heading text-2xl md:text-4xl text-foreground group-hover:translate-x-2 transition-transform duration-500">
                  {exp.role}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mt-2">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
