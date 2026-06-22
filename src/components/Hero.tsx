import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const badges = ["UX Design", "Product Design", "Design Systems", "Mobile Apps", "SaaS"];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-32 pb-20">
      {/* Background blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[520px] h-[520px] rounded-full opacity-40 blur-[120px] animate-blob"
             style={{ background: "radial-gradient(circle, hsl(255 92% 60% / 0.55), transparent 70%)" }} />
        <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] animate-blob"
             style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.5), transparent 70%)", animationDelay: "4s" }} />
        <div className="absolute inset-0 opacity-[0.025]"
             style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 w-full">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={reveal}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-12 bg-foreground/30" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Hello, I'm Aqib — Senior Product Designer
          </span>
        </motion.div>

        {/* Oversized editorial heading */}
        <h1 className="editorial-heading text-foreground text-[15vw] md:text-[11vw] lg:text-[10rem] xl:text-[12rem] leading-[0.92]">
          <motion.span custom={1} initial="hidden" animate="show" variants={reveal} className="block">
            Designing
          </motion.span>
          <motion.span custom={2} initial="hidden" animate="show" variants={reveal} className="block">
            <span className="italic font-light text-gradient-primary pr-4">elegant</span>
            <span className="text-foreground/40">·</span>
          </motion.span>
          <motion.span custom={3} initial="hidden" animate="show" variants={reveal} className="block">
            digital experiences.
          </motion.span>
        </h1>

        {/* Description + badges row */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={reveal}
          className="mt-14 md:mt-20 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end"
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
            A multi-disciplinary product designer with 5+ years crafting scalable systems, intuitive
            interfaces and human-centered products across fintech, SaaS and mobility.
          </p>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {badges.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.07, duration: 0.5 }}
                whileHover={{ y: -3, borderColor: "hsl(var(--primary))" }}
                className="px-3.5 py-1.5 rounded-full border border-border text-xs uppercase tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
