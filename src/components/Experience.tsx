import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 — Now",
    role: "Sr Product Designer",
    company: "Algorithm",
    isCurrent: true,
  },
  {
    period: "2022 — Present",
    role: "Senior Product Designer",
    company: "Fiverr & Upwork · Freelance",
    isCurrent: false,
  },
  {
    period: "2023 — 2024",
    role: "Senior UI UX Designer",
    company: "ItecExperts Pvt Ltd",
    isCurrent: false,
  },
  {
    period: "2022 — 2023",
    role: "UI UX Designer",
    company: "ItecExperts Pvt Ltd",
    isCurrent: false,
  },
  {
    period: "2021 — 2022",
    role: "UI UX Designer",
    company: "Appick · Remote",
    isCurrent: false,
  },
  {
    period: "2020 — 2021",
    role: "Designer",
    company: "Beta Byte Technology",
    isCurrent: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6 border-b border-border/50"
            >
              <span className={`text-sm font-mono tracking-wide ${exp.isCurrent ? "text-primary font-medium" : "text-muted-foreground/60"}`}>
                {exp.period}
              </span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className={`font-display text-base md:text-lg font-semibold ${exp.isCurrent ? "text-primary" : "text-foreground"}`}>
                  {exp.role}
                </h3>
                <span className="text-muted-foreground text-sm">
                  at {exp.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
