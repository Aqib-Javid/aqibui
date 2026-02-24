import { motion, useMotionValue, useTransform, useSpring, useAnimationFrame } from "framer-motion";
import { useRef, useMemo, useEffect } from "react";
import aqibAvatar from "@/assets/aqib-avatar.png";

// Floating dot particle network
const FloatingDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useMemo(() => {
    return Array.from({ length: 55 }, () => ({
      x: Math.random() * 1400,
      y: Math.random() * 900,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.12 + 0.04,
    }));
  }, []);

  useAnimationFrame(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(0, 0, w, h);

    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;
      if (dot.x < 0 || dot.x > w) dot.vx *= -1;
      if (dot.y < 0 || dot.y > h) dot.vy *= -1;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(156, 163, 175, ${dot.opacity})`;
      ctx.fill();
    });

    // Faint connecting lines between nearby dots
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(156, 163, 175, ${0.035 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[85vh] flex flex-col justify-center pt-20 pb-12 relative overflow-hidden"
    >
      {/* Interactive floating dot network */}
      <FloatingDots />

      {/* Floating gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full">
        {/* Avatar with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX, rotateY, perspective: 800 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <img
              src={aqibAvatar}
              alt="Aqib Javid"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-accent rounded-full border-2 border-background"
            />
          </div>
        </motion.div>

        {/* Name with staggered character reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2"
        >
          Aqib Javid
        </motion.h1>

        {/* Role with typing effect feel */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-base md:text-lg font-medium mb-8"
        >
          Product Designer, UX Specialist & Design Systems Expert
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Senior Product Designer with 5+ years of experience crafting user-centered 
            digital solutions. I specialize in solving complex design problems and building 
            scalable design systems — from research to pixel-perfect execution.
          </p>
        </motion.div>

        {/* Interactive CTA area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:shadow-lg transition-shadow duration-300"
          >
            View my work ↓
          </motion.a>
          <motion.a
            href="mailto:contact@aqibjavid.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:border-foreground/40 transition-colors duration-300"
          >
            contact@aqibjavid.com
          </motion.a>
        </motion.div>

        {/* Copy email hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 flex items-center gap-2 text-muted-foreground/60 text-sm"
        >
          <span>Press</span>
          <kbd className="px-2 py-0.5 bg-secondary rounded text-xs font-mono text-muted-foreground border border-border">c</kbd>
          <span>to copy my email</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
