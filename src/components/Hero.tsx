import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useState } from "react";
import aqibAvatar from "@/assets/aqib-avatar.png";

const Hero = () => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background" />
      
      {/* Floating accent orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hover bubble for profile picture */}
      <AnimatePresence>
        {hoveredWord && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl animate-pulse" />
              <img
                src={aqibAvatar}
                alt="Aqib Javid"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-[-0.02em] mb-8"
          >
            I'm{" "}
            <span
              className="text-accent underline decoration-accent decoration-2 underline-offset-4 cursor-pointer"
              onMouseEnter={() => setHoveredWord("name")}
              onMouseLeave={() => setHoveredWord(null)}
            >
              Aqib
            </span>
            , a product designer focused on{" "}
            <span
              className="text-accent underline decoration-accent decoration-2 underline-offset-4 cursor-pointer"
              onMouseEnter={() => setHoveredWord("ux")}
              onMouseLeave={() => setHoveredWord(null)}
            >
              user experience
            </span>{" "}
            and{" "}
            <span
              className="text-accent underline decoration-accent decoration-2 underline-offset-4 cursor-pointer"
              onMouseEnter={() => setHoveredWord("design")}
              onMouseLeave={() => setHoveredWord(null)}
            >
              design systems
            </span>
            .
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed"
          >
            I specialize in creating beautiful, accessible digital products. Currently Sr Product Designer at Algorithm, with experience designing for mobile apps, web platforms, and design systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("work");
              }}
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="mailto:contact@aqibjavid.com"
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              contact@aqibjavid.com
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
