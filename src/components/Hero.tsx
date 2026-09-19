import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

const clients = ["NexifyVPN", "Sanialarm", "MATE", "Rapidos", "Diet Achiever", "Quick Swapper"];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-32 md:px-10 md:pb-14">
      <motion.div aria-hidden className="pointer-events-none absolute -right-[8vw] top-[19%] text-[34vw] font-black leading-none text-primary/10" animate={{ rotate: [0, 5, 0], y: [0, -18, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>+</motion.div>

      <motion.div style={{ y: headlineY, opacity: headlineOpacity }} className="relative mx-auto w-full max-w-[1440px]">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Independent product designer
        </motion.p>

        <h1 className="max-w-[1300px] text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.8] text-foreground">
          <span className="block overflow-hidden"><motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="block">Digital</motion.span></span>
          <span className="block overflow-hidden"><motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="block text-outline">Experiences</motion.span></span>
        </h1>

        <div className="mt-9 grid items-end gap-8 md:grid-cols-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75 }} className="max-w-md text-lg leading-relaxed text-muted-foreground md:col-span-5 md:text-xl">
            I’m Aqib Javid. I design digital products that turn complex ideas into clear, useful experiences.
          </motion.p>
          <motion.a href="#work" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }} className="group flex h-14 w-14 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground md:col-start-12">
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="sr-only">View selected work</span>
          </motion.a>
        </div>
      </motion.div>

      <div className="relative mx-auto mt-12 w-full max-w-[1440px] overflow-hidden border-y border-border/60 py-4 marquee-mask">
        <div className="flex w-max animate-marquee-slow items-center gap-12 motion-reduce:animate-none">
          {[...clients, ...clients].map((client, index) => (
            <span key={`${client}-${index}`} className="whitespace-nowrap text-xs font-semibold uppercase text-muted-foreground">{client}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;