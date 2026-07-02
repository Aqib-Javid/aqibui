import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Quote } from "lucide-react";

const headline = ["A", "Product", "Designer", "who", "turns"];
const headline2 = ["users", "into", "loyal", "advocates."];

const SmallQuote = ({
  quote,
  name,
  delay = 0,
  rotate = -3,
  className = "",
}: { quote: string; name: string; delay?: number; rotate?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0, rotate }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4, rotate: rotate * 0.4 }}
    className={`w-[220px] glass-card rounded-2xl p-4 text-left shadow-[0_20px_50px_-25px_hsl(220_30%_40%/0.18)] ${className}`}
  >
    <Quote className="w-3.5 h-3.5 text-primary/70 mb-2" strokeWidth={1.4} />
    <p className="text-[11px] text-foreground/85 leading-relaxed mb-2">{quote}</p>
    <p className="mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">— {name}</p>
  </motion.div>
);

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-36 pb-16">
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 40%, transparent, hsl(var(--background)) 75%)" }} />
      <div className="absolute top-[6%] left-[8%] w-[440px] h-[440px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(220 95% 65% / 0.45), transparent 70%)" }} />
      <div className="absolute bottom-[5%] right-[8%] w-[500px] h-[500px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, hsl(200 90% 65% / 0.45), transparent 70%)" }} />
    </div>

    <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-10"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-foreground/70">Available Q2 · 2026</span>
          </span>
          <span className="w-px h-3 bg-border" />
          <a href="#contact" className="mono text-[11px] uppercase tracking-[0.22em] text-foreground inline-flex items-center gap-1 hover:text-primary transition-colors">
            Free Consultation <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>

        <h1 className="editorial-heading text-foreground text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.6rem] xl:text-[6.4rem] leading-[1.02]">
          <span className="block">
            {headline.map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.22em]">{w}</motion.span>
            ))}
          </span>
          <span className="block">
            {headline2.map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block mr-[0.22em] ${i === 2 ? "italic text-gradient-primary" : ""}`}>{w}</motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Hi, I'm <span className="text-foreground font-medium">Aqib Javid</span> — a multi-disciplinary
          Product Designer crafting digital experiences that fuel user growth, customer loyalty and
          business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-foreground text-background hover:scale-[1.03] transition-all duration-500">
            <span className="inline-flex w-7 h-7 rounded-full bg-background/15 items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <span className="text-sm font-medium pr-2">Free Consultation</span>
          </a>
          <a href="#work" className="group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full border border-border bg-card/60 hover:border-primary/50 hover:scale-[1.03] transition-all text-sm">
            <span>Start Your Project</span>
            <span className="inline-flex w-7 h-7 rounded-full bg-foreground text-background items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </motion.div>

      </div>
    </div>

    <SmallQuote
      quote="Aqib delivered scalable design across our app — onboarding completion lifted almost overnight."
      name="Chirag Kashyap"
      delay={1.4}
      rotate={-4}
      className="hidden lg:block absolute left-6 xl:left-16 bottom-24 xl:bottom-28"
    />
    <SmallQuote
      quote="One of the sharpest product minds we've worked with. Easily 10/10."
      name="Shruthi Shukla, Sanialarm"
      delay={1.55}
      rotate={4}
      className="hidden lg:block absolute right-6 xl:right-16 bottom-24 xl:bottom-28"
    />
  </section>
);

export default Hero;
