import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 — Now",
    role: "Sr Product Designer",
    company: "Algorithm",
    description: "Leading product design initiatives, creating user-centered solutions for complex design challenges across mobile and web platforms.",
    isCurrent: true,
  },
  {
    period: "2022 — Present",
    role: "Senior Product Designer",
    company: "Fiverr & Upwork · Freelance",
    description: "Delivering high-quality UX/UI design services to global clients, specializing in mobile apps, web platforms, and design systems.",
    isCurrent: false,
  },
  {
    period: "2023 — 2024",
    role: "Senior UI UX Designer",
    company: "ItecExperts Pvt Ltd",
    description: "Led design team in creating intuitive interfaces for enterprise applications and establishing design workflows.",
    isCurrent: false,
  },
  {
    period: "2022 — 2023",
    role: "UI UX Designer",
    company: "ItecExperts Pvt Ltd",
    description: "Designed user interfaces and conducted UX research for various client projects across industries.",
    isCurrent: false,
  },
  {
    period: "2021 — 2022",
    role: "UI UX Designer",
    company: "Appick · Remote",
    description: "Created mobile and web app designs following user-centered design principles for diverse product portfolio.",
    isCurrent: false,
  },
  {
    period: "2020 — 2021",
    role: "Designer",
    company: "Beta Byte Technology",
    description: "Started career journey with hands-on design work, learning fundamentals of digital product design.",
    isCurrent: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-medium mb-3 block">
            EXPERIENCE
          </span>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Throughout my career, I've worked on various projects, from building scalable systems to designing user-friendly interfaces.
          </p>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-border/50 first:border-t-0"
            >
              {/* Period */}
              <span className={`text-sm font-mono tracking-wide ${exp.isCurrent ? "text-accent" : "text-muted-foreground/60"}`}>
                {exp.period}
              </span>

              {/* Details */}
              <div>
                <h3 className={`font-display text-lg md:text-xl font-semibold mb-1 ${exp.isCurrent ? "text-accent" : "text-foreground"}`}>
                  {exp.role}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  at <span className="text-foreground/80">{exp.company}</span>
                </p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
