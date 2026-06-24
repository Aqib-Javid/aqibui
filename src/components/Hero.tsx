import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { useEffect } from "react";
import { Phone, Dashboard, Tablet, PhoneUI, DashUI } from "./DeviceMockup";

const headline1 = ["Design", "that", "moves"];
const headline2 = ["products", "forward."];

const Hero = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const x1 = useTransform(sx, (v) => v * 20);
  const y1 = useTransform(sy, (v) => v * 20);
  const x2 = useTransform(sx, (v) => v * -14);
  const y2 = useTransform(sy, (v) => v * -14);
  const x3 = useTransform(sx, (v) => v * 10);
  const y3 = useTransform(sy, (v) => v * 10);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[520px] h-[520px] rounded-full opacity-40 blur-[120px] animate-blob"
             style={{ background: "radial-gradient(circle, hsl(255 92% 60% / 0.55), transparent 70%)" }} />
        <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] animate-blob"
             style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.5), transparent 70%)", animationDelay: "4s" }} />
        <div className="absolute inset-0 opacity-[0.025]"
             style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/40 backdrop-blur-sm mb-8">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Booking Q2 · 2026</span>
          </motion.div>

          <h1 className="editorial-heading text-foreground text-[14vw] md:text-[8.5vw] lg:text-[6.2rem] xl:text-[7.2rem] leading-[0.92]">
            <span className="block">
              {headline1.map((w, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-[0.25em]">{w}</motion.span>
              ))}
            </span>
            <span className="block">
              {headline2.map((w, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-[0.25em] ${i === 0 ? "italic text-gradient-primary" : ""}`}>{w}</motion.span>
              ))}
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 text-muted-foreground text-lg leading-relaxed max-w-xl font-light">
            We're an independent product studio crafting digital experiences for ambitious
            startups and enterprises. Strategy, design and motion — engineered to ship.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:scale-[1.03] hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
              <span className="text-sm font-medium">Start a project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#work" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:border-primary/50 hover:scale-[1.03] transition-all text-sm">
              <Play className="w-3.5 h-3.5 fill-current" />
              See our work
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-14 flex items-center gap-8">
            <div>
              <div className="editorial-heading text-3xl text-foreground">12+</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">Years</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="editorial-heading text-3xl text-foreground">240+</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">Shipped</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="editorial-heading text-3xl text-foreground">38</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">Countries</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — floating mockups */}
        <div className="relative h-[560px] hidden lg:block">
          <motion.div style={{ x: x1, y: y1 }} className="absolute top-0 right-8">
            <Tablet><DashUI /></Tablet>
          </motion.div>
          <motion.div style={{ x: x2, y: y2 }} className="absolute -bottom-4 left-0">
            <Phone><PhoneUI /></Phone>
          </motion.div>
          <motion.div style={{ x: x3, y: y3 }} className="absolute bottom-16 right-0 w-[300px]">
            <Dashboard><DashUI /></Dashboard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
