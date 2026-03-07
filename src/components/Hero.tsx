import { motion } from "framer-motion";
import aqibAvatar from "@/assets/aqib-avatar.png";
import {
  Figma, Layers, Palette, Layout, Smartphone, PenTool, Monitor
} from "lucide-react";

const skills = [
  { name: "UX Design", icon: Layers },
  { name: "UI Design", icon: Layout },
  { name: "Visuals", icon: Palette },
  { name: "Systems", icon: Monitor },
  { name: "Prototyping", icon: PenTool },
  { name: "Mobile", icon: Smartphone },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Soft floating gradient orbs matching reference */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(180 70% 85%), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(290 40% 88%), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(170 50% 88%), transparent 70%)" }}
      />

      <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <img
            src={aqibAvatar}
            alt="Aqib Javid"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 ring-offset-2 ring-offset-transparent"
          />
          <span className="text-muted-foreground text-lg">
            Hello, I'm <span className="text-foreground font-semibold font-display">Aqib</span>
          </span>
        </motion.div>

        {/* Main Statement */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-10 max-w-4xl"
        >
          <span className="text-foreground/80">A multi-disciplinary </span>
          <span className="text-gradient-primary">Product Designer</span>
          <span className="text-foreground/80"> with a strong foundation in </span>
          <span className="text-gradient-primary">UX & design systems</span>
          <span className="text-foreground/80">.</span>
        </motion.h1>

        {/* Currently / Previously */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
              Currently
            </span>
            <span className="text-muted-foreground text-sm">
              Sr Product Designer at <span className="text-foreground font-medium">Algorithm</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide">
              Previously
            </span>
            <span className="text-muted-foreground text-sm">
              ItecExperts · Appick · Freelance
            </span>
          </div>
        </motion.div>

        {/* My Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 inline-block">
            <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5 text-center">
              My Stack
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.06 }}
                    className="flex flex-col items-center gap-2 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-background/80 border border-border/50 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
