import { motion } from "framer-motion";
import { Briefcase, Users, Rocket, FolderOpen } from "lucide-react";

const stats = [
  { value: "5+", label: "Years of Experience", icon: Briefcase },
  { value: "50+", label: "Projects Delivered", icon: FolderOpen },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "3", label: "Industries Impacted", icon: Rocket },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Over the past 5 years...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              I've grown from a visual designer to a senior product designer, navigating diverse roles
              and disciplines. My journey spans fintech, SaaS, mobility, edtech, and AI — each chapter
              shaping how I see design as a tool for impact.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Today, I approach challenges with a holistic lens — solving the bigger picture by obsessing
              over the tiny details. From research to pixel-perfect execution, I specialize in building
              scalable design systems and crafting user-centered digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="glass-card rounded-2xl p-5 flex flex-col items-center text-center group hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
