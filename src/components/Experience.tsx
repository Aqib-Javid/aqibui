import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Sr. UX Designer",
    company: "Carelon Global Solutions",
    period: "Aug 24 – Current",
    isCurrent: true,
  },
  {
    role: "UX Designer",
    company: "Atoll Solutions Private Limited",
    period: "Sept 23 – July 24",
    isCurrent: false,
  },
  {
    role: "Product Designer",
    company: "AppDay Technology, Gurgaon",
    period: "Dec 22 – Sept 23",
    isCurrent: false,
  },
  {
    role: "UI/UX Designer",
    company: "Khiladi Adda, Noida",
    period: "May 21 – Dec 22",
    isCurrent: false,
  },
  {
    role: "UI Designer",
    company: "MilkyWay Websites, USA (Remote)",
    period: "Mar 20 – May 21",
    isCurrent: false,
  },
  {
    role: "Designer",
    company: "stufflistings",
    period: "Dec 19 – Mar 20",
    isCurrent: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Work Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-background p-8 relative group hover:bg-secondary/50 transition-colors duration-300 ${
                exp.isCurrent ? "ring-1 ring-accent ring-inset" : ""
              }`}
            >
              <h3 className={`font-display text-xl md:text-2xl font-bold mb-2 ${
                exp.isCurrent ? "text-accent" : "text-foreground"
              }`}>
                {exp.role}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {exp.company}
              </p>
              <p className={`text-sm font-medium ${
                exp.isCurrent ? "text-accent" : "text-muted-foreground"
              }`}>
                {exp.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
