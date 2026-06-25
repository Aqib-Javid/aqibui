import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Quote } from "lucide-react";

const headline = ["A", "Product", "Designer", "who", "turns"];
const headline2 = ["users", "into", "loyal", "advocates."];

const FloatingQuote = ({
  className,
  quote,
  name,
  delay = 0,
  rotate = -4,
}: { className: string; quote: string; name: string; delay?: number; rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: 0 }}
    animate={{ opacity: 1, y: 0, rotate }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6, rotate: rotate * 0.4 }}
    className={`hidden lg:block absolute z-10 w-[260px] glass-card rounded-2xl p-6 shadow-[0_30px_60px_-25px_hsl(220_30%_40%/0.18)] ${className}`}
  >
    <Quote className="w-5 h-5 text-primary/70 mb-3" strokeWidth={1.4} />
    <p className="text-[13px] text-foreground/85 leading-relaxed mb-4">{quote}</p>
    <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">— {name}</p>
  </motion.div>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-24">
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      <div className="absolute top-[6%] left-[10%] w-[480px] h-[480px] rounded-full opacity-30 blur-[120px] animate-blob"
        style={{ background: "radial-gradient(circle, hsl(255 92% 70% / 0.45), transparent 70%)" }} />
      <div className="absolute bottom-[5%] right-[8%] w-[520px] h-[520px] rounded-full opacity-25 blur-[140px] animate-blob"
        style={{ background: "radial-gradient(circle, hsl(280 80% 75% / 0.45), transparent 70%)", animationDelay: "4s" }} />
    </div>

    <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10">
      <FloatingQuote
        className="top-[18%] left-0"
        quote="Aqib delivered scalable design for our app and our team noticed the lift immediately — onboarding completion jumped almost overnight."
        name="Chirag Kashyap"
        delay={0.6}
        rotate={-5}
      />
      <FloatingQuote
        className="top-[22%] right-0"
        quote="We approached Aqib because he is one of the sharpest product minds we've worked with. Easily 10/10."
        name="Shruthi Shukla"
        delay={0.8}
        rotate={5}
      />

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
          className="mt-10 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Hi, I'm <span className="text-foreground font-medium">Aqib Javid</span> — a multi-disciplinary
          Product Designer crafting digital experiences that fuel user growth, customer loyalty and
          business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
  </section>
);

export default Hero;
