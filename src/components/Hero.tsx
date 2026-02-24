import { motion, useMotionValue, useTransform, useSpring, useAnimationFrame } from "framer-motion";
import { useRef, useMemo } from "react";
import aqibAvatar from "@/assets/aqib-avatar.png";

// Morphing blob background
const MorphingBlobs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  const blobs = useMemo(() => [
    { cx: 0.25, cy: 0.35, r: 120, speed: 0.0008, phase: 0, color: [220, 15, 60] },
    { cx: 0.7, cy: 0.3, r: 100, speed: 0.0012, phase: 2, color: [152, 45, 55] },
    { cx: 0.5, cy: 0.7, r: 90, speed: 0.001, phase: 4, color: [200, 20, 50] },
    { cx: 0.15, cy: 0.65, r: 80, speed: 0.0009, phase: 1.5, color: [180, 30, 58] },
    { cx: 0.85, cy: 0.6, r: 110, speed: 0.0011, phase: 3, color: [240, 15, 55] },
  ], []);

  useAnimationFrame((t) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(0, 0, w, h);
    timeRef.current = t;

    blobs.forEach((blob) => {
      const wobbleX = Math.sin(t * blob.speed + blob.phase) * 60;
      const wobbleY = Math.cos(t * blob.speed * 0.7 + blob.phase) * 40;
      const pulseR = blob.r + Math.sin(t * blob.speed * 1.3 + blob.phase) * 20;

      const x = blob.cx * w + wobbleX;
      const y = blob.cy * h + wobbleY;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulseR * 1.8);
      const [hue, sat, light] = blob.color;
      gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${light}%, 0.06)`);
      gradient.addColorStop(0.5, `hsla(${hue}, ${sat}%, ${light}%, 0.03)`);
      gradient.addColorStop(1, `hsla(${hue}, ${sat}%, ${light}%, 0)`);

      ctx.beginPath();
      // Draw organic blob shape using bezier curves
      const points = 8;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const noise = Math.sin(angle * 3 + t * blob.speed * 2) * 15 + 
                      Math.cos(angle * 2 + t * blob.speed * 1.5) * 10;
        const r = pulseR + noise;
        const px = x + Math.cos(angle) * r;
        const py = y + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    // Subtle grid dots
    const spacing = 50;
    const dotPhase = t * 0.0003;
    for (let gx = 0; gx < w; gx += spacing) {
      for (let gy = 0; gy < h; gy += spacing) {
        const wave = Math.sin(gx * 0.01 + dotPhase) * Math.cos(gy * 0.01 + dotPhase);
        const opacity = 0.03 + wave * 0.015;
        if (opacity > 0.01) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(156, 163, 175, ${opacity})`;
          ctx.fill();
        }
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
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
      {/* Morphing blob background */}
      <MorphingBlobs />

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
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

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2"
        >
          Aqib Javid
        </motion.h1>

        {/* Role */}
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

        {/* CTA */}
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
